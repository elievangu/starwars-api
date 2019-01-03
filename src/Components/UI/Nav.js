//npm import
import React from 'react';

//local import
import Link from './Link';

const Nav = ({ onHomeClick, onPeopleClick, onPlanetsClick, onSpeciesClick, onStarshipsClick, onVehiclesClick }) => {
  return (
    <nav className='row'>
      <Link children='Home' handleClick={onHomeClick}/>
      <Link children='People' handleClick={onPeopleClick}/>
      <Link children='Planets' handleClick={onPlanetsClick}/>
      <Link children='Species' handleClick={onSpeciesClick}/>
      <Link children='Starships' handleClick={onStarshipsClick}/>
      <Link children='Vehicles' handleClick={onVehiclesClick}/>
    </nav>
  )
}

export default Nav;
