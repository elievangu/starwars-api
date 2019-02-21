//npm import
import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

=======
>>>>>>> new-version
//local import

const Article = ({ name }) => {
  return (
    <article>
      <span className="white-text">
        <ul>{name}</ul>
      </span>
    </article>
    
  )
}

Article.propTypes = {
  name: PropTypes.arrayOf(
    PropTypes.object
  )
}
export default Article;