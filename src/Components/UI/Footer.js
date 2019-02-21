//npm import
import React from 'react';

//local import
import NextButtonApp from '../../Containers/NextButtonApp'
import PrevButtonApp from '../../Containers/PrevButtonApp';
import CounterApp from '../../Containers/CounterApp';

const Footer = () => {
  return (
    <footer>
      <PrevButtonApp />
      <CounterApp />
      <NextButtonApp />
    </footer>
  )
}

export default Footer;