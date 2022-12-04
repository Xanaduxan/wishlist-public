import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import State from './types/State';
import UserRegistration from './types/userRegistration';
import * as api from '../../Api/api';
import { UserLogin } from './types/User';

const initialState: State = {
  email: '',
  id: '',
  emailError: '',
  loginError: ''
};

export const userRegisrationAsync = createAsyncThunk(
  'user/registration', (user: UserRegistration) => api.registration(user)
);

export const userLoginAsync = createAsyncThunk(
  'user/login', (user: UserLogin) => api.login(user)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearLoginError: (state) => { state.loginError = ''; },
    clearEmailError: (state) => { state.emailError = ''; }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegisrationAsync.fulfilled, (state, action) => {
        if (action.payload.user) {
          state.email = action.payload.user.email;
          state.emailError = '';
          state.loginError = '';
          return;
        }
        if (action.payload.status === 'error login') {
          state.loginError = action.payload.message;
          state.emailError = '';
          return;
        }
        if (action.payload.status === 'error') {
          state.emailError = action.payload.message;
          state.loginError = '';
        }
      })
      .addCase(userRegisrationAsync.rejected, (state, action) => {
        console.log(action.error.message);
      });
    // .addCase(userLoginAsync.fulfilled, (state, action) => {
    //   if (action.payload.status === '')
    // })
  },
});

export default userSlice.reducer;
export const { clearEmailError, clearLoginError } = userSlice.actions;
