import React, { useContext } from 'react';
import ActivityCard from './ActivityCard';
import AddActivityForm from './AddActivityForm';
import { ActivitiesContext } from '../contexts/ActivitiesContext';


//A React component that renders a container of activities and an optional form to add new activities.
const ActivityContainer = () => {
  const { activities, userAdmin } = useContext(ActivitiesContext);

  return (
    <div>
      {userAdmin && <AddActivityForm />}

      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityContainer;
