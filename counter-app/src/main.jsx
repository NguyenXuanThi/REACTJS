import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App.jsx';
import store from '/src/components/store.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Cung cấp store cho toàn bộ ứng dụng */}
      <App />
    </Provider>
  </StrictMode>
);
