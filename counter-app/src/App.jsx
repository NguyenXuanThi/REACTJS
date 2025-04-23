import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement } from '/src/components/counterSlice.jsx'; 
import { addTodo, toggleTodo, removeTodo } from '/src/components/todoSlice.jsx';
import { toggleTheme } from './components/themeSlice';
import './App.css';

export default function App() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển Theme
      </button>
    </div>
  );
}
