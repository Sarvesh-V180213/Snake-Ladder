import React from 'react';

const Dice = ({ value, isRolling, onRoll }) => {
  return (
    <div className="dice-section">
      <div 
        className={`dice ${isRolling ? 'rolling' : ''}`}
        onClick={onRoll}
        title="Click to roll dice"
      >
        {value || '?'}
      </div>
      <button 
        className="roll-button"
        onClick={onRoll}
        disabled={isRolling}
      >
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default Dice;
