//npm import
import React from 'react';

//local import
import ArticleApp from '../../Containers/ArticleApp';
import SectionApp from '../../Containers/SectionApp';
import Footer from '../UI/Footer';
import HeaderApp from '../../Containers/HeaderApp';
import NavApp from '../../Containers/NavApp';

const Home = () => {
  return (
    <div className='container'>
      <HeaderApp />
      <NavApp />
      <SectionApp />
      <ArticleApp />
      <Footer />
    </div> 
  )
}

export default Home;
