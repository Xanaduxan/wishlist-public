import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/StateReq';

const initialState: State = {
   request: [],
   error: {
      message: ''
  }
};

export const findAsyncFriends = createAsyncThunk('friend/findAsyncFriends', (id: number) => fetch(`http://localhost:4000/myfriends/find/${id}`)
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
      state.request = action.payload
    })
      .addCase(findAsyncFriends.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  }
});

export default friendFindSlice.reducer;
