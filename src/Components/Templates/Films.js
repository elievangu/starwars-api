//npm import
import React from 'react';

//local import
import ArticleApp from '../../Containers/ArticleApp';
import SectionApp from '../../Containers/SectionApp';
import Footer from '../UI/Footer';
import HeaderApp from '../../Containers/HeaderApp';
import NavApp from '../../Containers/NavApp';
import ChartApp from '../../Containers/ChartApp';


const Films = () => {
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

export default Films;
