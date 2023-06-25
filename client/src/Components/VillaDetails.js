import React, { useContext } from "react";
import { VillasContext } from "../Contexts/VillasContext";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function VillaDetails() {
  const { id } = useParams(); // Extract the id parameter from the URL
  const { villas } = useContext(VillasContext);

  // Find the villa by id in the villas array
  const villa = villas.find((villa) => villa.id === parseInt(id));
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
      <Carousel>
        {Object.values(images).map((image, index) => (
          <div key={`villa-image-${index + 1}`} className="villa-image">
            <img src={image} width="400" height="400" alt={`Villa Container ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      
      </div>
  );
}

export default VillaDetails;
