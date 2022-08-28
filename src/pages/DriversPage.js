import React from 'react';
import { useSelector } from 'react-redux';
import Driver from '../components/Drivers';

const Drivers = () => {
  const drivers = useSelector((state) => state.driver);
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
        {drivers.map((driver) => (
          <Driver
            key={`number${driver.position}`}
            name={driver.driverName}
            position={driver.position}
            wins={driver.wins}
            points={driver.points}
          />
        ))}
      </div>
    </>
  );
};

export default Drivers;
