import React, { useState } from "react";

const LocationsContext = React.createContext();

function LocationsProvider({ children }){
// State for storing the locations
const [locations, setLocations] = useState([]);

// Function to add a new location
const addLocation = (newLocation) => {
    setLocations([...locations, newLocation]);
  };

  // Function to get location by ID
  const getLocationById = (location_id) => {
    return locations.find((location) => location.id === location_id);
  };

  // Context provider component
    return(
        <LocationsContext.Provider value={{locations, addLocation, setLocations, getLocationById}}>
            {children}
        </LocationsContext.Provider>
    );
}

export { LocationsContext, LocationsProvider};