import React from 'react';

const Square = ({ value, handleClick, isWinningSquare }) => {
   return (
      <button
         type="button"
         className={`square ${isWinningSquare ? 'winning' : ''} ${
            value === 'X' ? 'text-green' : 'text-orange'
         }`}
         onClick={() => handleClick()}
      >
         {value}
      </button>
   );
};

export default Square;
