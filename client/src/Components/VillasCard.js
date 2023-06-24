import React, { useContext } from "react";
import { VillasContext } from "../Contexts/VillasContext";
import { LocationsContext } from "../Contexts/LocationsContext";
import { useParams } from "react-router-dom";

// Renders a component that displays information about a Villa.
function VillasCard() {
  const { villa } = useContext(VillasContext);
  const { location_id } = useParams();
  const { getLocationById } = useContext(LocationsContext);

  if (!villa) {
    // Render a loading state or return null if the villa data is not available yet
    return null;
  }

  // Fetches data from a context called VillasContext and extracts properties from it.
  const {
    name,
    highlights,
    overview,
    features,
    amenities,
    rate,
    capacity,
    bedroom,
    bathroom,
    services,
    ...images // Use object destructuring to collect image attributes into the 'images' object
  } = villa;

  // Retrieve the location details using getLocationById
  const location = getLocationById(location_id);

  const tomtomApiKey = "uF3xNUwX5wD3lAhJ1jcom9gdMmONPpcC";
  const mapUrl = `https://api.tomtom.com/maps/cdn/embed/v1/view/static.html?key=${tomtomApiKey}&center=${location.latitude},${location.longitude}&zoom=15&height=300&width=100%`;

  return (
    <div className="villa-card">
      <h3 className="villa-name">{name}</h3>
      <div className="villa-highlights">
        <h4>Highlights</h4>
        <p>{highlights}</p>
      </div>
      <div className="villa-overview">
        <h4>Overview</h4>
        <p>{overview}</p>
      </div>
      <div className="villa-features">
        <h4>Features</h4>
        <p>{features}</p>
      </div>
      <div className="villa-amenities">
        <h4>Amenities</h4>
        <p>{amenities}</p>
      </div>
      <div className="villa-rate">
        <h4>Rate</h4>
        <p>{rate}</p>
      </div>
      <div className="villa-capacity">
        <h4>Capacity</h4>
        <p>{capacity}</p>
      </div>
      <div className="villa-bedroom">
        <h4>Bedroom</h4>
        <p>{bedroom}</p>
      </div>
      <div className="villa-bathroom">
        <h4>Bathroom</h4>
        <p>{bathroom}</p>
      </div>
      <div className="villa-services">
        <h4>Services</h4>
        <p>{services}</p>
      </div>
      {/* Render each image attribute dynamically */}
      {Object.values(images).map((image, index) => (
        <div key={`villa-image-${index + 1}`} className="villa-image">
          <h4>Image {index + 1}</h4>
          <img src={image} width="400" height="400" alt={`Villa Container ${index + 1}`} />
        </div>
      ))}
      {location && (
        <div className="villa-location">
          <h4>Location</h4>
          <iframe
            title="Villa Location"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={mapUrl}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default VillasCard;
