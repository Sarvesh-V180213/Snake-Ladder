# Snakes & Ladders - Multiplayer Edition

A modern, interactive multiplayer Snakes and Ladders game built with React and Vite. This game features a beautiful UI, smooth animations, and all the classic game mechanics you love!

## 🎮 Features

- **Multiplayer Support**: Play with 2-8 players
- **Custom Board Design**: Based on a real hand-drawn board with exact snakes, ladders, and special squares
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Interactive Dice**: Click to roll with animated dice
- **Player Tokens**: Colorful tokens that move around the board
- **Game Log**: Track all moves and events
- **Special Squares**: Bonuses, penalties, and reverse squares
- **Snakes & Ladders**: Classic gameplay mechanics
- **Winner Celebration**: Animated winner modal

## 🎯 Game Rules

1. **Objective**: Be the first player to reach square 100
2. **Movement**: Roll the dice and move your token forward
3. **Ladders**: Land on a ladder start to climb up to the end
4. **Snakes**: Land on a snake head to slide down to the tail
5. **Special Squares**:
   - **Bonuses** (+2, +3, +4): Move forward extra spaces
   - **Penalties** (-1, -2, -3, -4, -6): Move backward
   - **X Squares**: Go back to start (square 1)
   - **Reverse Square** (100): Go back to previous position
6. **Exact Landing**: You must land exactly on square 100 to win

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have git installed
   git clone <repository-url>
   cd snakes-and-ladders
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The game will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to the URL

## 🎨 How to Play

### Game Setup
1. Enter player names (2-8 players)
2. Choose custom colors for each player
3. Click "Start Game" to begin

### During the Game
1. The current player's turn is highlighted
2. Click the dice or "Roll Dice" button to roll
3. Watch your token move automatically
4. Special events (snakes, ladders, bonuses) are applied automatically
5. The game continues until someone reaches square 100

### Game Features
- **Visual Feedback**: Current player's token pulses
- **Game Log**: See all moves and events
- **Player Status**: Track each player's position
- **Responsive Design**: Works on desktop and mobile

## 🛠️ Technical Details

### Built With
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with animations
- **JavaScript ES6+**: Modern JavaScript features

### Project Structure
```
src/
├── components/
│   ├── GameSetup.jsx      # Player setup screen
│   ├── GameBoard.jsx      # Main game board
│   ├── GameInfo.jsx       # Player info and dice
│   ├── Dice.jsx          # Dice component
│   └── WinnerModal.jsx   # Winner celebration
├── gameLogic.js          # Game rules and board configuration
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles
```

### Board Configuration
The game board is based on a real hand-drawn design with:
- **12 Snakes**: From higher to lower numbers
- **5 Ladders**: From lower to higher numbers
- **16 Special Squares**: Various bonuses and penalties
- **Alternating Direction**: Numbers snake back and forth

## 🎯 Special Squares

| Square | Type | Effect |
|--------|------|--------|
| 3 | Penalty | -1 space |
| 8 | Penalty | Go back to start |
| 13 | Penalty | -3 spaces |
| 25 | Bonus | +3 spaces |
| 48 | Penalty | -6 spaces |
| 54 | Bonus | +4 spaces |
| 59 | Bonus | +4 spaces |
| 71 | Penalty | -3 spaces |
| 75 | Penalty | Go back to start |
| 79 | Penalty | -2 spaces |
| 81 | Penalty | -3 spaces |
| 86 | Bonus | +2 spaces |
| 91 | Penalty | Go back to start |
| 93 | Penalty | -4 spaces |
| 96 | Penalty | -2 spaces |
| 99 | Penalty | Go back to start |
| 100 | Reverse | Go back to previous position |

## 🎮 Multiplayer Features

- **Local Multiplayer**: All players share one device
- **Turn-based**: Automatic turn switching
- **Visual Indicators**: Current player highlighting
- **Game State**: Persistent game state during play
- **Winner Detection**: Automatic win condition checking

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify/Vercel
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure your hosting service to serve the `index.html` file

## 🎨 Customization

### Adding More Players
- Modify the `PLAYER_COLORS` array in `gameLogic.js`
- Update the player limit in `GameSetup.jsx`

### Changing Board Layout
- Modify the `SNAKES`, `LADDERS`, and `SPECIAL_SQUARES` objects in `gameLogic.js`
- Update the `generateBoard()` function if needed

### Styling Changes
- Edit `src/index.css` for visual changes
- Modify component styles for specific elements

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the UI/UX
- Adding new game modes

## 📝 License

This project is open source and available under the MIT License.

## 🎉 Enjoy the Game!

Have fun playing Snakes & Ladders with your friends and family! The game is designed to be intuitive and enjoyable for players of all ages.

---

**Note**: This is a local multiplayer game where all players share the same device. For online multiplayer, additional backend infrastructure would be needed.
