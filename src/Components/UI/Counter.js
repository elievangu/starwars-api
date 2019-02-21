//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import

const Counter = ({ page, pageNumber }) => {
  return (
    <i>
      {page} <span> sur </span> {pageNumber}
    </i>
  )
}

Counter.propTypes = {
  page: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired
}
export default Counter;