//npm import
import React from 'react';

//local import

const NextButton = ({ handleNextClick }) => {
  return (
    <button
      className="btn-floating btn-large cyan pulse next" 
      onClick={handleNextClick}
    >
    NEXT
    </button>
  )
}

export default NextButton;