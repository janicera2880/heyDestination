import React, { useState } from "react";
//VillasProvider component that provides VillasContext to its children
const VillasContext = React.createContext();

//initializes state for villas and userAdminVillas, and defines functions to add, remove, and update villas
function VillasProvider({ children }) {
     // Initialize state for villas and userVillas
    const [villas, setVillas] = useState(null);
    const [userAdminVillas, setUserAdminVillas] = useState(null);
    const [villa, setVilla] = useState(null);
    // When called, this function appends the villa parameter to an array called villas using the spread operator.
    const addVilla = (villa) => {
        setVillas([...villas, villa]);
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
        villa,
        setVillas,
        setVilla,
        userAdminVillas,
        setUserAdminVillas,
        addVilla,
        updateVilla,
      };
    // Return component with VillasContext.Provider and values of its state
    return (
      <VillasContext.Provider value={value}>{children}</VillasContext.Provider>
    );
}
export { VillasContext, VillasProvider };