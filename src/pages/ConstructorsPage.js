import React from 'react';
import Constructor from '../components/Constructor';
import '../assets/css/constructorPage.css';

const Constructors = () => {
  return (
    <div className="constructorsPage">
      <div className="hero">
        <h2>Constructors list</h2>
      </div>
      <div className="data-label">
        <p>naMe</p>
        <p>poSitIon</p>
        <p>wins</p>
        <p>points</p>
      </div>
      <Constructor />
    </div>
  );
};

export default Constructors;
