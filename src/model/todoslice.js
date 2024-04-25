import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    fetchTodosSuccess: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, fetchTodosSuccess } = todoSlice.actions;
export const { reducer } = todoSlice;
