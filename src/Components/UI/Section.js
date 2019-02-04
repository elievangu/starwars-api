//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import

const Section = ({ category }) => {
  return (
    <div className="row">
      <div className="col s12 m5">
        <section className="card-panel blue">
          <span className="white-text">
            {category}
          </span>
        </section>
      </div>
    </div>
    
  )
}

Section.propTypes = {
  category: PropTypes.string.isRequired
}

export default Section;