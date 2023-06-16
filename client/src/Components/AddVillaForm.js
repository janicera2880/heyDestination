import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VillasContext } from "../Contexts/VillasContext";

const AddVillaForm = () => {
  const { id } = useParams();
  const locationId = parseInt(id);
  const navigate = useNavigate();
  
  const { addVilla } = useContext(VillasContext);

  const [formData, setFormData] = useState({
    name: "",
    highlights: "",
    overview: "",
    features: "",
    amenities: "",
    rate: 0,
    capacity: 0,
    bedroom: 0,
    bathroom: 0,
    services: "",
    //location_id: channelId, // Set location_id based on the channel ID
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const newVilla = {
      ...formData,
    };

    fetch("/user_admin/${locationId}/villas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVilla),
    })
      .then((response) => {
        if (response.ok) {
          setErrors([]);
          response.json().then((newVilla) => {
            addVilla(newVilla); // Use the addVilla function from VillasContext
            navigate("/villas");
          });
        } else {
          response.json().then((err) => {
            if (err.errors) {
              setErrors(Object.values(err.errors));
            } else {
              setErrors([err.error]);
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrors(["An error occurred. Please try again."]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="villa-form">
      <h2>Create a Villa</h2>
      {errors.length > 0 && (
        <ul className="error-list">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    </div>
  );
};

export default AddVillaForm;