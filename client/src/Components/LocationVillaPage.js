import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddVillaForm from "./AddVillaForm";
import { LocationsContext } from "../Contexts/LocationsContext";
import { UserAdminContext } from "../Contexts/UserAdminContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ActivitiesContext } from '../Contexts/ActivitiesContext';

/*The component renders a list of villas based on the selected location. 
It also includes a button to toggle the display of a map, and if the user is an admin, 
it shows a form to add a new villa.*/
const LocationVillaPage = () => {
  const { locations } = useContext(LocationsContext);
  const { userAdmin } = useContext(UserAdminContext);
  const { activities } = useContext(ActivitiesContext);


 

  const params = useParams();// Accessing the route parameters
  const locationId = parseInt(params.id);// Parsing the locationId from the route parameters
  const showLocation = locations.find((location) => location.id === locationId);// Find the location object with matching locationId

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
      <h4>Our Exquisite Selection Of Luxury Villa Rentals In Our Renowned Destination</h4>
      <br />
      <h4>{showLocation ? showLocation.city : ""}</h4>,<h4>{showLocation ? showLocation.country : ""}</h4>
        
        <br />
        
        <br />

        {renderVillas}

        <br />      
        <br />
        {userAdmin && showLocation && <AddVillaForm />}
      </div>
    </div>
  );
};

export default LocationVillaPage;