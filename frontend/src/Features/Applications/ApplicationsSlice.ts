import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
   requests: [],
   error: {
      message: ''
   },

};

export const initAsyncRequests = createAsyncThunk('requests/initAsyncRequests', () => fetch('http://localhost:4000/myfriends/applications', {
  credentials: 'include',
})
  .then((result) => result.json())
  .then((data) => data));

 export const sendRequest = createAsyncThunk('requests/sendAsyncRequest', (id: number) => fetch('http://localhost:4000/myfriends/applications', {
  credentials: 'include',
  method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ id }),
})
  .then((result) => result.json())
  .then((data) => data));

  export const agreeRequest = createAsyncThunk('requests/agreeRequest', (id: number) => fetch(`http://localhost:4000/myfriends/applications/${id}`, {
  credentials: 'include',
  method: 'put',
  headers: { 'Content-type': 'application/json' },
})
  .then((result) => result.json())
  .then((data) => {
    store.dispatch({ type: pushUser, payload: data.user });
    return data;
  }));

   export const deleteRequest = createAsyncThunk('requests/deleteRequest', (id: number) => fetch(`http://localhost:4000/myfriends/applications/${id}`, {
  credentials: 'include',
  method: 'delete',
  headers: { 'Content-type': 'application/json' },
})
  .then((result) => result.json())
  .then((data) => data));

  const RequestsSlice = createSlice({
   name: 'requests',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
    builder
    .addCase(initAsyncRequests.fulfilled, (state, action) => {
      state.requests = action.payload;
    })
    .addCase(initAsyncRequests.rejected, (state, action) => {
      state.error.message = action.error.message;
    })
    .addCase(sendRequest.fulfilled, (state, action) => {
      state.requests.push(action.payload);
    })
      .addCase(sendRequest.rejected, (state, action) => {
      state.error.message = action.error.message;
    })
     .addCase(agreeRequest.fulfilled, (state, action) => {       
      state.requests = state.requests.map((req) => {
          if (req.id === action.payload.id) {
           return { ...req, status: action.payload.status };
        } return req;
      });
    })
     .addCase(deleteRequest.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log(state.requests);

      state.requests = state.requests.filter((req) => {
        if (req.userId !== +action.payload.id && req.friendId !== +action.payload.idUser) {
          return req;
        }
      });
    });
   }
});

export default RequestsSlice.reducer;
