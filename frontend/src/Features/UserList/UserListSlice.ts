import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
   users: [],
   error: {
      message: ''
   },

};

export const initAsyncUsers = createAsyncThunk('users/initAsyncUsers', () => fetch('http://localhost:4000/myfriends/find', {
  credentials: 'include',
})
  .then((result) => result.json())
  .then((data) => data));

  

  export const deleteFriends = createAsyncThunk('users/deleteAsyncUser', (id: number) => fetch(`http://localhost:4000/myfriends/${id}`, {
  credentials: 'include',
  method: 'delete',
  headers: { 'Content-type': 'application/json' },
})
  .then((result) => result.json())
  .then((data) => data));

  const UserListSlice = createSlice({

   name: 'users',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
    builder
    .addCase(initAsyncUsers.fulfilled, (state, action) => {
       state.users = action.payload;
    })
    .addCase(initAsyncUsers.rejected, (state, action) => {
      state.error.message = action.error.message;
    });
   }
});

export default UserListSlice.reducer;
