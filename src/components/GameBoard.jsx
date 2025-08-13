import React, { useState, useEffect } from 'react';
import { 
  generateBoard, 
  rollDice, 
  calculateNewPosition, 
  checkWinner,
  getSquareClassNames,
  getSquareContent
} from '../gameLogic';
import Dice from './Dice';
import GameInfo from './GameInfo';

const GameBoard = ({ players, onUpdatePlayers, onGameEnd }) => {
  const [board] = useState(generateBoard());
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [diceValue, setDiceValue] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [gameMessages, setGameMessages] = useState([]);
  const [gameStatus, setGameStatus] = useState('');

  const currentPlayer = players[currentPlayerIndex];

  useEffect(() => {
    updateGameStatus();
  }, [currentPlayerIndex, players]);

  const updateGameStatus = () => {
    setGameStatus(`${currentPlayer.name}'s turn`);
  };

  const addMessage = (message) => {
    setGameMessages(prev => [...prev, { id: Date.now(), text: message }]);
  };

  const rollDiceAndMove = () => {
    if (isRolling) return;

    setIsRolling(true);
    setDiceValue(null);

    // Simulate dice rolling animation
    setTimeout(() => {
      const newDiceValue = rollDice();
      setDiceValue(newDiceValue);
      setIsRolling(false);

      // Move player
      setTimeout(() => {
        movePlayer(newDiceValue);
      }, 500);
    }, 600);
  };

  const movePlayer = (diceValue) => {
    const currentPosition = currentPlayer.position;
    const newPosition = calculateNewPosition(currentPosition, diceValue);
    
    // Update player position
    const updatedPlayers = players.map((player, index) => 
      index === currentPlayerIndex 
        ? { ...player, position: newPosition }
        : player
    );

    onUpdatePlayers(updatedPlayers);

    // Add movement message
    let message = `${currentPlayer.name} rolled ${diceValue} and moved from ${currentPosition} to ${newPosition}`;

    // Check for special events
    if (newPosition !== currentPosition + diceValue) {
      if (newPosition < currentPosition + diceValue) {
        message += ` (hit by snake!)`;
      } else if (newPosition > currentPosition + diceValue) {
        message += ` (climbed ladder!)`;
      }
    }

    addMessage(message);

    // Check for winner
    if (checkWinner(newPosition)) {
      addMessage(`🎉 ${currentPlayer.name} wins the game! 🎉`);
      setTimeout(() => {
        onGameEnd(currentPlayer);
      }, 2000);
      return;
    }

    // Move to next player
    setTimeout(() => {
      setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
    }, 1000);
  };

  const getPlayerTokensAtPosition = (position) => {
    return players
      .map((player, index) => ({ ...player, index }))
      .filter(player => player.position === position);
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">Snakes & Ladders</h1>
        <p className="game-subtitle">Multiplayer Edition</p>
      </div>

      <div className="board-container">
        <div className="game-board">
          {board.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((square) => {
                const tokensAtPosition = getPlayerTokensAtPosition(square.number);
                return (
                  <div
                    key={square.number}
                    className={getSquareClassNames(square)}
                    title={`Square ${square.number}`}
                  >
                    {getSquareContent(square)}
                    
                    {tokensAtPosition.map((player, tokenIndex) => (
                      <div
                        key={player.id}
                        className={`player-token ${player.index === currentPlayerIndex ? 'current' : ''}`}
                        style={{
                          backgroundColor: player.color,
                          transform: `translate(-50%, -50%) translateX(${tokenIndex * 8}px)`,
                          zIndex: player.index === currentPlayerIndex ? 15 : 10
                        }}
                        title={player.name}
                      />
                    ))}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        <GameInfo
          players={players}
          currentPlayerIndex={currentPlayerIndex}
          diceValue={diceValue}
          isRolling={isRolling}
          onRollDice={rollDiceAndMove}
          gameStatus={gameStatus}
          gameMessages={gameMessages}
        />
      </div>
    </div>
  );
};

export default GameBoard;
