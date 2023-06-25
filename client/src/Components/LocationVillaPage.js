import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddVillaForm from "./AddVillaForm";
import {LocationsContext} from "../Contexts/LocationsContext";
import { UserAdminContext } from "../Contexts/UserAdminContext";

const LocationVillaPage = () => {
  const { locations } = useContext(LocationsContext);
  const { isAdmin } = useContext(UserAdminContext);

  const params = useParams();
  const locationId = parseInt(params.id);
  const showLocation = locations.find((location) => location.id === locationId);

  const renderVillas =
  showLocation &&
  showLocation.villas.map((villa) => (
    <div className="villa-card" key={villa.id}>
     
      {villa.image1 && <img src={villa.image1} width="800" height="450" alt="imgVilla" />}
      <br />
      <h3>{villa.name}</h3>
      <br />
      <h4>Up to {villa.capacity} Guests</h4>
      <h4>Up to {villa.bedroom} Bedrooms</h4>
      <h4>{villa.bathroom} Bathrooms</h4>
      <h4>From {villa.rate} rate per night</h4>
      <br />
      <br />
      <Link className="some-button" to={`/villas/${villa.id}`}>Inquire To Learn More...</Link>
      <br />
    </div>
  ));
  return (
    <div className="locations-villa">
      <div className="locationsvilla-wrapper">
      <h3>
          <em>{showLocation ? showLocation.city : ""}</em>
        </h3>
        <h4>{showLocation ? showLocation.country : ""}</h4>
        <br />
        <br />
        <h4>Browse To See Available Villas</h4>
        <div className="villas-card">{renderVillas}</div>
        <br />
        {isAdmin && showLocation && <AddVillaForm />}
      </div>
    </div>
  );
};
export default LocationVillaPage;

