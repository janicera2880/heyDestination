import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { VillasContext } from "../Contexts/VillasContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InquireForm from "./InquireForm";

function VillaDetails() {
  const { id } = useParams();
  const villaID = parseInt(id);
  const { villa, setVilla } = useContext(VillasContext);

  useEffect(() => {
    fetch(`/villas/${villaID}`)
      .then((response) => response.json())
      .then((data) => {
        setVilla(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [villaID, setVilla]);

  function VillaComponent() {
    return (
      <div className="villa-details-container">
        <h2 className="villa-title">{villa.name}</h2>
        <div className="villa-info">
          <Carousel showArrows={true}>
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <img src={villa[`image${index + 1}`]} alt={`Villa ${villa.name}`} />
              </div>
            ))}
          </Carousel>
          <div className="villa-details">
            <h4>Available for {villa.capacity} Guests</h4>
            <h4>{villa.bedroom} Bedrooms</h4>
            <h4>{villa.bathroom} Bathrooms</h4>
            <h4>{villa.rate} Nightly Rate</h4>
            <div className="villa-info">
              <h3>Highlights</h3>
              <p>{villa.highlights}</p>
              <h3>Overview</h3>
              <p>{villa.overview}</p>
              <h3>Features</h3>
              <p>{villa.features}</p>
              <h3>Amenities</h3>
              <p>{villa.amenities}</p>
              <h3>Services</h3>
              <p>{villa.services}</p>
            </div>
          </div>
        </div>
        <InquireForm villaId={villa.id} />
      </div>
    );
  }

  return <div className="user-post-details">{villa ? <VillaComponent /> : "Loading villa..."}</div>;
}

export default VillaDetails;
