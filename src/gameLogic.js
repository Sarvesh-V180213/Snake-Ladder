// Game board configuration based on the provided board design
export const BOARD_SIZE = 100;

// Snakes configuration (from higher number to lower number)
export const SNAKES = {
  98: 83,
  94: 87,
  84: 77,
  79: 62,
  74: 54,
  67: 46,
  63: 38,
  57: 36,
  43: 23,
  34: 14,
  27: 7,
  17: 3
};

// Ladders configuration (from lower number to higher number)
export const LADDERS = {
  5: 16,
  25: 35,
  41: 60,
  51: 70,
  65: 76
};

// Special squares with penalties and bonuses
export const SPECIAL_SQUARES = {
  3: { type: 'penalty', value: -1, description: '(-1)' },
  8: { type: 'penalty', value: 'X', description: '(X)' },
  13: { type: 'penalty', value: -3, description: '(-3)' },
  25: { type: 'bonus', value: 3, description: '(+3)' },
  48: { type: 'penalty', value: -6, description: '(-6)' },
  54: { type: 'bonus', value: 4, description: '(+4)' },
  59: { type: 'bonus', value: 4, description: '(+4)' },
  71: { type: 'penalty', value: -3, description: '(-3)' },
  75: { type: 'penalty', value: 'X', description: '(X)' },
  79: { type: 'penalty', value: -2, description: '(-2)' },
  81: { type: 'penalty', value: -3, description: '(-3)' },
  86: { type: 'bonus', value: 2, description: '(+2)' },
  91: { type: 'penalty', value: 'X', description: '(X)' },
  93: { type: 'penalty', value: -4, description: '(-4)' },
  96: { type: 'penalty', value: -2, description: '(-2)' },
  99: { type: 'penalty', value: 'X', description: '(X)' },
  100: { type: 'reverse', value: 'reverse', description: '(Reverse)' }
};

// Player colors for tokens
export const PLAYER_COLORS = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Blue
  '#96CEB4', // Green
  '#FFEAA7', // Yellow
  '#DDA0DD', // Purple
  '#FFB347', // Orange
  '#98D8C8'  // Mint
];

// Generate board layout (10x10 grid with alternating direction)
export function generateBoard() {
  const board = [];
  for (let row = 9; row >= 0; row--) {
    const boardRow = [];
    const isReversed = (9 - row) % 2 === 1;
    
    for (let col = 0; col < 10; col++) {
      const actualCol = isReversed ? 9 - col : col;
      const number = row * 10 + actualCol + 1;
      
      boardRow.push({
        number,
        isSnakeHead: SNAKES.hasOwnProperty(number),
        isLadderStart: LADDERS.hasOwnProperty(number),
        isSpecial: SPECIAL_SQUARES.hasOwnProperty(number),
        specialInfo: SPECIAL_SQUARES[number] || null,
        snakeEnd: SNAKES[number] || null,
        ladderEnd: LADDERS[number] || null
      });
    }
    board.push(boardRow);
  }
  return board;
}

// Roll dice function
export function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Calculate new position after dice roll
export function calculateNewPosition(currentPosition, diceValue) {
  let newPosition = currentPosition + diceValue;
  
  // If player goes beyond 100, they stay in place
  if (newPosition > BOARD_SIZE) {
    return currentPosition;
  }
  
  // Check for special squares
  if (SPECIAL_SQUARES[newPosition]) {
    const special = SPECIAL_SQUARES[newPosition];
    
    if (special.type === 'reverse') {
      // Reverse direction - go back to previous position
      return Math.max(1, newPosition - diceValue);
    } else if (special.type === 'penalty') {
      if (special.value === 'X') {
        // Go back to start
        return 1;
      } else {
        // Apply penalty
        newPosition = Math.max(1, newPosition + special.value);
      }
    } else if (special.type === 'bonus') {
      // Apply bonus
      newPosition = Math.min(BOARD_SIZE, newPosition + special.value);
    }
  }
  
  // Check for snakes
  if (SNAKES[newPosition]) {
    return SNAKES[newPosition];
  }
  
  // Check for ladders
  if (LADDERS[newPosition]) {
    return LADDERS[newPosition];
  }
  
  return newPosition;
}

// Check if a player has won
export function checkWinner(position) {
  return position >= BOARD_SIZE;
}

// Get square class names for styling
export function getSquareClassNames(square) {
  const classes = ['square'];
  
  if (square.isSnakeHead) {
    classes.push('snake-head');
  } else if (square.isLadderStart) {
    classes.push('ladder-start');
  } else if (square.isSpecial) {
    classes.push('special');
  }
  
  return classes.join(' ');
}

// Get square content (number + special description)
export function getSquareContent(square) {
  if (square.specialInfo) {
    return (
      <div>
        <div>{square.number}</div>
        <div style={{ fontSize: '0.7rem', marginTop: '2px' }}>
          {square.specialInfo.description}
        </div>
      </div>
    );
  }
  return square.number;
}
