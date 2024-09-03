// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';
import userProgressReducer from './features/userProgressSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    userProgress: userProgressReducer
  },
});
