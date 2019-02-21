//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import

const Header = ({ category }) => {
  return (
    <header>
      <h2>{category}</h2>
    </header>
  )
}

Header.propTypes = {
  category: PropTypes.string.isRequired
}

export default Header;  