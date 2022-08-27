import { NavLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import NumberFormat from 'react-number-format';
import '../assets/css/Home.css';

const Home = () => {
  return (
    <>
      <div className="top-title">
        <h1>Formula-1</h1>
        <p>Records</p>
      </div>
      <div className="search-bar">
        <Paper component="form" className="paper">
          <NumberFormat
            format="####"
            placeholder="Search data by year"
            className="searched"
          />
          <i className="fa-solid fa-magnifying-glass search-btn" />
        </Paper>
      </div>
      <div className="standings">
        <div className="st-left" />
        <div className="st-right">
          <p>2022</p>
          <p>Standings</p>
          <p>16 races</p>
        </div>
      </div>
      <div className="other-data">
        <NavLink to="constructors">
          <div className="constructors">
            <div className="infos">
              <p>2022</p>
              <p>Constructors</p>
              <p>16</p>
            </div>
          </div>
        </NavLink>

        <NavLink to="drivers">
          <div className="drivers">
            <div className="infos">
              <p>2022</p>
              <p>Drivers</p>
              <p>12</p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
