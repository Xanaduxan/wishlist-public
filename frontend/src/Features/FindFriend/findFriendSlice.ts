import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
  newFriends: [],
  error: {
    message: ''
  }
};

export const findAsyncFriends = createAsyncThunk('friend/findAsyncFriends', () => fetch('http://localhost:4000/myfriends/find', {
  credentials: 'include',
})
  .then((result) => result.json())
  .then((data) => data));

const friendFindSlice = createSlice({
  name: 'friendsFind',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(findAsyncFriends.fulfilled, (state, action) => {
      console.log(action.payload);

      if (!action.payload) {
        state.newFriends = [];
      }
      if (action.payload) {
        state.newFriends = action.payload;
      }
    })
      .addCase(findAsyncFriends.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  }
});

export default friendFindSlice.reducer;
