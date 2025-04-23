import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addTodo, toggleTodo, removeTodo } from '/src/components/todoSlice.jsx';
import { toggleTheme } from './components/themeSlice';
import { addItem, removeItem, updateQuantity } from '/src/components/cartSlice';
import { login, logout } from '/src/components/authSlice';
import { fetchUsers } from '/src/components/usersSlice';
import { increment as increment2, incrementByAmount, reset } from '/src/components/counterSlice2.jsx';
import { updateInput, calculateBMI, calculateTax } from '/src/components/formSlice.jsx';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const { weight, height, income, bmiResult, taxResult } = useSelector(state => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ field: name, value: parseFloat(value) }));
  };

  const handleCalculateBMI = () => {
    dispatch(calculateBMI());
  };

  const handleCalculateTax = () => {
    dispatch(calculateTax());
  };

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>🧮 Form Tính Toán</h2>

      <div>
        <label>Cân nặng (kg): </label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Chiều cao (m): </label>
        <input
          type="number"
          name="height"
          value={height}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleCalculateBMI}>Tính BMI</button>

      <div>
        <h3>Kết quả BMI: {bmiResult !== null ? bmiResult.toFixed(2) : 'Chưa tính toán'}</h3>
      </div>

      <div>
        <label>Thu nhập: </label>
        <input
          type="number"
          name="income"
          value={income}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleCalculateTax}>Tính Thuế</button>

      <div>
        <h3>Kết quả thuế: {taxResult !== null ? taxResult : 'Chưa tính toán'}</h3>
      </div>
    </div>
  );
}