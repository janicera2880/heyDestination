import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VillaCard from "./VillaCard";
import AdvancedSearchComponent from "./AdvancedSearchComponent";

const VillaSearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const bedrooms = searchParams.get("bedrooms") || null;
  const bathrooms = searchParams.get("bathrooms") || null;
  const capacity = searchParams.get("capacity") || null;

  const [searchedVillas, setSearchedVillas] = useState([]);

  useEffect(() => {
    const fetchVillas = async () => {
      try {
        const response = await fetch(`/villas/search?bedrooms=${bedrooms}&bathrooms=${bathrooms}&capacity=${capacity}`);
        if (response.ok) {
          const data = await response.json();
          setSearchedVillas(data);
        } else {
          throw new Error("Error fetching villas");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVillas();
  }, [bedrooms, bathrooms, capacity]);

  return (
    <div>
      <AdvancedSearchComponent />
      <h2>Search Results</h2>
      {searchedVillas.length > 0 ? (
        searchedVillas.map((villa) => (
          <VillaCard key={villa.id} villa={villa} />
        ))
      ) : (
        <p>No villas available based on your search criteria.</p>
      )}
    </div>
  );
};

export default VillaSearchPage;
