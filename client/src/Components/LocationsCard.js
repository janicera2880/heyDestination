import React from 'react';
import { Link } from 'react-router-dom';

// The component renders a div with the class name "locations-card". 
// it maps over the locations array and renders some information for each location//
const LocationsCard = ({ location }) => {
  return (
    <div className="locations-card">
      <div>
        <h4>{location.city}</h4>
        <p>{location.country}</p>
        <img src={location.image} width="400" height="400" alt={location.city} />
        <div className="description">{location.description}</div>
        <br />
        <Link className="viewLink" to={`/locations/${location.id}`}>click here to explore...</Link>
      </div>
    </div>
  );
};

export default LocationsCard;
