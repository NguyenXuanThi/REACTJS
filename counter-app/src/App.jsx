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
import './App.css';

export default function App() {
  const events = useSelector(state => state.event.events);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ id: '', name: '', date: '' });
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrEdit = () => {
    if (isEdit) {
      dispatch(editEvent({ id: form.id, newData: { name: form.name, date: form.date } }));
    } else {
      dispatch(addEvent({ ...form, id: Date.now().toString() }));
    }
    setForm({ id: '', name: '', date: '' });
    setIsEdit(false);
  };

  const handleEditClick = (event) => {
    setForm(event);
    setIsEdit(true);
  };

  return (
    <div className="App">
      <h2>📅 Event Management</h2>

      <input name="name" placeholder="Event name" value={form.name} onChange={handleChange} />
      <input name="date" placeholder="Event date" value={form.date} onChange={handleChange} />
      <button onClick={handleAddOrEdit}>{isEdit ? 'Update' : 'Add'} Event</button>

      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - {event.date}
            <button onClick={() => handleEditClick(event)}>Edit</button>
            <button onClick={() => dispatch(deleteEvent(event.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}