import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import constructorReducer, { fetchConstructors } from './constructors';
import driversReducer, { fetchDrivers } from './drivers';
import homeReducer, { fetchSeason } from './home';
import racesReducer, { fetchRaces } from './races';

const actualYear = new Date().getFullYear().toString();
const reducers = combineReducers({
  home: homeReducer,
  driver: driversReducer,
  constructor: constructorReducer,
  race: racesReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
store.dispatch(fetchSeason(actualYear));
store.dispatch(fetchDrivers(actualYear));
store.dispatch(fetchConstructors(actualYear));
store.dispatch(fetchRaces(actualYear));

export default store;
