import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
   friends: [],
   error: {
      message: ''
   },

};

export const initAsyncMyFriends = createAsyncThunk('friend/initAsyncMyFriends', () => fetch('http://localhost:4000/myfriends', {
  credentials: 'include',
})
  .then((result) => result.json())
  .then((data) => data));

  export const deleteFriend = createAsyncThunk('friend/deleteFriend', (id: number) => fetch(`http://localhost:4000/myfriends/${id}`, {
  credentials: 'include',
  method: 'delete',
  headers: { 'Content-type': 'application/json' },
})
  .then((result) => result.json())
  .then((data) => data));

  const friendSlice = createSlice({

   name: 'friends',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
    builder
    .addCase(initAsyncMyFriends.fulfilled, (state, action) => {
       state.friends = action.payload;
    })
    .addCase(initAsyncMyFriends.rejected, (state, action) => {
      state.error.message = action.error.message;
    })
    .addCase(deleteFriend.fulfilled, (state, action) => {
      state.friends = state.friends.filter((friend) => friend.id === +action.payload);
    });
   }
});

export default friendSlice.reducer;
