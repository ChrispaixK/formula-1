const SEASON = 'f1-standings/homepage/SEASON';

const homeReducer = (state = [], action) => {
  switch (action.type) {
    case SEASON:
      return action.year;
    default:
      return state;
  }
};

const getSeason = (year) => ({
  type: SEASON,
  year,
});

const fetchSeason = (year) => (dispatch) => {
  dispatch(getSeason(year));
};

export { fetchSeason };
export default homeReducer;
