import React, { useContext } from 'react';
import ActivityCard from './ActivityCard';
import AddActivityForm from './AddActivityForm'; 
import { ActivitiesContext } from '../Contexts/ActivitiesContext';



//A React component that renders a container of activities and an optional form to add new activities.
const ActivityContainer = () => {
  const { activities, userAdmin } = useContext(ActivitiesContext);

  return (
    <div>
      {userAdmin && <AddActivityForm />}
      <p>Discover and indulge in a wide array of captivating activities that we offer. Whether you seek solace in serene moments or desire exhilarating adventures, our collection has something for everyone. Embark on a journey of exploration and create unforgettable memories with your loved ones.

</p>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityContainer;