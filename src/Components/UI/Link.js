//npm import
import React from 'react';

//local import

const Link = ({ active, children, onClick}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={active}
    >
      {children}  
    </button>
  )
}

export default Link;