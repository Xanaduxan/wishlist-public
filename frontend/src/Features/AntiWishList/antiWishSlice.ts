import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

// const addAsyncAntiWishes = createAsyncThunk(
//   'antiwishes/addAsyncAntiWishes',

//   async (userId:number,) => fetch('http://localhost:4000/', {
//     method: 'post',


//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )

const initialState: State = {
  antiwishes: [],
  error: {
    message: '',
  },
};

const antiWishSlice = createSlice({
  name: 'antiwishes',
  initialState,
  reducers: {
    removeAntiWish: (state, action) => {
      state.antiwishes = state.antiwishes.filter((antiwish) => antiwish.id !== action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(addAsyncAntiWishes.fulfilled, (state, action) => {
  //       console.log(action);
  //       state.todos = action.payload;
  //     })
  //     .addCase(addAsyncAntiWishes.rejected, (state, action) => {
  //       state.error.message = action.error.message;
  //     });
  // },
});

export const { removeAntiWish } = antiWishSlice.actions;
export default antiWishSlice.reducer;
