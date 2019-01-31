//npm import
import React from 'react';
//local import

const Nav = ({ onHomeClick, onPeopleClick, onPlanetsClick, onSpeciesClick, onStarshipsClick, onVehiclesClick }) => {
  return (
    <nav className='row'>
      <button
        className="waves-effect waves-light btn nav" 
        onClick={onHomeClick}>
          Films  
      </button>
  
      <button
        className="waves-effect waves-light btn nav" 
        onClick={onPeopleClick}>
          People 
      </button>
    
      <button
        className="waves-effect waves-light btn nav" 
        onClick={onPlanetsClick}>
          Planets 
      </button>
    
      <button
        className="waves-effect waves-light btn nav" 
        onClick={onSpeciesClick}>
          Species 
      </button>
  
      <button
        className="waves-effect waves-light btn nav" 
        onClick={onStarshipsClick}>
          Starships  
      </button>
  
      <button
        className="waves-effect waves-light btn nav" 
        onClick={onVehiclesClick}>
          Vehicles 
      </button>
    </nav>
  )
}

export default Nav;
