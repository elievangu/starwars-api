//npm import
import React from 'react';

//local import
import ArticleApp from '../../Containers/ArticleApp';
import Footer from '../UI/Footer';
import HeaderApp from '../../Containers/HeaderApp';
import NavApp from '../../Containers/NavApp';
import SectionApp from '../../Containers/SectionApp';
import ChartApp from '../../Containers/ChartApp';

const Species = () => {
  return (
    <div className='container'>
      <HeaderApp />
      <NavApp />
      <div className="content">
        <SectionApp />
        <ChartApp />
        <ArticleApp />
        <Footer />
      </div>  
    </div> 
  )
}

export default Species;