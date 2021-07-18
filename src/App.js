import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/Helper';

import './styles/root.scss';

const App = () => {
   const [board, setBoard] = useState(Array(9).fill(null));
   const [isXnext, setIsXnext] = useState(true);

   const winner = calculateWinner(board);

   const handleSquareClick = position => {
      if (board[position] || winner) {
         return;
      }
      setBoard(prevState => {
         return prevState.map((square, pos) => {
            if (square === null && pos === position) {
               return isXnext ? 'X' : 'O';
            }
            return square;
         });
      });
      setIsXnext(prev => !prev);
   };
   const message = winner
      ? `Winner is ${winner}`
      : `Next player is ${isXnext ? 'X' : 'O'}`;

   return (
      <div className="app">
         <h1>TIC TAC TOE</h1>
         <h1>{message}</h1>

         <Board board={board} handleSquareClick={handleSquareClick} />
      </div>
   );
};

export default App;
