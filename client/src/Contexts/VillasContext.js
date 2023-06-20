import React, { useState } from "react";
//VillasProvider component that provides VillasContext to its children
const VillasContext = React.createContext();

function VillasProvider({ children }) {
     // Initialize state for villas and userVillas
    const [villas, setVillas] = useState(null);
    const [userVillas, setUserVillas] = useState(null);

    const addVilla = (villa) => {
        setVillas([...villas, villa]);
      };
    
    
      const removeVilla = (villaId) => {
        setVillas(villas.filter((villa) => villa.id !== villaId));
      };
    
      const updateVilla = (updatedVilla) => {
        setVillas((prevVillas) =>
          prevVillas.map((villa) =>
            villa.id === updatedVilla.id ? updatedVilla : villa
          )
        );
      };
      const [villa, setVilla] = useState(null);

      const value = {
        villas,
        setVillas,
        userVillas,
        setUserVillas,
        addVilla,
        removeVilla,
        updateVilla,
        villa, // Include the villa state in the context value
        setVilla, // Include the setter function for the villa state
      };
    // Return component with VillasContext.Provider and values of its state
    return (
      <VillasContext.Provider value={value}>{children}</VillasContext.Provider>
    );
}
export { VillasContext, VillasProvider };