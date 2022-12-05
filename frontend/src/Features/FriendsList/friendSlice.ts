import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {

   myfriendsAll: [],
   myFriend: [],
   error: {
      message: ''
   },

};

export const initAsyncFriends = createAsyncThunk('friend/initAsyncFriends', () => fetch('http://localhost:4000/myfriends')
  .then((result) => result.json())
  .then((data) => data));

// export const findAsyncFriends = createAsyncThunk('friend/findAsyncFriends', async (login:string) => fetch('http://localhost:4000/myfriends', {
//     method: 'post',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify({
//       login,
//     }),
//  })
//    .then((result) => result.json())
//    .then((data) => data)
// );

const friendSlice = createSlice({

   name: 'friends',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
    builder
    .addCase(initAsyncFriends.fulfilled, (state, action) => {
      // console.log(action.payload);

      state.myfriendsAll = action.payload;
    })
    .addCase(initAsyncFriends.rejected, (state, action) => {
      state.error.message = action.error.message;
    });
  //   .addCase(findAsyncFriends.fulfilled, (state, action) => {
  //     state.myfriendsAll = [];
  //     state.myFriend = [];
  //     state.myFriend = action.payload;
  //  })
  //   .addCase(findAsyncFriends.rejected, (state, action) => {
  //     state.error.message = action.error.message;
  //   });
  },

});

export default friendSlice.reducer;
