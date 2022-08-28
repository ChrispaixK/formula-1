import { NavLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import NumberFormat from 'react-number-format';
import '../assets/css/Home.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchConstructors } from '../redux/constructors';
import { fetchDrivers } from '../redux/drivers';
import { fetchRaces } from '../redux/races';
import { fetchSeason } from '../redux/home';

const Home = (props) => {
  const [year, setYear] = useState('');
  const { season, actualYear } = props;
  const races = useSelector((state) => state.race);
  const drivers = useSelector((state) => state.driver);
  const constructors = useSelector((state) => state.constructor);
  const dispatch = useDispatch();
  const rgx = /(195\d|19[6-9]\d|20[01]\d|202[0-2])/;

  const fetchData = () => {
    dispatch(fetchConstructors(year));
    dispatch(fetchDrivers(year));
    dispatch(fetchRaces(year));
    dispatch(fetchSeason(year));
  };

  const enterBtnHandle = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      if (year.match(rgx)) {
        fetchData();
        setYear('');
      }
    }
  };

  const handleEvent = () => {
    fetchData();
    setYear('');
  };

  const changeSeason = (e) => {
    setYear(e.target.value);
  };

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
            value={year}
            onChange={changeSeason}
            onKeyDown={enterBtnHandle}
          />
          <i
            role="button"
            className="fa-solid fa-magnifying-glass search-btn"
            aria-label="Search"
            onClick={handleEvent}
            tabIndex={0}
            aria-hidden="true"
          />
        </Paper>
      </div>
      <div className="standings">
        <div className="st-left" />
        <div className="st-right">
          <p>{!season ? { actualYear } : season}</p>
          <p>Standings</p>
          <p>
            {races}
            races
          </p>
        </div>
      </div>
      <div className="other-data">
        <NavLink to="constructors">
          <div className="constructors">
            <div className="infos">
              <p>{!season ? { actualYear } : season}</p>
              <p>Constructors</p>
              <p>{constructors.length}</p>
            </div>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </NavLink>

        <NavLink to="drivers">
          <div className="drivers">
            <div className="infos">
              <p>{!season ? { actualYear } : season}</p>
              <p>Drivers</p>
              <p>{drivers.length}</p>
            </div>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </NavLink>
      </div>
    </>
  );
};

Home.propTypes = {
  season: PropTypes.string.isRequired,
  actualYear: PropTypes.string.isRequired,
};
export default Home;
