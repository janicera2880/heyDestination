import React, { useState, useContext } from "react";
import { VillasContext } from "../Contexts/VillasContext";


//UpdateVilla is a function that handles the updating of villa information.
function UpdateVilla({ handleUpdateForm }) {
  // Access the villa object from the VillasContext
  const { villa } = useContext(VillasContext);
  // Initialize state variables
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    name: villa?.name ?? '',
    rate: villa?.rate ?? '',
    services: villa?.services ?? '',
  });
  
// Function to handle input changes in the form
  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[key] = value;
    setFormData(newFormData);
  }

  // Function to handle form submission
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

    // Prepare the updated villa object with form data
    const updatedVilla = {
      name: formData.name,
      highlights: formData.highlights,
      features: formData.features,
      amenities: formData.amenities,
      overview: formData.overview,
      rate: formData.rate,
      services: formData.services,
    };
    // Call the handleUpdateForm function passed as a prop
    handleUpdateForm(updatedVilla);
    // Update the form data state with the updated villa data
    setFormData({ ...villa, ...updatedVilla });
  }

  // Render the update villa form
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
