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

export const addAsyncAntiWish = createAsyncThunk('antiwish/addAsyncAntiWish', async ({ title, id }:{ title:string, id:string }) =>
fetch('http://localhost:4000/antiwishlist', {
  method: 'post',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({
    title,
    userId: id,
  }),
})
  .then((result) => result.json())
  .then((data) => data)
);

const antiWishSlice = createSlice({
  name: 'antiwish',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(initAsyncAntiWish.fulfilled, (state, action) => {
        state.antiwishes = action.payload;
      })
      .addCase(initAsyncAntiWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(addAsyncAntiWish.fulfilled, (state, action) => {
        state.antiwishes.push(action.payload);
      })
      .addCase(addAsyncAntiWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
} });
export default antiWishSlice.reducer;
