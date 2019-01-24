//npm import
import React from 'react';

//local import

const AppLink = ({ active, children, handleClick}) => {
  return (
    <button
      className="waves-effect waves-light btn nav" 
      onClick={handleClick} 
      disabled={active}
    >
      {children}  
    </button>
  )
}

export default AppLink;