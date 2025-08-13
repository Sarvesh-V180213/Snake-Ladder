import React, { useState } from 'react';
import GameSetup from './components/GameSetup';
import GameBoard from './components/GameBoard';
import WinnerModal from './components/WinnerModal';

function App() {
  const [gameState, setGameState] = useState('setup'); // 'setup', 'playing', 'finished'
  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState(null);

  const startGame = (gamePlayers) => {
    setPlayers(gamePlayers);
    setGameState('playing');
  };

  const endGame = (winningPlayer) => {
    setWinner(winningPlayer);
    setGameState('finished');
  };

  const resetGame = () => {
    setGameState('setup');
    setPlayers([]);
    setWinner(null);
  };

  const updatePlayers = (updatedPlayers) => {
    setPlayers(updatedPlayers);
  };

  return (
    <div className="container">
      {gameState === 'setup' && (
        <GameSetup onStartGame={startGame} />
      )}
      
      {gameState === 'playing' && (
        <GameBoard 
          players={players} 
          onUpdatePlayers={updatePlayers}
          onGameEnd={endGame}
        />
      )}
      
      {gameState === 'finished' && winner && (
        <WinnerModal 
          winner={winner} 
          onNewGame={resetGame}
        />
      )}
    </div>
  );
}

export default App;
