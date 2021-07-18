import React from 'react';

const StatusMessage = ({ winner, current }) => {
   return (
      <h2>
         {winner && `Winner is ${winner}`}
         {!winner &&
            current.board.includes(null) &&
            `Next player is ${current.isXnext ? 'X' : 'O'}`}
         {!winner && !current.board.includes(null) && `DRAW!`}
      </h2>
   );
};

export default StatusMessage;
