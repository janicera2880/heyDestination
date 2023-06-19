import React, { useContext } from 'react';
import { LocationsContext } from '../Contexts/LocationsContext';
import LocationsCard from './LocationsCard';
import AddLocationForm from './AddLocationForm';
import { UserAdminContext } from '../Contexts/UserAdminContext';

// Returns a container component that displays a list of locations.
const LocationsContainer = () => {
  const { locations } = useContext(LocationsContext);
  const { userAdmin } = useContext(UserAdminContext);

  const isUserAdmin = userAdmin && userAdmin.admin === 'true';

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

