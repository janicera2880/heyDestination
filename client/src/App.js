import './App.css';
import { useContext, useEffect, useState } from 'react';
import { ActivitiesContext } from './Contexts/ActivitiesContext';
import { VillasContext } from './Contexts/VillasContext';
import { UserAdminContext } from './Contexts/UserAdminContext';
import { LocationsContext } from './Contexts/LocationsContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import LocationsContainer from './Components/LocationsContainer';
import VillasContainer from './Components/VillasContainer';
import ActivityContainer from './Components/ActivityContainer';
import LocationVillaPage from './Components/LocationVillaPage';
import AdminPortal from './Components/AdminPortal';
import About from './Components/About';
import IncomingInquiry from './Components/IncomingInquiry';
import { InquiriesContext } from './Contexts/InquiriesContext';
import InquireForm from './Components/InquireForm';
import ManageVillas from './Components/ManageVillas';
import VillaSearchPage from './Components/VillaSearchPage';
import VillaDetails from './Components/VillaDetails';

function App() {
  const { userAdmin, setUserAdmin } = useContext(UserAdminContext);
  const { villa, villas, setVillas, userAdminVillas, setUserAdminVillas } = useContext(VillasContext);
  const { activities, setActivities } = useContext(ActivitiesContext);
  const { locations, setLocations } = useContext(LocationsContext);
  const { setUserAdminInquiries } = useContext(InquiriesContext);
  const { setInquiries, setVillaInquiries } = useContext(InquiriesContext);
  const [showLocation, setShowLocation] = useState(true);
  

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

  useEffect( ()=>{
    if (userAdmin != null){
      fetch(`/user_admins/${userAdmin.id}/villas/inquiries`).then(r=>r.json()).then(data=>{
        setUserAdminInquiries(data);
      })
    }
  }, [userAdmin, setUserAdminInquiries]);

  useEffect( ()=>{
    if (userAdmin != null){
      fetch(`/user_admins/${userAdmin.id}/villas`).then(r=>r.json()).then(data=>{
        setUserAdminVillas(data);
      })
    }
  }, [userAdmin, setUserAdminVillas]);

 
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

  function handleAddVilla(newVilla) {
    setVillas((prevVillas) => {
      if (prevVillas && Array.isArray(prevVillas)) {
        return [newVilla, ...prevVillas];
      } else {
        return [newVilla];
      }
    });
  
  setUserAdminVillas((prevUserAdminVillas) => {
    if (prevUserAdminVillas && Array.isArray(prevUserAdminVillas)) {
      return [newVilla, ...prevUserAdminVillas];
    } else {
      return [newVilla];
    }
  });
  setLocations((prevLocations) => {
    if (prevLocations && Array.isArray(prevLocations)) {
      return prevLocations.map((location) => {
        if (location.id === newVilla.location.id) {
          // Add the new villa to a location listings array
          const updatedLocation = { ...location };
          updatedLocation.villas = [newVilla, ...location.villas];
          return updatedLocation;
        } else {
          return location;
        }
      });
    } else {
      return prevLocations;
    }
  });

  // Fetch location villa listings again
  
  fetch(`/locations/${newVilla.locationId}/villas`)
    .then((response) => response.json())
    .then((data) => {
      // Update the location villa listings state
      setVillas(data);
    });
  } 

  function handleDeleteVilla(deletedVilla) {
    const newVillaArray = userAdminVillas.filter((villa) => {
      return villa.id !== deletedVilla.id;
    });
  
    const updatedLocationArray = locations.map((location) => {
      if (location.id === deletedVilla.location_id) {
        return {
          ...location,
          villas: location.villas.filter((villa) => villa.id !== deletedVilla.id)
        };
      } else {
        return location;
      }
    });
  
    setUserAdminVillas(newVillaArray);
    setLocations(updatedLocationArray);
  }

  function handleUpdateVilla(updatedVilla) {
    console.log(updatedVilla);
  
    const updatedLocationArray = locations.map((location) => {
      if (location.id === updatedVilla.location_id) {
        return {
          ...location,
          villas: location.villas.map((villa) => {
            if (villa.id === updatedVilla.id) {
              return updatedVilla;
            } else {
              return villa;
            }
          }),
        };
      } else {
        return location;
      }
    });
  
    const updatedVillaArray = userAdmin.map((villa) => {
      if (villa.id === updatedVilla.id) {
        return updatedVilla;
      } else {
        return villa;
      }
    });
  
    setLocations(updatedLocationArray);
    setUserAdminVillas(updatedVillaArray);
  }
  function handleAddInquiry(newInquiry) {
    setInquiries((prevInquiries) => {
      if (prevInquiries && Array.isArray(prevInquiries)) {
        return [newInquiry, ...prevInquiries];
      } else {
        return [newInquiry];
      }
    });
  
    setVillaInquiries((prevVillaInquiries) => {
      if (prevVillaInquiries && Array.isArray(prevVillaInquiries)) {
        return [newInquiry, ...prevVillaInquiries];
      } else {
        return [newInquiry];
      }
    });
  
    setVillas((prevVillas) => {
      if (prevVillas && Array.isArray(prevVillas)) {
        return prevVillas.map((villa) => {
          if (villa.id === newInquiry.villa.id) {
            // Add the new inquiry to the villa's inquiries array
            const updatedVilla = { ...villa };
            updatedVilla.inquiries = [newInquiry, ...villa.inquiries];
            return updatedVilla;
          } else {
            return villa;
          }
        });
      } else {
        return prevVillas;
      }
    });
  
    // Set showLocation to true
    setShowLocation(true);
  
    // Fetch villa inquiries again
    fetch(`/villas/${newInquiry.villaId}/inquiries`)
      .then((response) => response.json())
      .then((data) => {
        // Update the villa inquiries state
        setVillaInquiries(data);
      });
  }
  
  
  
  return (
    <BrowserRouter>
    
    <div className="App">
      
      <Navigation />
      <br />
      <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/locations" element={<LocationsContainer locations={locations}/>} />
      <Route path="/locations/:id" element={<LocationVillaPage locations={locations}  handleDeleteVilla={handleDeleteVilla} handleUpdateVilla={handleUpdateVilla} villas={villas} onAddVilla={handleAddVilla} />} />
      <Route path="/villas" element={<VillasContainer villas = {villas}/>} />
      <Route path="/villas/search" element={<VillaSearchPage villa={villa} villas={villas}/>} />
      <Route path="/user_admin" element={<AdminPortal/>} />
      <Route path="/villas/:villa_id/inquiries" element={<InquireForm onAddInquiry={handleAddInquiry} showLocation={showLocation}/>} />
      <Route path="/villas/:id" element={<VillaDetails />} />
      <Route path="/activities" element={<ActivityContainer activities={activities}/>} />
      <Route path="/user_admin/:id/villas/inquieries" element={<IncomingInquiry />} />
      <Route path="/user_admin/villas" element={<ManageVillas villas={villas} userAdminVillas={userAdminVillas} setUserAdminVillas={setUserAdminVillas} handleDeleteVilla={handleDeleteVilla} handleUpdateVilla={handleUpdateVilla} locations={locations} setLocations={setLocations}/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
