import React from 'react';

const Square = ({ value, handleClick, colorFormat }) => {
   return (
      <button
         style={colorFormat}
         type="button"
         className="square"
         onClick={() => handleClick()}
      >
         {value}
      </button>
   );
};

export default Square;
