import React, { useContext } from 'react';
import { ActivitiesContext } from './ActivitiesContext';


//Renders an activity card with details and a remove button.
const ActivityCard = ({ activity }) => {
  const { name, highlights, image, details, categories } = activity;
  const { removeActivity } = useContext(ActivitiesContext);

  const locations = activity.locations.map((location) => (
    <span key={location.id}>{location.name}</span>
  ));


  //Executes the `removeActivity` function, passing the `id` of the activity.
  const handleRemove = () => {
    removeActivity(activity.id);
  };

  return (
    <div className="activity-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{highlights}</p>
      <p>{details}</p>
      <p>Categories: {categories.join(', ')}</p>
      <p>Locations: {locations}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default ActivityCard;
