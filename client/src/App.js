import './App.css';
import { useContext, useEffect } from 'react';
import { LocationsContext } from './Contexts/LocationsContext';
import { UserAdminContext } from './Contexts/UserAdminContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignupToggle from './Components/LoginSignupToggle';
import Navigation from './Components/Navigation';
import LocationsContainer from './Components/LocationsContainer';
import InquireForm from './Components/InquireForm';
//import Header from './Components/Header';

function App() {
  const { setUserAdmin } = useContext(UserAdminContext);
  const { setLocations } = useContext(LocationsContext);

  useEffect (() => {
    fetch("/me").then( (r) => {
      if (r.ok) {
        r.json().then((userAdmin) => {
          setUserAdmin(userAdmin);
        });
      }
    })
    }, [setUserAdmin]);

    useEffect( ()=> {
      fetch("/locations").then( r => r.json() ).then( (data)=>{
          setLocations(data);
      })
    }, [setLocations]);
  
  return (
    <BrowserRouter>
    
    <div className="App">
      
      <Navigation />
      <Routes>
      <Route path="/" element={<LoginSignupToggle />} />
      <Route path="/locations" element={<LocationsContainer/>} />
      <Route path="/inquiries" element={<InquireForm/>} />

      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
