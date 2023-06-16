import React, { useContext } from 'react';
import { LocationsContext } from '../Contexts/LocationsContext';
import LocationsCard from './LocationsCard';
import AddLocationForm from './AddLocationForm';
import { UserAdminContext } from '../Contexts/UserAdminContext';

// Returns a container component that displays a list of locations.
const LocationsContainer = () => {
  const { locations } = useContext(LocationsContext);
  const { user } = useContext(UserAdminContext);

  const isUserAdmin = user && user.role === 'admin';

  return (
    <div>
      <h2>Manage Locations</h2>
      {isUserAdmin && <AddLocationForm />}
      {locations.map((location) => (
        <LocationsCard key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationsContainer;

