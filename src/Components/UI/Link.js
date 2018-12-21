//npm import
import React from 'react';

//local import

const Link = ({ active, children, onClick}) => {
  return (
    <button
      className="waves-effect waves-light btn nav" 
      onClick={onClick} 
      disabled={active}
    >
      {children}  
    </button>
  )
}

export default Link;