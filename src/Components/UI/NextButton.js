//npm import
import React from 'react';

//local import

const NextButton = ({handleNextClick}) => {
  return (
    <button
      onClick={handleNextClick}
    >
      Next Page
    </button>
  )
}

export default NextButton;