import { createSlice } from '@reduxjs/toolkit';

const counterSlice2 = createSlice({
  name: 'counter2',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, incrementByAmount, reset } = counterSlice2.actions;
export default counterSlice2.reducer;
