//npm import
import React from 'react';
import PropTypes from 'prop-types';
//local import

const Header = ({ category }) => {
  return (
    <header className='row'>
      <h2>{category}</h2>
    </header>
  )
}

Header.propTypes = {
  category: PropTypes.string
}
export default Header;  