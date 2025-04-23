import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todos: todoReducer,
    theme: themeReducer,
  },
});

export default store;
