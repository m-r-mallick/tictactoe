import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/Helper';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXnext: true }];

const App = () => {
   const [history, setHistory] = useState(NEW_GAME);
   const [currentMove, setCurrentMove] = useState(0);

   const current = history[currentMove];
   const { winner, path } = calculateWinner(current.board);

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

   const moveTo = move => {
      setCurrentMove(move);
   };

   const onNewGame = () => {
      setHistory(NEW_GAME);
      setCurrentMove(0);
   };
   return (
      <div className="app">
         <h1>TIC TAC TOE</h1>
         <StatusMessage winner={winner} current={current} />
         <Board
            board={current.board}
            handleSquareClick={handleSquareClick}
            path={path}
         />
         <button type="button" onClick={() => onNewGame()}>
            Start new game
         </button>
         <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
   );
};

export default App;
