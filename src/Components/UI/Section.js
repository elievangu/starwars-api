//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import

const Section = ({ name }) => {
  return (
    <section className="">
      <span className="white-text">
        {name}
      </span>
    </section>    
  )
}

Section.propTypes = {
  category: PropTypes.string.isRequired
}
<<<<<<< HEAD
=======

>>>>>>> new-version
export default Section;