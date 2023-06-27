import React, { useState } from "react";

const AdvancedSearchComponent = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickSearch = () => {
    handleSearch(searchTerm); // Pass the searchTerm to the handleSearch function
  };

  return (
    <div className="advanced-search">
     
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        placeholder="Search By Villa Name ..."
        onChange={handleInputChange}
      />
      <br />
      <button className="search-btn" onClick={handleClickSearch}>Click Search</button> {/* Call handleClickSearch */}
    </div>
  );
};

export default AdvancedSearchComponent;
