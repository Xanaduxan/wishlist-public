import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AntiWishId, State } from './types/state';

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

export const addAsyncAntiWish = createAsyncThunk('antiwish/addAsyncAntiWish', async ({ title, id }:{ title:string, id:number }) =>
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

export const delAsyncAntiWish = createAsyncThunk('antiwish/delAsyncAntiWish',
async (id:AntiWishId) =>

fetch(`http://localhost:4000/antiwishlist/${id}`, {
  method: 'delete',
  headers: { 'Content-type': 'application/json' },
  credentials: 'include',
  })
  .then((result) => result.json())
  .then((data) => data)
);

export const editAsyncAntiWish = createAsyncThunk('antiwish/editAsyncAntiWish',
async ({ title, id }:{ title:string, id:number }) =>
fetch(`http://localhost:4000/antiwishlist/${id}`, {
  method: 'put',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({
    title,
    userId: id,
  }),
  credentials: 'include',
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
      })
      .addCase(delAsyncAntiWish.fulfilled, (state, action) => {
        const index = state.antiwishes.findIndex((anti) => anti.id === action.payload);
        state.antiwishes.splice(index, 1);
      })
      .addCase(delAsyncAntiWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(editAsyncAntiWish.fulfilled, (state, action) => {
        console.log(action.payload);
        state.antiwishes = state.antiwishes.map((anti) => {
          if (anti.id === action.payload.id) {
          return { ...anti, title: action.payload.title };
} return anti;
});
      })
      .addCase(editAsyncAntiWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
} });
export default antiWishSlice.reducer;