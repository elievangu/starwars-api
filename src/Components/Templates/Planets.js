//npm import
import React from 'react';

//local import
import ArticleApp from '../../Containers/ArticleApp';
import Footer from '../UI/Footer';
import HeaderApp from '../../Containers/HeaderApp';
import NavApp from '../../Containers/NavApp';
import SectionApp from '../../Containers/SectionApp';
import AsideApp from '../../Containers/AsideApp';

const Planets = () => {
  return (
    <div className='app'>
      <HeaderApp />
      <NavApp />
      <SectionApp />
      <ArticleApp />
      <AsideApp />
      <Footer />
    </div>
  )
}

export default Planets;
