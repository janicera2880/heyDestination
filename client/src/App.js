import './App.css';
import { useContext, useEffect } from 'react';
import { UserAdminContext } from './Contexts/UserAdminContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignupToggle from './Components/LoginSignupToggle';
import Navigation from './Components/Navigation';


function App() {
  const { setUserAdmin } = useContext(UserAdminContext);

  useEffect (() => {
    fetch("/me").then( (r) => {
      if (r.ok) {
        r.json().then((userAdmin) => {
          setUserAdmin(userAdmin);
        });
      }
    })
    }, [setUserAdmin]);
  
  return (
    <BrowserRouter>
    
    <div className="App">
    
      <Navigation />
      <Routes>
      <Route path="/" element={<LoginSignupToggle />} />
      

      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
