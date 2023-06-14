import React, { useState } from "react";
//VillasProvider component that provides VillasContext to its children
const VillasContext = React.createContext();

function VillasProvider({ children }) {
     // Initialize state for villas and userVillas
    const [villas, setVillas] = useState(null);
    const [userVillas, setUserVillas] = useState(null);

    // Return component with VillasContext.Provider and values of its state
    return (
        <VillasContext.Provider value={{ villas, setVillas, userVillas, setUserVillas }}>
            {children}
        </VillasContext.Provider>
    );
}
export { VillasContext, VillasProvider };