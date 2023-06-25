import React, { useEffect, useContext, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { VillasContext } from "../Contexts/VillasContext";

function VillasContainer() {
  const { villas, setVillas } = useContext(VillasContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const perPage = 2;
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/villas")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching posts");
        }
      })
      .then((data) => {
        setVillas(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching posts");
      });
  }, [setVillas]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!villas) {
    return <p>Loading all villas...</p>;
  }

  const currentVillas = villas.slice(currentIndex, currentIndex + perPage);

  const nextVilla = () => {
    if (currentIndex + perPage >= villas.length) {
      alert("You have reached the end.");
    } else {
      setCurrentIndex((prevIndex) => prevIndex + perPage);
    }
  };

  const prevVilla = () => {
    if (currentIndex === 0) {
      alert("You are on the first page.");
    } else {
      setCurrentIndex((prevIndex) => prevIndex - perPage);
    }
  };

  return (
    <div className="all-villas">
      {currentVillas.map((villa) => (
        <div className="view-card" key={villa.id}>
          <h2>{villa.name}</h2>
          <Carousel showArrows={true}>
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <img src={villa[`image${index + 1}`]} alt={`Villa ${villa.name}`} />
              </div>
            ))}
          </Carousel>
          <div className="villa-details">
            <h4>Up to {villa.capacity} Guests</h4>
            <h4>Up to {villa.bedroom} Bedrooms</h4>
            <h4>{villa.bathroom} Bathrooms</h4>
            <h4>From {villa.rate} rate per night</h4>
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
      ))}
      <div>
        <button className="villa-button" onClick={prevVilla} disabled={currentIndex === 0}>
          Back
        </button>
        <button
          className="villa-button"
          onClick={nextVilla}
          disabled={currentIndex + perPage >= villas.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VillasContainer;
