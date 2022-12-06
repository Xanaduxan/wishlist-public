import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/AddReqtypes';

const initialState: State = {
   requestsAdd: [],
   error: {
      message: ''
   }
};

export const initAsyncReqAdd = createAsyncThunk('friend/findAsyncReqAdd', () => fetch('http://localhost:4000/myfriends/addreq', {
  credentials: 'include',
})
  .then((result) => result.json())
  .then((data) => data));

  const AddReqSlice = createSlice({
  name: 'friendsFind',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(initAsyncReqAdd.fulfilled, (state, action) => {
      state.requestsAdd = action.payload;
    })
      .addCase(initAsyncReqAdd.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  }
});

export default AddReqSlice.reducer;