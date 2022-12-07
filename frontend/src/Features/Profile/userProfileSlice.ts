import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../Api/api';
import State from './types/State';

export const initialState: State = {
  name: '',
  surname: '',
  gender: '',
};

export const userProfileAsyncUpdate = createAsyncThunk(
  'userProfile/update', (userInfo: State) => api.userUpdate(userInfo)
);

const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase();
  // }
});

export default userProfileSlice.reducer;
