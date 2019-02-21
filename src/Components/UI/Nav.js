//npm import
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//local import

const Nav = ({ onFilmsClick, onPeopleClick, onPlanetsClick, onSpeciesClick, onStarshipsClick, onVehiclesClick }) => {
  return (
<<<<<<< HEAD
    <nav className='row'>
      <Link to='/films'
=======
    <div className="nav">
      <Link
        to='/films'
>>>>>>> new-version
        className="waves-effect waves-light btn nav" 
        onClick={onFilmsClick}>
          Films  
      </Link>
  
<<<<<<< HEAD
      <Link to='/people'
=======
      <Link
        to='/people'
>>>>>>> new-version
        className="waves-effect waves-light btn nav" 
        onClick={onPeopleClick}>
          People 
      </Link>
    
<<<<<<< HEAD
      <Link to='/planets'
=======
      <Link
        to='/planets'
>>>>>>> new-version
        className="waves-effect waves-light btn nav" 
        onClick={onPlanetsClick}>
          Planets 
      </Link>
    
<<<<<<< HEAD
      <Link to='/species'
=======
      <Link
        to='/species'
>>>>>>> new-version
        className="waves-effect waves-light btn nav" 
        onClick={onSpeciesClick}>
          Species 
      </Link>
  
<<<<<<< HEAD
      <Link to='/starships'
=======
      <Link
        to='/starships'
>>>>>>> new-version
        className="waves-effect waves-light btn nav" 
        onClick={onStarshipsClick}>
          Starships  
      </Link>
  
<<<<<<< HEAD
      <Link to='/vehicles'
=======
      <Link
        to='/vehicles'
>>>>>>> new-version
        className="waves-effect waves-light btn nav" 
        onClick={onVehiclesClick}>
          Vehicles 
      </Link>
<<<<<<< HEAD
    </nav>
  )
}
=======
    </div>
  )
}

>>>>>>> new-version
Nav.propTypes = {
  onFilmsClick: PropTypes.func.isRequired,
  onPeopleClick: PropTypes.func.isRequired,
  onPlanetsClick: PropTypes.func.isRequired,
  onSpeciesClick: PropTypes.func.isRequired,
  onStarshipsClick: PropTypes.func.isRequired,
  onVehiclesClick: PropTypes.func.isRequired
}
export default Nav;
