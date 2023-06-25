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
    images: [] // Array to store the uploaded images
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
      location_id: locationId,
    };
  
    // Convert the image data to Blob objects
    const imageBlobs = formData.images.map((imageData) => {
      const byteCharacters = atob(imageData.split(",")[1]);
      const byteArrays = [];
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
      }
      return new Blob([new Uint8Array(byteArrays)], { type: "image/jpeg" });
    });
  
    // Create a FormData object to send the image files
    const formDataWithImages = new FormData();
    formDataWithImages.append("villa[name]", newVilla.name);
    // Append other villa data to the FormData object
    // ...
  
    // Append the image files to the FormData object
    imageBlobs.forEach((imageBlob, index) => {
      formDataWithImages.append(`villa[images][]`, imageBlob, `image${index + 1}.jpg`);
    });
  
    fetch("/user_admin/villas", {
      method: "POST",
      body: formDataWithImages,
    })
      .then((response) => {
        if (response.ok) {
          setErrors([]);
          response.json().then((newVilla) => {
            addVilla(newVilla);
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
  const handleImageChange = (event) => {
    const files = event.target.files;
    const imageFiles = Array.from(files).slice(0, 8); // Limit the selection to 8 images
  
    const imagePromises = imageFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(imagePromises)
      .then((results) => {
        setFormData({
          ...formData,
          images: results,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
  
<div className="villa-form">
    <h2>Create a Villa</h2>
    {errors.length > 0 && (
      <ul className="error-list">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>))}
      </ul>
      )}
<form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
  />

  <label htmlFor="highlights">Highlights:</label>
  <textarea
    type="text"
    name="highlights"
    value={formData.highlights}
    onChange={handleChange}
    ></textarea>

  <label htmlFor="overview">Overview:</label>
  <textarea
    name="overview"
    value={formData.overview}
    onChange={handleChange}
  ></textarea>

  <label htmlFor="overview">Features:</label>
  <textarea
    name="features"
    value={formData.features}
    onChange={handleChange}
  ></textarea>

  <label htmlFor="overview">Amenities:</label>
  <textarea
    name="amenities"
    value={formData.amenities}
    onChange={handleChange}
  ></textarea>

  <label htmlFor="images">Rate:</label>
  <input
    type="number"
    name="rate"
    value={formData.rate}
    onChange={handleChange}
  />

  <label htmlFor="images">Capacity:</label>
  <input
    type="number"
    name="capacity"
    value={formData.capacity}
    onChange={handleChange}
  />

  <label htmlFor="images">Bedroom:</label>
  <input
    type="number"
    name="bedroom"
    value={formData.bedroom}
    onChange={handleChange}
  />

  <label htmlFor="images">Bathroom:</label>
  <input
    type="number"
    name="bathroom"
    value={formData.bathroom}
    onChange={handleChange}
  />

  <label htmlFor="services">Services:</label>
  <textarea
    name="services"
    value={formData.services}
    onChange={handleChange}
  ></textarea>

  <label htmlFor="images">Images:</label>
  <input
    type="file"
    name="images"
    accept="image/*"
    multiple
    onChange={handleImageChange}
  />

  {errors.length > 0 && (
    <ul className="error-list">
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  )}

  <button className="primary" type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
</form>

</div>
  );
};

export default AddVillaForm;
