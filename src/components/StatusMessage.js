import React from 'react';

const StatusMessage = ({ winner, current }) => {
   return (
      <div className="status-message">
         {winner && (
            <>
               Winner is{' '}
               <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                  {winner}
               </span>{' '}
            </>
         )}
         {!winner && current.board.includes(null) && (
            <>
               Next player is{' '}
               <span className={current.isXnext ? 'text-green' : 'text-orange'}>
                  {current.isXnext ? 'X' : 'O'}
               </span>
            </>
         )}
         {!winner && !current.board.includes(null) && (
            <>
               <span className="text-green">X</span> and{' '}
               <span className="text-orange">O</span> tied!
            </>
         )}
      </div>
   );
};

export default StatusMessage;
