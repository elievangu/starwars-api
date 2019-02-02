//npm import
import React from 'react';
import PropTypes from 'prop-types';

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
 NextButton.propTypes = {
  handleNextClick: PropTypes.func.isRequired
 }
export default NextButton;