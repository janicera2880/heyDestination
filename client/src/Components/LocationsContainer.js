import React, { useContext } from 'react';
import { LocationsContext } from '../Contexts/LocationsContext';
import LocationsCard from './LocationsCard';

//Returns a container component that displays a list of locations.
const LocationsContainer = () => {
  const { locations } = useContext(LocationsContext);

  return (
    <div>
      <h2>Locations</h2>
      {locations.map((location) => (
        <LocationsCard key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationsContainer;
