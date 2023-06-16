import React, { useState } from "react";

const LocationsContext = React.createContext();

function LocationsProvider({ children }){
// State for storing the locations
const [locations, setLocations] = useState([]);

// Function to add a new location
const addLocation = (newLocation) => {
    setLocations([...locations, newLocation]);
  };

  // Context provider component
    return(
        <LocationsContext.Provider value={{locations, addLocation}}>
            {children}
        </LocationsContext.Provider>
    );
}

export { LocationsContext, LocationsProvider};