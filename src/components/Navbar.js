import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { season, actualYear } = props;

  return (
    <div className="navbar">
      <div className="nav-left">
        <p>
          <NavLink to="/">
            <i className="fa-solid fa-angle-left" />
          </NavLink>
          {!season ? { actualYear } : season}
        </p>
      </div>
      <div className="nav-center">
        <p>Formula-1 Records</p>
      </div>
      <div className="nav-right">
        <p>
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </p>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  season: PropTypes.string.isRequired,
  actualYear: PropTypes.string.isRequired,
};

export default Navbar;
