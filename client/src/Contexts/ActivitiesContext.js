import React, { createContext, useState } from 'react';


const ActivitiesContext = createContext();

const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };
  const removeActivity = (activityId) => {
    setActivities(activities.filter((activity) => activity.id !== activityId));
  };

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, removeActivity, setActivities }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export { ActivitiesContext, ActivitiesProvider };