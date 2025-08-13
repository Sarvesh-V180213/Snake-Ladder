import React from 'react';
import Dice from './Dice';

const GameInfo = ({ 
  players, 
  currentPlayerIndex, 
  diceValue, 
  isRolling, 
  onRollDice, 
  gameStatus, 
  gameMessages 
}) => {
  return (
    <div className="game-info">
      <div className="game-status">
        <div className="status-text">{gameStatus}</div>
      </div>

      <Dice 
        value={diceValue}
        isRolling={isRolling}
        onRoll={onRollDice}
      />

      <div className="players-list">
        <h3 style={{ marginBottom: '15px', color: '#333' }}>Players:</h3>
        {players.map((player, index) => (
          <div 
            key={player.id} 
            className={`player-item ${index === currentPlayerIndex ? 'current' : ''}`}
          >
            <div 
              className="player-color"
              style={{ backgroundColor: player.color }}
            />
            <div className="player-name">{player.name}</div>
            <div className="player-position">#{player.position}</div>
          </div>
        ))}
      </div>

      <div className="game-messages">
        <h3 style={{ marginBottom: '15px', color: '#333' }}>Game Log:</h3>
        {gameMessages.length === 0 ? (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            Game will start when first player rolls the dice...
          </div>
        ) : (
          gameMessages.slice(-10).map((message) => (
            <div key={message.id} className="message">
              {message.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameInfo;
