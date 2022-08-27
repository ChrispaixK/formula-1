import React from 'react';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <p>
          <i className="fa-solid fa-angle-left" />
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
