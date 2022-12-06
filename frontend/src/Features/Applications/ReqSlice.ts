import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/types';

const initialState: State = {
  requests: [],
  error: {
    message: ''
  }
};

export const postAsyncReq = createAsyncThunk('friend/findAsyncFriends', (id: number) => fetch('http://localhost:4000/myfriends/find', {
  credentials: 'include',
  method: 'post',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({ id }),
})
  .then((result) => result.json())
  .then((data) => data));

export const initAsyncReq = createAsyncThunk('friend/findAsyncReq', () => fetch('http://localhost:4000/myfriends/applications', {
  credentials: 'include',
})
  .then((result) => result.json())
  .then((data) => data));

export const upDateReq = createAsyncThunk('friend/putAsyncReq', (id: number) => fetch(`http://localhost:4000/myfriends/applications/${id}`, {
  credentials: 'include',
  method: 'put',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({ id }),
})
  .then((result) => result.json())
  .then((data) => data));

export const deleteAsyncReq = createAsyncThunk('friend/deleteAsyncReq', (id: number) => fetch(`http://localhost:4000/myfriends/applications${id}`, {
  credentials: 'include',
  method: 'delete'
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
      state.requests = action.payload;
    })
      .addCase(initAsyncReq.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  }
});

export default friendFindSlice.reducer;
