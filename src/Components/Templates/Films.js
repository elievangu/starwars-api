//npm import
import React from 'react';

//local import
import Article from '../UI/Article';
import Aside from '../UI/Aside';
import Section from '../UI/Section'
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Nav from '../UI/Nav';

const Films = () => {
  return (
    <div className='container'>
      <Header />
      <Nav />
      <Section />
      <Article />
      <Aside />
      <Footer />
    </div> 
  )
}

export default Films;
