import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement } from '/src/components/counterSlice.jsx'; 
import { addTodo, toggleTodo, removeTodo } from '/src/components/todoSlice.jsx';
import { toggleTheme } from './components/themeSlice';
import { addItem, removeItem, updateQuantity } from '/src/components/cartSlice';
import { login, logout } from '/src/components/authSlice';
import { fetchUsers } from '/src/components/usersSlice';
import './App.css';


export default function App() {
  const { users, status, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(fetchUsers());
  }, [dispatch, status]);

  return (
    <div style={{ padding: 20 }}>
      <h2>📥 Danh sách người dùng</h2>
      {status === 'loading' && <p>Đang tải...</p>}
      {status === 'failed' && <p>Lỗi: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}