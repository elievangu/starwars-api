//npm import
import React from 'react';

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

export default Section;