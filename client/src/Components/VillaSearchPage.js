import React, { useState, useContext } from 'react';
import VillaCard from './VillaCard';
import AdvancedSearchComponent from './AdvancedSearchComponent';
import { VillasContext } from '../Contexts/VillasContext';
import villaPicture from "./Images/travellogo.png";

const VillaSearchPage = () => {
  const { villas } = useContext(VillasContext);
  const [searchedVillas, setSearchedVillas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 

  const handleSearch = () => {
    const filteredVillas = villas.filter((villa) =>
      villa.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedVillas(filteredVillas);
  };
  

  return (
    <div className='villa-search'>
      <AdvancedSearchComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
<br />
<br />
{searchedVillas.length > 0 ? (
  searchedVillas.map((villa) => (
    <VillaCard key={villa.id} villa={villa} />
  ))
) : (
  <img
        src={villaPicture}
        width="800"
        height="500"
        alt="villa"
        className="villa-pic" />
)}
    </div>
  );
};

export default VillaSearchPage;
