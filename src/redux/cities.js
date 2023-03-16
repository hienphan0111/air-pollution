import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const CITIES_URL = 'https://countriesnow.space/api/v0.1/countries/cities';
const API_KEY = 'a9f162e549927790acab08267ea7f9f2d6a44ac6';
// const AIR_URL = 'http://api.waqi.info/feed/';
// const CITY_LOCA = 'https://api.api-ninjas.com/v1/city?name=';
// const LOCA_KEY = 'mloFqsSPluWQ8UWJ9pJM2w==xej9B1wbh7CIAo74';

const APILAYER = 'https://api.apilayer.com/geo/country/cities/';
const APILAYER_KEY = 'Zi37M0ZPtfryDFAHnk6lXlzo2tDsrRo2';

export const getCities = createAsyncThunk(
  'get/getCities',
  async (country) => {
    try {
      const res = await axios.get(APILAYER + country, {
        headers: {
          apikey: APILAYER_KEY,
        },
      });
      const cities = res.data.map((city) => ({
        id: city.geo_id,
        name: city.name,
        latitude: city.latitude.toFixed(1),
        longitude: city.longitude.toFixed(1),
      }));
      return cities;
    } catch (e) {
      throw new Error('Something went wrong', e);
    }
  },
);

export const getAQCities = createAsyncThunk(
  'get/GetAQCities',
  async (cities) => {
    const newCities = cities.map(async (city) => {
      try {
        const {
          name, latitude, longitude, id,
        } = city;
        const res = await axios.get(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${API_KEY}`);
        return res.data.data;
      } catch (e) {
        throw new Error('something went wrong', e);
      }
    });
    console.log('get')
    const data = await Promise.all(newCities);
    const citiesAQ = data.map((item, index) => ({
        name: cities[index].name,
        id: cities[index].id,
        aqi: item.aqi,
        time: item.time,
        forecase: item.forecast.daily.pm25,
      }))
    return citiesAQ;
  },
  // for (const city of cities) {
  //   console.log(city);
  //   try {
  //     const {
  //       name, latitude, longitude, id,
  //     } = city;
  //     const res = await axios.get(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${API_KEY}`);
  //     console.log(res.data);
  //     const { forecast, aqi, time } = res.data.data;
  //     const { pm25 } = forecast.daily;
  //     newCities.push({
  //       name, id, aqi, time, pm25,
  //     });
  //   } catch (e) {
  //     throw new Error('something went wrong', e);
  //   }
  // }
);

const initialState = {
  cities: [],
  citiesAQ: [],
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
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(getCities.fulfilled, (state, action) => {
      const cities = action.payload.filter((item, index) => index < 20);
      // const cities = action.payload;
      // console.log(cities);
      return {
        ...state,
        cities,
        status: 'updateAQ',
      };
    });
    builder.addCase(getAQCities.fulfilled, (state, action) => {
      const citiesAQ = action.payload;
      console.log(citiesAQ);
      return {
        ...state,
        citiesAQ,
        status: 'complete',
      };
    });
  },
});

export default citiesSlice.reducer;

export const { setCountry } = citiesSlice.actions;
