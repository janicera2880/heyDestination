import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserAdminProvider } from './Contexts/UserAdminContext';
import { VillasProvider } from './Contexts/VillasContext';
import { LocationsProvider } from './Contexts/LocationsContext';
import { InquiriesProvider } from './Contexts/InquiriesContext';
import { ActivitiesProvider } from './Contexts/ActivitiesContext';

ReactDOM.render(
  <React.StrictMode>
    <UserAdminProvider>
      <LocationsProvider>
       <VillasProvider>
       <InquiriesProvider>
       <ActivitiesProvider>
    <App />
       </ActivitiesProvider>
       </InquiriesProvider>
       </VillasProvider>
      </LocationsProvider>
    </UserAdminProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
