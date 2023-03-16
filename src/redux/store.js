import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries';
import citiesReducer from './cities';
import cityReducer from '@/routes/city-detail';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    cities: citiesReducer,
    cityDetail: cityReducer,
  },
});

export default store;
