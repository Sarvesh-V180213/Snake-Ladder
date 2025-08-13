import React, { useState } from 'react';
import { PLAYER_COLORS } from '../gameLogic';

const GameSetup = ({ onStartGame }) => {
  const [players, setPlayers] = useState([
    { id: 1, name: '', color: PLAYER_COLORS[0], position: 1 },
    { id: 2, name: '', color: PLAYER_COLORS[1], position: 1 }
  ]);

  const addPlayer = () => {
    if (players.length < 8) {
      const newPlayer = {
        id: players.length + 1,
        name: '',
        color: PLAYER_COLORS[players.length],
        position: 1
      };
      setPlayers([...players, newPlayer]);
    }
  };

  const removePlayer = (id) => {
    if (players.length > 2) {
      setPlayers(players.filter(player => player.id !== id));
    }
  };

  const updatePlayer = (id, field, value) => {
    setPlayers(players.map(player => 
      player.id === id ? { ...player, [field]: value } : player
    ));
  };

  const handleStartGame = () => {
    const validPlayers = players.filter(player => player.name.trim() !== '');
    if (validPlayers.length >= 2) {
      onStartGame(validPlayers);
    } else {
      alert('Please enter names for at least 2 players!');
    }
  };

  const canStart = players.filter(player => player.name.trim() !== '').length >= 2;

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">Snakes & Ladders</h1>
        <p className="game-subtitle">Multiplayer Edition</p>
      </div>

      <div className="setup-form">
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
          Game Setup
        </h2>

        <div className="player-inputs">
          <label className="form-label">Players ({players.length}/8):</label>
          {players.map((player, index) => (
            <div key={player.id} className="player-input">
              <input
                type="color"
                className="color-picker"
                value={player.color}
                onChange={(e) => updatePlayer(player.id, 'color', e.target.value)}
                title="Choose player color"
              />
              <input
                type="text"
                className="form-input"
                placeholder={`Player ${index + 1} name`}
                value={player.name}
                onChange={(e) => updatePlayer(player.id, 'name', e.target.value)}
                style={{ flex: 1 }}
              />
              {players.length > 2 && (
                <button
                  onClick={() => removePlayer(player.id)}
                  style={{
                    background: '#ff4757',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                  title="Remove player"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        {players.length < 8 && (
          <button
            onClick={addPlayer}
            style={{
              background: '#2ed573',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              marginBottom: '20px',
              width: '100%'
            }}
          >
            + Add Player
          </button>
        )}

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Game Rules:</h3>
          <ul style={{ color: '#666', lineHeight: '1.6' }}>
            <li>Roll the dice to move your token</li>
            <li>Land on ladders to climb up</li>
            <li>Avoid snakes that will send you down</li>
            <li>Special squares have bonuses or penalties</li>
            <li>First player to reach square 100 wins!</li>
          </ul>
        </div>

        <button
          className="start-button"
          onClick={handleStartGame}
          disabled={!canStart}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameSetup;
