
import { configureStore } from '@reduxjs/toolkit';
import { reducer as todoReducer } from './todoslice';

const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
  });

export default store;