import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch và useSelector
import { increment, decrement } from '/src/components/counterSlice.jsx'; // Import các action
import './App.css';
const App = () => {
  const count = useSelector((state) => state.counter.count); // Lấy giá trị count từ Redux store
  const dispatch = useDispatch(); // Dispatch action đến Redux store

  return (
    <div className='count'>
      <h1>Demo Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
};

export default App;
