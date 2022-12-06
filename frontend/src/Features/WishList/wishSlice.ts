import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

const initialState: State = {
  wishes: [],
  error: {
    message: '',
  }
};

export const initAsyncWishes = createAsyncThunk('wishes/initAsyncWishes', () => fetch('http://localhost:4000/mywishes', {credentials: 'include'},)
  .then((result) => result.json())
  .then((data) => data
  ));

  export const addAsyncWish = createAsyncThunk('wishes/addAsyncWish', async ({title, image, shop, description, holiday, category}:{ title:string, image:string,shop:string, description:string,holiday:string,category:string }) => 
  fetch('http://localhost:4000/mywishes', {
    credentials: 'include',
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      title,
      image,
      shop,
      description,
      holiday,
      category,
    }),
  })
  .then((result) => result.json())
  .then((data) => data
  ));

const wishSlice = createSlice({
  name: 'wishes',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(initAsyncWishes.fulfilled, (state, action) => {
        state.wishes = action.payload;
      })
      .addCase(initAsyncWishes.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(addAsyncWish.fulfilled, (state, action) => {
        state.wishes.push(action.payload);
      })
      .addCase(addAsyncWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  },

});

export default wishSlice.reducer;