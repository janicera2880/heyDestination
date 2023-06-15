import './App.css';
import { useContext, useEffect } from 'react';
import { UserAdminContext } from './Contexts/UserAdminContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserLoginLogout from './Components/UserLoginLogout';
import Header from './Components/Header';
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
      <Header />
      <Navigation />
      <Routes>
      <Route path="/" element={<UserLoginLogout />} />
      

      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
