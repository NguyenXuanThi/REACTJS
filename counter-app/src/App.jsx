import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addTodo, toggleTodo, removeTodo } from '/src/components/todoSlice.jsx';
import { toggleTheme } from './components/themeSlice';
import { addItem, removeItem, updateQuantity } from '/src/components/cartSlice';
import { login, logout } from '/src/components/authSlice';
import { fetchUsers } from '/src/components/usersSlice';
import { increment as increment2, incrementByAmount, reset } from '/src/components/counterSlice2.jsx';
import './App.css';

export default function App() {
  const count = useSelector(state => state.counter2.value);
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>🔢 Counter: {count}</h2>
      <button onClick={() => dispatch(increment2())}>+1</button>
      <br /><br />
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(step))}>+{step}</button>
      <br /><br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}