import React, { useState } from "react";


//Component for advanced search functionality.
const AdvancedSearchComponent = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");


  //Handles the input change event.
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
