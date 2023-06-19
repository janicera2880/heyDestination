import React, { useContext } from 'react';
import { LocationsContext } from '../Contexts/LocationsContext';
import { UserAdminContext } from '../Contexts/UserAdminContext';
import { Link } from 'react-router-dom';

// Renders a card that displays a list of locations and an option to add a new location if userAdmin is true.
const LocationsCard = () => {
  const { locations } = useContext(LocationsContext);
  const { userAdmin } = useContext(UserAdminContext);

  return (
    <div className="locations-card">
     
      {userAdmin && (
        <Link className="viewLink" to={`/locations-form`}>Manage Locations</Link> 
      )}
      {locations.map((location) => (
        <div key={location.id}>
          <h3>{location.city}</h3>
          <p>{location.country}</p>
          <img src={location.image} width="400" height="400" alt={location.city} />
          <p>{location.description}</p>
          <br></br>      
        <Link className="viewLink" to={`/locations/${location.id}`}>View More</Link>      
        </div>
      ))}
    </div>
  );
};

export default LocationsCard;