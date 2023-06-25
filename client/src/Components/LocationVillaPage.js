import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import VillaDetails from "./VillaDetails";
import { VillasContext } from "../Contexts/VillasContext";

function LocationVillaPage() {
  const params = useParams();
  const { villas } = useContext(VillasContext);
  const villaShow = villas.find((villa) => {
    return villa.id === parseInt(params.id);
  });

  let viewMore;
  if (villaShow) {
    viewMore = villaShow.villas.map((villa) => (
      <VillaDetails key={villa.id} villa={villa} />
    ));
  }

  return (
    <div className="location-villa">
      {viewMore}
    </div>
  );
}

export default LocationVillaPage;
