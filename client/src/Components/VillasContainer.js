import React, { useEffect, useContext, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { VillasContext } from "../Contexts/VillasContext";
import VideoBackground from "./Images/videobackground2.mp4"


// Component that displays a carousel of villas with their details.
function VillasContainer() {
  // Accessing the villas and setVillas function from the VillasContext
  const { villas, setVillas } = useContext(VillasContext);

  // State variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  // Fetch villas data from the server
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

  // Render error messages or loading indicators based on the state
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

  // Render an error message if the villa data is invalid
  if (!currentVilla) {
    return <p>Invalid villa data.</p>;
  }
// Function to navigate to the next villa in the carousel
  const nextVilla = () => {
    if (currentIndex === villas.length - 1) {
      alert("You have reached the end.");
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
// Function to navigate to the previous villa in the carousel
  const prevVilla = () => {
    if (currentIndex === 0) {
      alert("You are on the first page.");
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
    /*Renders a carousel container to hold the images
    an array of length 10 created using the spread syntax [...Array(10)]. 
    It is used to generate a sequence of numbers from 0 to 9, which are then mapped to JSX elements.
    <div key={index}>: This is a <div> element being rendered for each index in the mapped array. 
    The key prop is set to the index value to provide a unique identifier for each rendered element.*/
  return (
    <div className="all-villas">
      <video id="video-background" src={VideoBackground} autoPlay loop muted /> 
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
          <button className="villa-button" onClick={prevVilla}>Previous</button>
          <button className="villa-button" onClick={nextVilla}>Next Page</button>
        </div>
      </div>
    </div>
  );
}

export default VillasContainer;
