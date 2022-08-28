import React from 'react';
import { useSelector } from 'react-redux';
import Constructor from '../components/Constructor';
import '../assets/css/constructorPage.css';

const Constructors = () => {
  const constructors = useSelector((state) => state.constructor);

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
      {constructors.length > 0 ? (
        Object.values(constructors).map((constructor) => (
          <Constructor
            key={`number${constructor.position}`}
            name={constructor.name}
            position={constructor.position}
            wins={constructor.wins}
            points={constructor.points}
          />
        ))
      ) : (
        <h2>No Constructors</h2>
      )}
    </div>
  );
};

export default Constructors;
