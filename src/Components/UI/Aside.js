// npm import
import React from 'react';

//local import

const Aside = ({ name }) => {
  return (
    <div className="row aside">
        <div className="col s12 m7">
          <aside className="card-panel red">
            <span className="white-text">{name}</span>
          </aside>
        </div>
    </div>
    
  )
}

export default Aside;