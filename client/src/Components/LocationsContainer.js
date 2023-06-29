import React, { useContext, useState } from "react";
import { LocationsContext } from "../Contexts/LocationsContext";
import LocationsCard from "./LocationsCard";
import AddLocationForm from "./AddLocationForm";
import { UserAdminContext } from "../Contexts/UserAdminContext";

const LocationsContainer = () => {
  const { userAdmin } = useContext(UserAdminContext);
  const { locations } = useContext(LocationsContext);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="locations-container">
      {userAdmin && (
        <div>
          <button className="some-button" onClick={toggleForm}>
            {showForm ? "Hide Add Location Form" : "Show Add Location Form"}
          </button>
          <br />
          <h3>Please Choose a Location To Add a New Villa Rental...</h3>
          <br />
          {showForm && <AddLocationForm />}
        </div>
      )}
        <br />
        <br />
      <div className="locations-wrapper">
        {locations.map((location) => (
          <LocationsCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationsContainer;
