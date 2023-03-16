import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries';
import citiesReducer from './cities';
// import cityReducer from '@/routes/city-detail';
import cityReducer from './city';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    cities: citiesReducer,
    cityInfo: cityReducer,
  },
});

export default store;
