import React, { useEffect, useContext, useState } from "react";
import { VillasContext } from "../Contexts/VillasContext";
import InquireForm from "./InquireForm";

// Renders a container component for displaying villas information and attach a form to it.
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

  const currentVilla = villas[currentIndex];

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
        <br />
        <br />
        {currentVilla.image1 && (
          <img src={currentVilla.image1} width="1000" height="500" alt="villa-card" />
        )}
        <br></br>
        <div className="villa-details">
          <h4> Up to {currentVilla.capacity} Guests</h4>|
          <br />
          <h4> Up to {currentVilla.bedroom} Bedrooms</h4>|
          <br />
          <h4> {currentVilla.bathroom} Bathrooms</h4>|
          <br />
          <h4> From {currentVilla.rate} rate per night</h4>
        </div>
    
      </div>
      <br />
      <br />
     
      <div className="inquire-form">
        {/* InquireForm component */}
        <InquireForm />
      </div>

      <div>
        <button className="villa-button" onClick={prevVilla} disabled={currentIndex === 0}>
          Back
        </button>
        <button
          className="villa-button"
          onClick={nextVilla}
          disabled={currentIndex === villas.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VillasContainer;
