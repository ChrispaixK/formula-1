import React from 'react';
import '../assets/css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <div className="navbar">
      <div className="nav-left">
        <p>
          <NavLink to="/">
            <i className="fa-solid fa-angle-left" />
          </NavLink>
          2018
        </p>
      </div>
      <div className="nav-center">
        <p>Home page</p>
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

export default Navbar;
