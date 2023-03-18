import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cityDetail: [],
};

const citySlice = createSlice({
  name: 'cityDetail',
  initialState,
  reducers: {
    setDetail: (state, action) => {
      const cityDetail = action.payload;
      return {
        ...state,
        cityDetail,
      };
    },
  },
});

export default citySlice.reducer;

export const { setDetail } = citySlice.actions;
