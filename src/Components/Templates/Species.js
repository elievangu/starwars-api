//npm import
import React from 'react';

//local import
import ArticleApp from '../../Containers/ArticleApp';
import Footer from '../UI/Footer';
import HeaderApp from '../../Containers/HeaderApp';
import NavApp from '../../Containers/NavApp';
import SectionApp from '../../Containers/SectionApp';

const Species = () => {
  return (
    <div className='app'>
      <HeaderApp />
      <NavApp />
      <SectionApp />
      <ArticleApp />
      <Footer />
    </div>
  )
}

export default Species;