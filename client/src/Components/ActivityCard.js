import React from 'react';


const ActivityCard = ({ activity }) => {
  const { name, highlights, image, details, locations } = activity;
 
  
  const renderedLocations = locations.map((location) => (
    <li key={location.id}>{location.city}, {location.country}</li>
  ))

  return (
    <div className="activity-card">
      <p>Discover and indulge in a wide array of captivating activities that we offer. Whether you seek solace in serene moments or desire exhilarating adventures, our collection has something for everyone. Embark on a journey of exploration and create unforgettable memories with your loved ones.

</p>
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