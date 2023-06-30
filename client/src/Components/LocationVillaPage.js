import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddVillaForm from "./AddVillaForm";
import { LocationsContext } from "../Contexts/LocationsContext";
import { UserAdminContext } from "../Contexts/UserAdminContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ActivitiesContext } from '../Contexts/ActivitiesContext';

const LocationVillaPage = () => {
  const { locations } = useContext(LocationsContext);
  const { userAdmin } = useContext(UserAdminContext);
  const { activities } = useContext(ActivitiesContext);


  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const params = useParams();
  const locationId = parseInt(params.id);
  const showLocation = locations.find((location) => location.id === locationId);

  const renderVillas = showLocation && showLocation.villas.map((villa) => {
    const relatedActivities = activities.filter((activity) => {
      if (showLocation.activity_locations) {
        return showLocation.activity_locations.includes(activity.id);
      }
      return false;
    });
    
  
    return (
      <div className="villa-card" key={villa.id}>
        <Carousel showArrows={true}>
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <img
                src={villa[`image${index + 1}`]}
                alt={`Villa ${villa.name}`}
                className="villa-image"
              />
            </div>
          ))}
        </Carousel>
        <h3>{villa.name}</h3>
        <br />
        <h4>Up to {villa.capacity} Guests</h4>
        <h4>Up to {villa.bedroom} Bedrooms</h4>
        <h4>{villa.bathroom} Bathrooms</h4>
        <h4>From {villa.rate} rate per night</h4>
        <br />
        <br />
        <Link className="some-button" to={`/villas/${villa.id}`}>
          See Full Details...
        </Link>
        <br />
        {/* Display the related activities */}
        {relatedActivities.length > 0 && (
          <div>
            <h3>Related Activities:</h3>
            <ul>
              {relatedActivities.map((activity) => (
                <li key={activity.id}>{activity.name}</li>
              ))}
            </ul>
          </div>
        )}
        <br />
      </div>
    );
  });

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
        <br />

        {renderVillas}

        <br />
        {showMap && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102754.5547056764!2d25.338228928337852!3d36.4072637092345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce86adfd9ff7%3A0xb2a761f740d68afc!2sSantorini!5e0!3m2!1sen!2sus!4v1687805399299!5m2!1sen!2sus"
            text="Maps"
            width="100%"
            title="Map of Villas"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        )}
        <br />
        <button className="some-button" onClick={toggleMap}>
          {showMap ? "Hide Map" : "Show Map"}
        </button>
        <br />
        <br />
        {userAdmin && showLocation && <AddVillaForm />}
      </div>
    </div>
  );
};

export default LocationVillaPage;