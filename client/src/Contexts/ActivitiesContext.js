import React, { createContext, useState } from 'react';

export const ActivitiesContext = createContext();

const ActivitiesContextProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const removeActivity = (activityId) => {
    setActivities(activities.filter((activity) => activity.id !== activityId));
  };

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, removeActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesContextProvider;
