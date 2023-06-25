import React, { useEffect, useContext, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { VillasContext } from "../Contexts/VillasContext";

function VillasContainer() {
  const { villas, setVillas } = useContext(VillasContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/villas")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching villas");
        }
      })
      .then((data) => {
        setVillas(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching villas");
      });
  }, [setVillas]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!villas) {
    return <p>Loading villas...</p>;
  }

  if (villas.length === 0) {
    return <p>No villas found.</p>;
  }

  const currentVilla = villas[currentIndex];

  if (!currentVilla) {
    return <p>Invalid villa data.</p>;
  }

  const nextVilla = () => {
    if (currentIndex === villas.length - 1) {
      alert("You have reached the end.");
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevVilla = () => {
    if (currentIndex === 0) {
      alert("You are on the first page.");
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="all-villas">
      <div className="view-card" key={currentVilla.id}>
        <h2>{currentVilla.name}</h2>
        <Carousel showArrows={true}>
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <img src={currentVilla[`image${index + 1}`]} alt={`Villa ${currentVilla.name}`} />
            </div>
          ))}
        </Carousel>
        <div className="villa-details">
          <h4>Up to {currentVilla.capacity} Guests</h4>
          <h4>Up to {currentVilla.bedroom} Bedrooms</h4>
          <h4>{currentVilla.bathroom} Bathrooms</h4>
          <h4>From {currentVilla.rate} rate per night</h4>
          <div className="villa-info">
            <h3>Highlights</h3>
            <p>{currentVilla.highlights}</p>
            <h3>Overview</h3>
            <p>{currentVilla.overview}</p>
            <h3>Features</h3>
            <p>{currentVilla.features}</p>
            <h3>Amenities</h3>
            <p>{currentVilla.amenities}</p>
            <h3>Services</h3>
            <p>{currentVilla.services}</p>
          </div>
        </div>
        <div className="controls">
          <button className="some-button" onClick={prevVilla}>Previous</button>
          <button className="some-button" onClick={nextVilla}>Next Page</button>
        </div>
      </div>
    </div>
  );
}

export default VillasContainer;
