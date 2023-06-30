import React from 'react';

//Renders an activity card with the given activity details.
const ActivityCard = ({ activity }) => {
  const { name, highlights, image, details, locations } = activity;
 
  
  const renderedLocations = locations.map((location) => (
    <li key={location.id}>{location.city}, {location.country}</li>// Render a list item with the location's city and country
  ))

  return (
    <div className="activity-card">
      
       <br></br>
       <br></br>
      <img src={image} width="600" height="400" alt={name} />
      <h3>{name}</h3>
      <h4>Available in {locations.length} Locations: {renderedLocations}</h4>
      <p>{highlights}</p>
      <p>{details}</p>
      <br></br>
    </div>
  );
};

export default ActivityCard;