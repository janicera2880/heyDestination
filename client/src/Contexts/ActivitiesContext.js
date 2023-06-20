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
// Modify the activities data to include the locations array
const activitiesData = [
  {
    id: 1,
    name: 'Activity 1',
    highlights: '...',
    image: '...',
    details: '...',
    categories: ['...'],
    locations: [{ id: 1, name: 'Location 1' }, { id: 2, name: 'Location 2' }],
  },
];

return (
  <ActivitiesContext.Provider value={{ activities: activitiesData, addActivity, removeActivity }}>
    {children}
  </ActivitiesContext.Provider>
);
};

export {ActivitiesContext, ActivitiesProvider};
