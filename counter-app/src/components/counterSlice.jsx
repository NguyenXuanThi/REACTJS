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

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
