import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import ProductList from '/src/components/productList';
import ProductManager from '/src/components/productManager';
function App() {
  return (
    <div>
      <ProductManager />
    </div>
  );
}

export default App;
