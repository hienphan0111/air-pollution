import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CITIES_URL = 'https://countriesnow.space/api/v0.1/countries/cities';
const API_KEY = 'a9f162e549927790acab08267ea7f9f2d6a44ac6';
const AIR_URL = 'http://api.waqi.info/feed/';
const CITY_LOCA = 'https://api.api-ninjas.com/v1/city?name=';
const LOCA_KEY = 'mloFqsSPluWQ8UWJ9pJM2w==xej9B1wbh7CIAo74';

export const getCities = createAsyncThunk(
  'get/getCities',
  async (country) => {
    try {
      const res = await axios.post(CITIES_URL, { country, });
      const citiesList = res.data.data.filter((city, index) => index < 100);
      const cities = [];
      console.log(citiesList);
      for (const item of citiesList) {
        
        const data = await axios.get(CITY_LOCA + item, {
          headers: {
            'X-Api-Key': LOCA_KEY,
          },
        });
        console.log(data.data);
        const { latitude, longitude } = data.data[0];
        cities.push({
          name: item,
          latitude,
          longitude,
        })
      }
      return cities;
    } catch (e) {
      throw new Error('Something went wrong', e);
    }
  }
);

export const getAQCities = createAsyncThunk(
  'get/GetAQCities',
  async (cities) => {
    const newCities = [];
    for ( const city of cities ) {
      try {
        console.log(city);
        const res = await axios.get(AIR_URL + city.replace(' ','') + '?token=' + API_KEY);
        console.log(res.data);
        const { idx, aqi, time } = res.data.data;
        newCities.push({ name: city, idx, aqi, time });
      } catch (e) {
        throw new Error('something went wrong', e);
      }
    }
    return newCities;
  }
)

const initialState = {
  cities: [],
  country: '',
  status: 'updateCities',
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      const country = action.payload;
      console.log(country);
      return {
        ...state,
        country,
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(getCities.fulfilled, (state, action) => {
      // const cities = action.payload.data.filter((item, index) => index < 100);
      return {
        ...state,
        cities,
        status: 'updateAQ',
      }
    }),
    builder.addCase(getAQCities.fulfilled, (state, action) => {
      const cities = action.payload.filter((city) => city.idx);
      console.log('aq complete')
      return {
        ...state,
        cities,
        status: 'complete',
      }
    })
  }
});

export default citiesSlice.reducer;

export const { setCountry } = citiesSlice.actions;
