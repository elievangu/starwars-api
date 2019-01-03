//npm import
import React from 'react';

//local import

const Header = ({ category }) => {
  return (
    <header className='row'>
      <h2>{category}</h2>
    </header>
  )
}

export default Header;  