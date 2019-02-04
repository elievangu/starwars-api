//npm import
import React from 'react';
import PropTypes from 'prop-types';
//local import

const Article = ({ name }) => {
  return (
    <div className="row">
      <div className="col s12 m5">
        <article className="card-panel teal">
          <span className="white-text">
            <ul>{name}</ul>
          </span>
        </article>
      </div>
    </div>
  )
}

Article.propTypes = {
  name: PropTypes.arrayOf(
    PropTypes.object
  )
}
export default Article;