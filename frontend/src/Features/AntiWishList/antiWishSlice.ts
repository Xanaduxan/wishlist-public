import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

const initialState: State = {
  antiwishes: AntiWish [],
  error: {
    message: '',
  },
};

const antiWishSlice = createSlice({
  name: 'antiwishes',
  initialState,
  reducers: {
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncTodos.fulfilled, (state, action) => {
        console.log(action);
        state.todos = action.payload;
      })
      .addCase(addAsyncTodos.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  },
});

export const { removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;