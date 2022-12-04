import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
   friends: [],
  error: {
   message: ''
  }
};

export const findAsyncFriends = createAsyncThunk('friend/findAsyncFriends', async (login:string) => fetch('http://localhost:4000/myfriends/find', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      login,
    }),
 })
   .then((result) => result.json())
   .then((data) => data)
);

const friendFindSlice = createSlice({
   name: 'friendsFind',
   initialState,
   reducers: {

   },
  extraReducers: (builder) => {
   builder.addCase(findAsyncFriends.fulfilled, (state, action) => {
      // state.friend = state.friend.push(action.payload);
      state.friends = []
      state.friends.push(action.payload);
   })
   .addCase(findAsyncFriends.rejected, (state, action) => {
      state.error.message = action.error.message;
    });
  }
});

export default friendFindSlice.reducer;
