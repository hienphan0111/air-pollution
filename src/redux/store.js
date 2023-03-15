import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries';
import citiesReducer from './cities';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    cities: citiesReducer,
  },
});

export default store;
