import React from 'react';
import Driver from '../components/Drivers';

const Drivers = () => {
  return (
    <>
      <div className="driverPage">
        <div className="hero">
          <h2>Driver</h2>
        </div>
        <div className="data-label">
          <p>naMe</p>
          <p>poSitIon</p>
          <p>wins</p>
          <p>points</p>
        </div>
        <Driver />
      </div>
    </>
  );
};

export default Drivers;
