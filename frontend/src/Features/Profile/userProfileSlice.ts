import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../Api/api';
import State from './types/State';

export const initialState: State = {
  name: '',
  surname: '',
  gender: '',
  image: '',
  wishes: [],
  antiWishes: []
};

export const userProfileAsyncUpdate = createAsyncThunk(
  'userProfile/update', (userInfo: State) => api.userUpdate(userInfo)
);

export const userProfileInitAsync = createAsyncThunk(
  'userProfile/init', (id: string) => api.userProfileInit(id)
);

export const userProfileWishesAsyncInit = createAsyncThunk(
  'userProfile/wishesInit', (id: string) => api.userProfileWishesInit(id)
);

export const userProfileAntiWishesAsyncInit = createAsyncThunk(
  'userProfile/antiWishesInit', (id: string) => api.userProfileAntiWishesInit(id)
);

export const userProfileAvatarUpdataAsync = createAsyncThunk(
  'userProfile/userAvatarUpdate', ({ files, id }: { files: FormData, id: string }) => api.userProfileAvatarUpdate({ files, id })
);

const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userProfileInitAsync.fulfilled, (state, action) => {
        state.name = action.payload.user!.name;
        state.surname = action.payload.user!.surname;
        state.image = `http://localhost:4000/upload/${action.payload.user!.image}`;
        state.gender = action.payload.user!.gender;
      })
      .addCase(userProfileAsyncUpdate.fulfilled, (state, action) => {
        state.name = action.payload.user!.name;
        state.surname = action.payload.user!.surname;
        state.image = action.payload.user!.image;
        state.gender = action.payload.user!.gender;
      })
      .addCase(userProfileWishesAsyncInit.fulfilled, (state, action) => {
        state.wishes = action.payload.wishes;
      })
      .addCase(userProfileAntiWishesAsyncInit.fulfilled, (state, action) => {
        state.antiWishes = action.payload.antiWishes;
      })
      .addCase(userProfileAvatarUpdataAsync.fulfilled, (state, action) => {
        state.image = `http://localhost:4000${action.payload[0]}`;
        console.log((state.image));
      });
  }
});
// ds
export default userProfileSlice.reducer;
