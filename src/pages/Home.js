import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <NavLink to="drivers">
        Drivers
      </NavLink>
      <NavLink to="constructors">
        Constructors
      </NavLink>
      <NavLink to="about">
        About
      </NavLink>
    </>
  );
};

export default Home;
