import './App.css';
import { useContext, useEffect } from 'react';
import { ActivitiesContext } from './Contexts/ActivitiesContext';
import { VillasContext } from './Contexts/VillasContext';
import { UserAdminContext } from './Contexts/UserAdminContext';
import { LocationsContext } from './Contexts/LocationsContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import LocationsContainer from './Components/LocationsContainer';
import InquireForm from './Components/InquireForm';
import VillasContainer from './Components/VillasContainer';
import ActivityContainer from './Components/ActivityContainer';
import LocationVillaPage from './Components/LocationVillaPage';
import AdminPortal from './Components/AdminPortal';
import About from './Components/About';


function App() {
  const { setUserAdmin } = useContext(UserAdminContext);
  const { villas, setVillas } = useContext(VillasContext);
  const { activities, setActivities } = useContext(ActivitiesContext);
  const { locations, setLocations } = useContext(LocationsContext);

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setUserAdmin(data);
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [setUserAdmin]);

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
    fetch("/locations")
      .then((r) => r.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error('Error fetching villas:', error);
      });
  }, [setLocations]);


  useEffect(() => {
    fetch("/activities")
      .then((r) => r.json())
      .then((data) => {
        console.log('Fetched activities:', data);
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
      <br />
      <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/locations" element={<LocationsContainer locations={locations}/>} />
      <Route path="/locations/:id" element={<LocationVillaPage locations={locations} />} />
      <Route path="/villas" element={<VillasContainer villas = {villas}/>} />
      <Route path="/user_admin" element={<AdminPortal/>} />
      <Route path="/villas/:id/inquiries" element={<InquireForm />} />
      <Route path="/activities" element={<ActivityContainer activities={activities}/>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
