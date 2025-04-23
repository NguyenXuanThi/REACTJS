import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement } from '/src/components/counterSlice.jsx'; 
import { addTodo, toggleTodo, removeTodo } from '/src/components/todoSlice.jsx';
import { toggleTheme } from './components/themeSlice';
import { addItem, removeItem, updateQuantity } from '/src/components/cartSlice';
import { login, logout } from '/src/components/authSlice';
import './App.css';

export default function App() {
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      dispatch(login({ name: username }));
      setUsername('');
    }
  };

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      {isLoggedIn ? (
        <>
          <h2>Chào mừng, {user.name} 👋</h2>
          <button onClick={() => dispatch(logout())}>Đăng xuất</button>
        </>
      ) : (
        <>
          <h2>Đăng nhập</h2>
          <input
            type="text"
            placeholder="Tên người dùng"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </>
      )}
    </div>
  );
}