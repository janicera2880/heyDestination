import './App.css';
import { useContext, useEffect } from 'react';
import { ActivitiesContext } from './Contexts/ActivitiesContext';
import { VillasContext } from './Contexts/VillasContext';
import { LocationsContext } from './Contexts/LocationsContext';
import { UserAdminContext } from './Contexts/UserAdminContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignupToggle from './Components/LoginSignupToggle';
import Navigation from './Components/Navigation';
import LocationsContainer from './Components/LocationsContainer';
import InquireForm from './Components/InquireForm';
import VillasContainer from './Components/VillasContainer';
import ActivityContainer from './Components/ActivityContainer';
//import Header from './Components/Header';

function App() {
  const { setUserAdmin } = useContext(UserAdminContext);
  const { setLocations } = useContext(LocationsContext);
  const { setVillas } = useContext(VillasContext);
  const { setActivities } = useContext(ActivitiesContext);

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((userAdmin) => {
            setUserAdmin(userAdmin);
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [setUserAdmin]);

  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
      });
  }, [setLocations]);

  useEffect(() => {
    fetch("/villas")
      .then((r) => r.json())
      .then((data) => {
        setVillas(data);
      })
      .catch((error) => {
        console.error('Error fetching villas:', error);
      });
  }, [setVillas]);

  useEffect(() => {
    fetch("/activities")
      .then((r) => r.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
      });
  }, [setActivities]);
  
  return (
    <BrowserRouter>
    
    <div className="App">
    
      <Navigation />
      <Routes>
      <Route path="/" element={<LoginSignupToggle />} />
      <Route path="/locations" element={<LocationsContainer/>} />
      <Route path="/villas" element={<VillasContainer/>} />
      <Route path="/inquiries" element={<InquireForm/>} />
      <Route path="/activities" element={<ActivityContainer/>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
