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
      <h2>Locations</h2>
      {userAdmin && (
        <Link className="viewLink" to={`/locations`}>Manage Locations</Link> 
      )}
      {locations.map((location) => (
        <div key={location.id}>
          <h3>{location.city}</h3>
          <p>{location.country}</p>
          <img src={location.image} alt={location.city} />
          <p>{location.description}</p>
          <br></br>      
        <Link className="viewLink" to={`/locations/${id}`}>View More</Link>      
        </div>
      ))}
    </div>
  );
};

export default LocationsCard;