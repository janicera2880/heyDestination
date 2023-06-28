import React, { createContext, useState } from 'react';


const ActivitiesContext = createContext();

const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };
  

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, setActivities }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export { ActivitiesContext, ActivitiesProvider };