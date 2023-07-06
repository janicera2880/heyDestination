import React, { useContext, useState } from 'react';
import ActivityCard from './ActivityCard';
import { ActivitiesContext } from '../Contexts/ActivitiesContext';
import FilterCategory from './FilterCategory';

// Renders the ActivityContainer component, showing a list of activities and a form to add an activity.
const ActivityContainer = () => {
  const { activities } = useContext(ActivitiesContext);// Accessing activities data from the ActivitiesContext
  const [filterSearch, setFilterSearch] = useState('All');// Setting up a state variable for filtering activities

  const selectFilter = (event) => {
    setFilterSearch(event.target.value);// Update the filterSearch state with the selected value
  };

  const categoryOptions = activities.filter((activity) => {
    if (filterSearch === 'All') return true;// If the filter is set to 'All', include all activities
    return activity.categories.includes(filterSearch);// Otherwise, include activities that match the selected category
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
     
    </div>
  );
};

export default ActivityContainer;