import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

const initialState: State = {
  wishes: [],
  error: {
    message: '',
  }
};

export const initAsyncWishes = createAsyncThunk('wishes/initAsyncWishes', () => fetch('http://localhost:4000/mywishes', { credentials: 'include' },)
  .then((result) => result.json())
  .then((data) => data
  ));

export const addAsyncWish = createAsyncThunk('wishes/addAsyncWish', ({ title, image, shop, description, holiday, category }: { title: string, image: string, shop: string, description: string, holiday: string, category: string }) =>
  fetch('http://localhost:4000/mywishes/', {
    credentials: 'include',
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      title,
      image,
      shop,
      description,
      holiday,
      category,
    }),
  })
    .then((result) => result.json())
    .then((data) => data)
);

export const updateAsyncWish = createAsyncThunk('wishes/updateAsyncWish', ({ title, image, shop, description, holiday, category, id }: { id: number, title: string, image: string, shop: string, description: string, holiday: string, category: string }) =>
  fetch(`http://localhost:4000/mywishes/${id}`, {
    credentials: 'include',
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      title,
      image,
      shop,
      description,
      holiday,
      category,
    }),
  })
    .then((result) => result.json())
    .then((data) => data)
);

export const deleteAsyncWish = createAsyncThunk('wishes/deleteAsyncWish', ({ id }: { id: number }) =>
  fetch(`http://localhost:4000/mywishes/${id}`, {
    credentials: 'include',
    method: 'delete',
    headers: { 'Content-type': 'application/json' },
  })
    .then((result) => result.json())
    .then((data) => data)
);

const wishSlice = createSlice({
  name: 'wishes',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(initAsyncWishes.fulfilled, (state, action) => {
        state.wishes = action.payload;
      })
      .addCase(initAsyncWishes.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(addAsyncWish.fulfilled, (state, action) => {
        state.wishes.push(action.payload);
      })
      .addCase(addAsyncWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(updateAsyncWish.fulfilled, (state, action) => {
        state.wishes = state.wishes.map((wish) => {
          if (wish.id === action.payload.id) {
            return {
              ...wish,
              title: action.payload.title,
              image: action.payload.image,
              shop: action.payload.shop,
              description: action.payload.description,
              holiday: action.payload.holiday,
              category: action.payload.category
            };
          } return wish;
        });
      })
      .addCase(updateAsyncWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(deleteAsyncWish.fulfilled, (state, action) => {
        state.wishes = state.wishes.filter((wish) => wish.id !== +action.payload.id);
      })
      .addCase(deleteAsyncWish.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  },

});

export default wishSlice.reducer;
