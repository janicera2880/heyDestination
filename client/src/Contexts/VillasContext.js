import React, { useState } from "react";
//VillasProvider component that provides VillasContext to its children
const VillasContext = React.createContext();

//initializes state for villas and userAdminVillas, and defines functions to add, remove, and update villas
function VillasProvider({ children }) {
     // Initialize state for villas and userVillas
     const [villas, setVillas] = useState(null);
    const [userAdminVillas, setUserAdminVillas] = useState(null);

    // When called, this function appends the villa parameter to an array called villas using the spread operator.
    const addVilla = (villa) => {
        setVillas([...villas, villa]);
      };
    
    //filters an array of villas and removes the one whose id matches the villaId passed in
    // the filtered villas array is then set as the new state.
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
     
      const value = {
        villas,
        setVillas,
        userAdminVillas,
        setUserAdminVillas,
        addVilla,
        removeVilla,
        updateVilla,
      };
    // Return component with VillasContext.Provider and values of its state
    return (
      <VillasContext.Provider value={value}>{children}</VillasContext.Provider>
    );
}
export { VillasContext, VillasProvider };