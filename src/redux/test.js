import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: [],
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {

  },
});

export default testSlice.reducer;