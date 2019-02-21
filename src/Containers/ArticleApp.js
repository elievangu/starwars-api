//npm import
import React from "react";
import { connect } from "react-redux";


//local import
import Article from "../Components/UI/Article";

const mapStateToProps = (state) => {
  const array = Object.entries(state.posts.posts);

  return {
    name: array.map((x) => (
      <li key={x[0]} className="items">
        {(Array.isArray(x[1]) ?
          null :
          (x[0].replace(/_/g, " ").charAt(0).toUpperCase() + x[0].replace(/_/g, " ").slice(1)) + " : " + x[1])} 
      </li>
    ))
  };
};

      const ArticleApp = connect(
        mapStateToProps,
        null
      )(Article);

      export default ArticleApp;
