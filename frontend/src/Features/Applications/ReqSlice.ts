import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from '../FriendCard/types/StateReq';

const initialState: State = {
  requests: [],
  error: {
    message: ''
  }
};

export const postAsyncReq = createAsyncThunk('friend/findAsyncFriends', (id: number) => fetch(`http://localhost:4000/myfriends/find/${id}`, {
  method: 'post',
  headers: { 'Content-type': 'application/json' },
  credentials: 'include',
})
  .then((result) => result.json())
  .then((data) => data));

export const initAsyncReq = createAsyncThunk('friend/findAsyncReq', () => fetch('http://localhost:4000/myfriends/applications', {
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
    builder.addCase(initAsyncReq.fulfilled, (state, action) => {
      console.log('111111111111111111111111');
      console.log(state, action);
      
      state.requests = action.payload;
    })
      .addCase(initAsyncReq.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  }
});

export default friendFindSlice.reducer;
