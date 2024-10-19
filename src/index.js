import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional for base styling
import App from './App'; // Ensure this import matches the file name
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
