import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  }
});
