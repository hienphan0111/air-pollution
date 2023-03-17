import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_COUNTRIES = 'https://restcountries.com/v3.1/all';

export const getCoutries = createAsyncThunk(
  'get/getCountries',
  async () => {
    try {
      const res = await axios.get(URL_COUNTRIES);
      return res.data;
    } catch (e) {
      throw new Error('Something went wrong', e);
    }
  },
);

const initialState = {
  countries: [],
  status: 'update',
};

const countries = createSlice({
  name: 'countries',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getCoutries.fulfilled, (state, action) => {
        const countries = action.payload.map((country) => (
          {
            id: country.cca2,
            name: country.name.official,
            flag: country.flags.svg,
            region: country.subregion,
          }
        ));
        return {
          countries,
          status: 'complete',
        };
      });
  },
});

export default countries.reducer;
