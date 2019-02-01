//npm import
import React from 'react';
import { Link } from 'react-router-dom';
//local import

const Nav = ({ onHomeClick, onPeopleClick, onPlanetsClick, onSpeciesClick, onStarshipsClick, onVehiclesClick }) => {
  return (
    <nav className='row'>
      <Link
        to='/films'
        className="waves-effect waves-light btn nav" 
        onClick={onHomeClick}>
          Films  
      </Link>
  
      <Link
        to='/people'
        className="waves-effect waves-light btn nav" 
        onClick={onPeopleClick}>
          People 
      </Link>
    
      <Link
        to='/planets'
        className="waves-effect waves-light btn nav" 
        onClick={onPlanetsClick}>
          Planets 
      </Link>
    
      <Link
        to='/species'
        className="waves-effect waves-light btn nav" 
        onClick={onSpeciesClick}>
          Species 
      </Link>
  
      <Link
        to='/starships'
        className="waves-effect waves-light btn nav" 
        onClick={onStarshipsClick}>
          Starships  
      </Link>
  
      <Link
        to='/vehicles'
        className="waves-effect waves-light btn nav" 
        onClick={onVehiclesClick}>
          Vehicles 
      </Link>
    </nav>
  )
}

export default Nav;
