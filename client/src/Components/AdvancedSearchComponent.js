import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdvancedSearchComponent = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    bedrooms: "",
    bathrooms: "",
    capacity: "",
  });
    const navigate = useNavigate();
  
    const handleInputChange = (event) => {
      setSearchCriteria({
        ...searchCriteria,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSearch = () => {
      const query = new URLSearchParams(searchCriteria).toString();
      navigate(`/villas/advanced-search?${query}`);
    };
  
    return (
      <div>
        <label>Bedrooms:</label>
        <input
          type="number"
          name="bedrooms"
          value={searchCriteria.bedrooms}
          onChange={handleInputChange}
        />
        <label>Bathrooms:</label>
        <input
          type="number"
          name="bathrooms"
          value={searchCriteria.bathrooms}
          onChange={handleInputChange}
        />
        <label>Capacity:</label>
        <input
          type="number"
          name="capacity"
          value={searchCriteria.capacity}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default AdvancedSearchComponent;