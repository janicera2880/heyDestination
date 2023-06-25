import React, { useContext, useState } from 'react';
import ActivityCard from './ActivityCard';
import AddActivityForm from './AddActivityForm';
import { ActivitiesContext } from '../Contexts/ActivitiesContext';
import { UserAdminContext } from '../Contexts/UserAdminContext';
import FilterCategory from './FilterCategory';

const ActivityContainer = () => {
  const { activities } = useContext(ActivitiesContext);
  const { userAdmin } = useContext(UserAdminContext);
  const [filterSearch, setFilterSearch] = useState('All');

  const selectFilter = (event) => {
    setFilterSearch(event.target.value);
  };

  const categoryOptions = activities.filter((activity) => {
    if (filterSearch === 'All') return true;
    return activity.categories.includes(filterSearch);
  });

  return (
    <div className='activity-container'>
      
      <p>
        Discover and indulge in a wide array of captivating activities that we offer.
      </p>
      <p>
        Whether you seek solace in serene moments or desire exhilarating adventures, our
        collection has something for everyone.
      </p>
      <p>Embark on a journey of exploration and create unforgettable memories with your loved ones.</p>
  <br />
  <br />
      <FilterCategory selectFilter={selectFilter} />
      <br />
      <br />
      <ul className='activity-options'>
        {categoryOptions.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </ul>
      <br />
      <br />
      {userAdmin && <AddActivityForm />}
    </div>
  );
};

export default ActivityContainer;
