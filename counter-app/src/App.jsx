import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement } from '/src/components/counterSlice.jsx'; 
import { addTodo, toggleTodo, removeTodo } from '/src/components/todoSlice.jsx';
import { toggleTheme } from './components/themeSlice';
import { addItem, removeItem, updateQuantity } from '/src/components/cartSlice';
import './App.css';

const sampleProducts = [
  { id: 1, name: 'iPhone 15', price: 25000000 },
  { id: 2, name: 'MacBook Pro', price: 40000000 },
];

export default function App() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Sản phẩm</h2>
      {sampleProducts.map(p => (
        <div key={p.id}>
          <span>{p.name} - {p.price.toLocaleString()}đ</span>
          <button onClick={() => dispatch(addItem(p))}>Thêm vào giỏ</button>
        </div>
      ))}

      <hr />

      <h2>🧺 Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <span>{item.name} - {item.price.toLocaleString()}đ x </span>
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
              style={{ width: 50 }}
            />
            <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
          </div>
        ))
      )}

      <hr />
      <h3>Tổng số lượng: {totalQuantity}</h3>
      <h3>Tổng tiền: {totalPrice.toLocaleString()}đ</h3>
    </div>
  );
}
