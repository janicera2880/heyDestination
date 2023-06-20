import React from 'react';


const ActivityCard = ({ activity }) => {
  const { name, highlights, image, details, locations } = activity;
 
  
  const renderedLocations = locations.length > 0 ? (
    locations.map((location) => (
      <span key={location.id}>{location.name}</span>
    ))
  ) : (
    <span>No locations available</span>
  );

  return (
    <div className="activity-card">
      <img src={image} width="600" height="400" alt={name} />
      <h3>{name}</h3>
      <p>{highlights}</p>
      <p>{details}</p>
      <p>Locations: {renderedLocations}</p>
    </div>
  );
};

export default ActivityCard;

