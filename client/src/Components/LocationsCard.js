import React, { useContext } from 'react';
import { LocationsContext } from '../Contexts/LocationsContext';
import { UserAdminContext } from '../Contexts/UserAdminContext';

const LocationsCard = () => {
  const { locations } = useContext(LocationsContext);
  const { userAdmin } = useContext(UserAdminContext);

  return (
    <div className="locations-card">
      <h2>Locations</h2>
      {userAdmin && (
        <button>Add Location</button>
      )}
      {locations.map((location) => (
        <div key={location.id}>
          <h3>{location.city}</h3>
          <p>{location.country}</p>
          <img src={location.image} alt={location.city} />
          <p>{location.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationsCard;