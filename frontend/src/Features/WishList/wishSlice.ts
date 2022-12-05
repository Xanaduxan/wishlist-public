import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

const initialState: State = {
  wishes: [],
  error: {
    message: '',
  }
};

export const initAsyncWishes = createAsyncThunk('wishes/initAsyncWishes', () => fetch('http://localhost:4000/mywishes')
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
      });
  },

});

export default wishSlice.reducer;