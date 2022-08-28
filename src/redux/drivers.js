import apiURL from './API';

const DRIVERS = 'f1-standings/drivers/DRIVERS';
const driversEndPoint = '/driverStandings';

const driversReducer = (state = [], action) => {
  switch (action.type) {
    case DRIVERS:
      return action.drivers;
    default:
      return state;
  }
};

const getDrivers = (drivers) => ({
  type: DRIVERS,
  drivers,
});

const fetchDrivers = (year) => async (dispatch) => {
  const drivers = await fetch(`${apiURL}${year}${driversEndPoint}.json`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
      (driver) => {
        const { position, points, wins } = driver;
        const first = driver.Driver.givenName;
        const last = driver.Driver.familyName;
        const driverName = `${first} ${last}`;
        return {
          position,
          points,
          wins,
          driverName,
        };
      },
    ));
  dispatch(getDrivers(drivers));
};
export { DRIVERS, fetchDrivers };
export default driversReducer;
