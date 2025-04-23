import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement } from '/src/components/counterSlice.jsx'; 
import { addTodo, toggleTodo, removeTodo } from '/src/components/todoSlice.jsx';
import './App.css';
export default function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>To-do List (Redux Toolkit)</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
            <button
              style={{ marginLeft: '10px' }}
              onClick={e => {
                e.stopPropagation();
                dispatch(removeTodo(todo.id));
              }}
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
