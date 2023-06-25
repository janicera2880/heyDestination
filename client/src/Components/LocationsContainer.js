import React, { useContext } from "react";
import { LocationsContext } from "../Contexts/LocationsContext";
import LocationsCard from "./LocationsCard";
import AddLocationForm from "./AddLocationForm";
import { UserAdminContext } from "../Contexts/UserAdminContext";



const LocationsContainer = () => {
  const { userAdmin } = useContext(UserAdminContext);
  const { locations } = useContext(LocationsContext);
  return (
    <div className="locations-container">
      {userAdmin && <AddLocationForm />}
      <div className="locations-wrapper">
        {locations.map((location) => (
          <LocationsCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationsContainer;
