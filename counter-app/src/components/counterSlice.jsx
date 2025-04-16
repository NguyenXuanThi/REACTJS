// src/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1; // Tăng count
    },
    decrement: (state) => {
      state.count -= 1; // Giảm count
    },
  },
});

// Export các action để sử dụng trong component
export const { increment, decrement } = counterSlice.actions;

// Export reducer để cấu hình store
export default counterSlice.reducer;
