import apiURL from './API';

const CONSTRUCTORS = 'f1-standings/constructors/CONSTRUCTORS';
const constructorsEndPoint = '/constructorStandings';

const constructorReducer = (state = [], action) => {
  switch (action.type) {
    case CONSTRUCTORS:
      return action.constructors;
    default:
      return state;
  }
};

const getConstructors = (constructors) => ({
  type: CONSTRUCTORS,
  constructors,
});

const fetchConstructors = (year) => async (dispatch) => {
  if (year < 1958) {
    dispatch(getConstructors([]));
  }
  const constructors = await fetch(
    `${apiURL}${year}${constructorsEndPoint}.json`,
  )
    .then((res) => res.json())
    .then((data) => data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
      (constructor) => {
        const { position, points, wins } = constructor;
        const { name } = constructor.Constructor;
        return {
          position,
          points,
          wins,
          name,
        };
      },
    ));
  dispatch(getConstructors(constructors));
};

export { CONSTRUCTORS, fetchConstructors };
export default constructorReducer;
