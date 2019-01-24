//npm import
import React from 'react';
//local import
import AppLink from './AppLink';

const Nav = ({ onHomeClick, onPeopleClick, onPlanetsClick, onSpeciesClick, onStarshipsClick, onVehiclesClick }) => {
  return (
    <nav className='row'>
      <a href='/home'><AppLink children='Home' handleClick={onHomeClick} /></a>
      <a href='/people'><AppLink children='People' handleClick={onPeopleClick}/></a>
      <a href='/planets'><AppLink children='Planets' handleClick={onPlanetsClick}/></a>
      <a href='/species'><AppLink children='Species' handleClick={onSpeciesClick}/></a>
      <a href='/starships'><AppLink children='Starships' handleClick={onStarshipsClick}/></a>
      <a href='/vehicles'><AppLink children='Vehicles' handleClick={onVehiclesClick}/></a>
    </nav>
  )
}

export default Nav;
