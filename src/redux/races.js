import apiURL from './API';

const RACES = 'f1-standings/drivers/RACES';
const racesEndPoint = '/driverStandings';

const racesReducer = (state = [], action) => {
  switch (action.type) {
    case RACES:
      return action.races;
    default:
      return state;
  }
};

const getRaces = (races) => ({
  type: RACES,
  races,
});

const fetchRaces = (year) => async (dispatch) => {
  const races = await fetch(`${apiURL}${year}${racesEndPoint}.json`)
    .then((res) => res.json())
    .then((data) => {
      const numberOfRaces = data.MRData.StandingsTable.StandingsLists[0].round;
      return numberOfRaces;
    });
  dispatch(getRaces(races));
};

export { fetchRaces };
export default racesReducer;
