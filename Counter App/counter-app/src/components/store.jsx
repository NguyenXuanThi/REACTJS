// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// Tạo Redux store và tích hợp reducer từ counterSlice
const store = configureStore({
  reducer: {
    counter: counterReducer, // Truyền vào reducer của counter
  },
});

export default store;
