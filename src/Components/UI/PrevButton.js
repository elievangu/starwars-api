//npm import
import React from 'react';

//local import

const PrevButton = ({ handlePrevClick }) => {
  return (
    <button
    className="btn-floating btn-large red pulse prev" 
    onClick={handlePrevClick}  
    >
    -
    </button>
  )
}

export default PrevButton;