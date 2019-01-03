//npm import
import React from 'react';

//local import

const Article = ({ name }) => {
  return (
    <div className="row">
      <div className="col s12 m5">
        <article className="card-panel teal">
          <span className="white-text">
            {name}
          </span>
        </article>
      </div>
    </div>
  )
}

export default Article;