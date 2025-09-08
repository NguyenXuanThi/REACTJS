import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addTodo, toggleTodo, removeTodo } from '/src/components/todoSlice.jsx';
import { toggleTheme } from './components/themeSlice';
import { addItem, removeItem, updateQuantity } from '/src/components/cartSlice';
import { login, logout } from '/src/components/authSlice';
import { fetchUsers } from '/src/components/usersSlice';
import { increment as increment2, incrementByAmount, reset } from '/src/components/counterSlice2.jsx';
import { updateInput, calculateBMI, calculateTax } from '/src/components/formSlice.jsx';
import { addEvent, editEvent, deleteEvent } from '/src/components/eventSlice';
import { setProducts } from '/src/components/productSlice';
import './App.css';
export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.product.products);

  const [username, setUsername] = useState('');

  useEffect(() => {
    dispatch(setProducts([
      { id: 1, name: 'Laptop', price: 1000 },
      { id: 2, name: 'Phone', price: 500 },
      { id: 3, name: 'Tablet', price: 700 },
    ]));
  }, [dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h1>🧑 User Auth</h1>
      {!isLoggedIn ? (
        <>
          <input
            type="text"
            placeholder="Nhập tên của bạn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={() =>
              username.trim() &&
              dispatch(login({ name: username, email: `${username}@gmail.com` }))
            }
          >
            Login
          </button>
        </>
      ) : (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <button onClick={() => dispatch(setUserInfo({ email: 'updated@gmail.com' }))}>
            Update Info
          </button>
        </>
      )}

      <hr />

      <h1>📦 Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - 💵 {product.price}
            <button onClick={() => dispatch(addItem(product))}>🛒 Add</button>
          </li>
        ))}
      </ul>
      <hr />
      <h1>🛒 Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - SL: {item.quantity} - 💲{item.price * item.quantity}
            <br />
            <button onClick={() => dispatch(removeItem(item.id))}>❌ Remove</button>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
              ➕
            </button>
            <button
              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
              disabled={item.quantity <= 1}
            >
              ➖
            </button>
          </li>
        ))}
      </ul>

      <hr />
      <h3>
        Tổng SL: {cartItems.reduce((total, item) => total + item.quantity, 0)} | Tổng tiền: 💵
        {cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
      </h3>
    </div>
  );
}