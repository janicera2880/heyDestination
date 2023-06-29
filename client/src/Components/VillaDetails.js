import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { VillasContext } from "../Contexts/VillasContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//this function is a React component that renders a post and the user who created it.
function VillaDetails() {

  //useParams hook to retrieve the post ID from the URL.
  const { id } = useParams();
  const { villa, setVilla} = useContext(VillasContext);


  /*useEffect hook to fetch the post data from the server when the component mounts
  updates the post state with the received data*/
  useEffect(() => {
    fetch(`/villas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVilla(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, setVilla]);

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
            <Link className="some-button" to={`/villas/${villa.id}/inquiries?location_id=${villa.location_id}`}>
            Inquire About This Villa...
            </Link>
          </div>
          
        </div>
        </div>
      </div>
    );
  }

  return <div className="user-post-details">{villa ? <VillaComponent /> : "Loading post..."}</div>;
}

export default VillaDetails;