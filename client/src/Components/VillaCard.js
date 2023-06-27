import React, { useContext } from 'react';
import { VillasContext } from '../Contexts/VillasContext';



const VillaCard = () => {
  const { villas } = useContext(VillasContext);

  return (
    <div className="villas-card_search">
      {villas.map((villa) => (
        <div key={villa.id}>
        <h4>Up to {villa.capacity} Guests</h4>
          <h4>Up to {villa.bedroom} Bedrooms</h4>
          <h4>{villa.bathroom} Bathrooms</h4>
          <h4>From {villa.rate} rate per night</h4>
        </div>
      ))}
    </div>
  );
};

export default VillaCard;