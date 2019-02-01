//npm import
import React from 'react';
import { connect } from 'react-redux';

//local import
import Article from '../Components/UI/Article';

const mapStateToProps = (state) => {
  return {
    name: state.posts.posts.map(post => 
      post.name ? <li key={post.name}>{post.name}</li> : <li key={post.title}>{post.title}</li>)  
  }
}

const ArticleApp = connect(
  mapStateToProps,
  null
)(Article)

export default ArticleApp;