import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserAdminProvider from './Context/UserAdminContext';
import VillasProvider from './Context/VillasContext';

ReactDOM.render(
  <React.StrictMode>
    <UserAdminProvider>
    <VillasProvider>
    <App />
    </VillasProvider>
    </UserAdminProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
