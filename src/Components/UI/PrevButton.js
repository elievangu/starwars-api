//npm import
import React from 'react';

//local import

const PrevButton = ({handlePrevClick}) => {
  return (
    <button
      onClick={handlePrevClick}
    >
      Previous page
    </button>
  )
}

export default PrevButton;