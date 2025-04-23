import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';
import cartReducer from './cartSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});

export default store;
