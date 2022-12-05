import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/state';

const initialState:State = {
  antiwishes: [],
  error: {
    message: ''
  }
};

export const initAsyncAntiWish =
createAsyncThunk('antiwish/initAsyncAntiWish',
() => fetch('http://localhost:4000/antiwishlist')
    .then((result) => result.json())
    .then((data) => data));

const antiWishSlice = createSlice({
  name: 'antiwish',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(initAsyncAntiWish.fulfilled, (state, action) => {
        state.antiwishes = action.payload;
        console.log(action);
      })
      .addCase(initAsyncAntiWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  },
});
export default antiWishSlice.reducer;
