//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import

const PrevButton = ({ handlePrevClick }) => {
  return (
    <button
    className="btn-floating btn-large red pulse prev" 
    onClick={handlePrevClick}  
    >
    PREV.
    </button>
  )
}
PrevButton.propTypes = {
  handlePrevClick: PropTypes.func.isRequired
}
export default PrevButton;