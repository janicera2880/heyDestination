import React from 'react';

const VillaCard = ({ villa }) => {
  const { image1 } = villa;

  return (
    <div className="villas-card_search">
      <h2>{villa.name}</h2>
      <br />
      {image1 && (
        <img src={image1} width="800"
        height="500" alt={villa.name} className="villa-image" />
      )}
      <div className="villa-details">
        <h4>Up to {villa.capacity} Guests</h4>
        <h4>Up to {villa.bedroom} Bedrooms</h4>
        <h4>{villa.bathroom} Bathrooms</h4>
        <h4>From {villa.rate} rate per night</h4>
      </div>
    </div>
  );
};

export default VillaCard;

