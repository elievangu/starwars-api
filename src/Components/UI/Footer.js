//npm import
import React from 'react';

//local import
import NextButtonApp from '../../Containers/NextButtonApp'
import PrevButtonApp from '../../Containers/PrevButtonApp';
const Footer = () => {
  return (
    <footer>
      <PrevButtonApp />
      <NextButtonApp />
    </footer>
  )
}

export default Footer;