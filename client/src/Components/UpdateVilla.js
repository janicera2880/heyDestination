import React, { useState, useContext } from "react";
import { VillasContext } from "../Contexts/VillasContext";

function UpdateVilla({ handleUpdateForm }) {
  const { villa } = useContext(VillasContext);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    name: villa?.name ?? '',
    rate: villa?.rate ?? '',
    services: villa?.services ?? '',
  });
  

  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[key] = value;
    setFormData(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = [];

    // Perform validation on form data here
    if (formData.name === "") {
      validationErrors.push("Name is required.");
    }
    if (formData.rate === "") {
      validationErrors.push("Rate is required.");
    }
    if (formData.services === "") {
      validationErrors.push("Services is required.");
    }
    

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedVilla = {
      name: formData.name,
      highlights: formData.highlights,
      features: formData.features,
      amenities: formData.amenities,
      overview: formData.overview,
      rate: formData.rate,
      services: formData.services,
    };
    handleUpdateForm(updatedVilla);
    setFormData({ ...villa, ...updatedVilla });
  }

  return (
    <div className="edit-form">
      <h4>Update Villa Information Here</h4>
      <form onSubmit={handleSubmit}>
        <h5>Name :</h5>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <h5>Rate :</h5>
        <input
          type="number"
          name="rate"
          value={formData.rate}
          onChange={handleInputChange}
        />
        <br />
        
        <h5>Services :</h5>
        <textarea
          type="text"
          name="services"
          value={formData.services}
          onChange={handleInputChange}
        />
        <br />
        <button className="some-button" type="submit">
          Update ✅
        </button>
        {/* Render error messages if there are any */}
        {errors.length > 0 && (
          <ul style={{ color: "black" }}>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default UpdateVilla;
