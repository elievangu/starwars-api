//npm import
import React from 'react';

//local import
import Article from '../UI/Article';
import Aside from '../UI/Aside';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Nav from '../UI/Nav';
import Section from '../UI/Section';


const People = () => {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Section />
      <Article />
      <Aside />
      <Footer />
    </div>
  )
}

export default People;