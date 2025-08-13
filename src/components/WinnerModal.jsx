import React from 'react';

const WinnerModal = ({ winner, onNewGame }) => {
  return (
    <div className="winner-modal">
      <div className="winner-content">
        <h1 className="winner-title">🎉 Winner! 🎉</h1>
        <div className="winner-name">
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: winner.color,
              margin: '0 auto 15px',
              border: '3px solid white',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          />
          {winner.name}
        </div>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Congratulations! You've reached square 100 and won the game!
        </p>
        <button className="new-game-button" onClick={onNewGame}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinnerModal;
