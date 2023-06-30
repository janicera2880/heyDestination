import React, { useContext, useState } from "react";
import { LocationsContext } from "../Contexts/LocationsContext";
import LocationsCard from "./LocationsCard";
import AddLocationForm from "./AddLocationForm";
import { UserAdminContext } from "../Contexts/UserAdminContext";

// Uses the useContext hook to access the LocationsContext and UserAdminContext context values
const LocationsContainer = () => {
  const { userAdmin } = useContext(UserAdminContext);
  const { locations } = useContext(LocationsContext);
  const [showForm, setShowForm] = useState(false);// Setting up a state variable to toggle the display of the AddLocationForm

  const toggleForm = () => {
    setShowForm(!showForm);// Toggle the showForm state between true and false
  };

  return (
    <div className="locations-container">
      {/* If userAdmin is truthy, it renders a button that toggles the value of showForm*/}
      {userAdmin && (
        <div>
          {/* Render a button to toggle the display of the AddLocationForm */}
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
        {/* maps over an array of locations to render multiple LocationsCard components, passing each location as a prop. */}
        {locations.map((location) => (
          <LocationsCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationsContainer;
