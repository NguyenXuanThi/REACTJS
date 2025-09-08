import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    weight: 0, 
    height: 0, 
    income: 0, 
    bmiResult: null, 
    taxResult: null, 
  },
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    calculateBMI: (state) => {
        if (state.height > 0 && state.weight > 0) {
          const heightInMeters = state.height / 100;
          state.bmiResult = state.weight / (heightInMeters * heightInMeters);
        } else {
          state.bmiResult = 0;
        }
      },
    calculateTax: (state) => {
      if (state.income > 0) {
        state.taxResult = state.income * 0.05;
      }
    },
  },
});

export const { updateInput, calculateBMI, calculateTax } = formSlice.actions;
export default formSlice.reducer;
