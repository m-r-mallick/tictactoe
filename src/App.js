import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/Helper';

import './styles/root.scss';

const App = () => {
   const [history, setHistory] = useState([
      { board: Array(9).fill(null), isXnext: true },
   ]);
   const [currentMove, setCurrentMove] = useState(0);

   const current = history[currentMove];
   const winner = calculateWinner(current.board);

   const handleSquareClick = position => {
      if (current.board[position] || winner) {
         return;
      }
      setHistory(prevState => {
         const last = prevState[prevState.length - 1];
         const newBoard = last.board.map((square, pos) => {
            if (square === null && pos === position) {
               return last.isXnext ? 'X' : 'O';
            }
            return square;
         });
         return [...history, { board: newBoard, isXnext: !last.isXnext }];
      });
      setCurrentMove(prevState => prevState + 1);
   };
   const message = winner
      ? `Winner is ${winner}`
      : `Next player is ${current.isXnext ? 'X' : 'O'}`;

   return (
      <div className="app">
         <h1>TIC TAC TOE</h1>
         <h1>{message}</h1>
         <Board board={current.board} handleSquareClick={handleSquareClick} />
         {history.map((move, index) => (
            <li key={index}>{JSON.stringify(move, undefined, 3)}</li>
         ))}
      </div>
   );
};

export default App;
