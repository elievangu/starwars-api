//npm import
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//local import

const Nav = ({ onFilmsClick, onPeopleClick, onPlanetsClick, onSpeciesClick, onStarshipsClick, onVehiclesClick }) => {
  return (
    <div className="nav">
      <Link
        to='/films'
        className="waves-effect waves-light btn nav" 
        onClick={onFilmsClick}>
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
    </div>
  )
}

Nav.propTypes = {
  onFilmsClick: PropTypes.func.isRequired,
  onPeopleClick: PropTypes.func.isRequired,
  onPlanetsClick: PropTypes.func.isRequired,
  onSpeciesClick: PropTypes.func.isRequired,
  onStarshipsClick: PropTypes.func.isRequired,
  onVehiclesClick: PropTypes.func.isRequired
}
export default Nav;
