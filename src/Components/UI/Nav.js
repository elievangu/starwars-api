//npm import
import React from 'react';

//local import
import Link from './Link';

const Nav = () => {
  return (
    <nav className='row'>
      <Link children='Home'/>
      <Link children='People'/>
      <Link children='Planets'/>
      <Link children='Species'/>
      <Link children='Starships'/>
      <Link children='Vehicles'/>
    </nav>
  )
}

export default Nav;
