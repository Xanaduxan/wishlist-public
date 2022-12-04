import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
  friends: [],
  error: {
    message: ''
  },
};

export const initAsyncFriends = createAsyncThunk('friend/initAsyncFriends', () => fetch('http://localhost:4000/myfriends')
  .then((result) => result.json())
  .then((data) => data));

const friendSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(initAsyncFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
      })
      .addCase(initAsyncFriends.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  },

});

export default friendSlice.reducer;
