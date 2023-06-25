import './App.css';
import { useContext, useEffect } from 'react';
import { ActivitiesContext } from './Contexts/ActivitiesContext';
import { VillasContext } from './Contexts/VillasContext';
import { UserAdminContext } from './Contexts/UserAdminContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import LocationsContainer from './Components/LocationsContainer';
import InquireForm from './Components/InquireForm';
import VillasContainer from './Components/VillasContainer';
import ActivityContainer from './Components/ActivityContainer';
import Header from './Components/Header';
import AdminPortal from './Components/AdminPortal';
import About from './Components/About';
import VillaDetails from './Components/VillaDetails';

function App() {
  const { setUserAdmin } = useContext(UserAdminContext);
  const { villas, setVillas } = useContext(VillasContext);
  const { activities, setActivities } = useContext(ActivitiesContext);

  useEffect(() => {
    fetch("/admin")
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
      
      <Header />
      <Navigation />
      <br></br>
      <br></br>
      <br></br>
      <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/locations" element={<LocationsContainer/>} />
      <Route path="/villas" element={<VillasContainer villas = {villas}/>} />
      <Route path="/villas/:id" element={<VillaDetails villas={villas} />} />
      <Route path="/user_admin" element={<AdminPortal/>} />
      <Route path="/inquiries" element={<InquireForm/>} />
      <Route path="/activities" element={<ActivityContainer activities={activities}/>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
