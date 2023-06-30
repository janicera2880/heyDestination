import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VillasContext } from "../Contexts/VillasContext";

/*Renders a form for adding a new villa, which uses React hooks such as useState, useContext, and useParams 
for managing state and navigating between pages. The form captures various details about the villa, 
when the form is submitted, it makes a POST request to a server endpoint to save the new villa data. 
If there are any errors during the submission, they are displayed below the form.*/
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
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
    image8: "",
    image9: "",
    image10: "",
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /*This function makes an event object as a parameter. Inside the function, it calls the setFormData function 
  with an updated object as its argument. The updated object is created by spreading the formData object 
  with the name and adding a new key-value pair with the name and value from the event.target object.*/
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

/*Prevents the default form submission behavior, sets a loading state, 
creates a new object newVilla by spreading formData and adding a location_id property, 
makes a POST request to a specific API endpoint with the newVilla object as the request body, and handles the response. 
If the response is successful, it clears any errors, adds the new villa to a list, and navigates to a specific page. 
If the response is not successful, it extracts error messages from the response and sets them in the state.*/
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const newVilla = {
      ...formData,
      location_id: locationId,
    };

    fetch(`/locations/${locationId}/villas`, {
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

  return (
    <div className="villa-form">
      <h2>List A New Villa Here</h2>
      {errors.length > 0 && (
        <ul className="error-list">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
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

        <label htmlFor="features">Features:</label>
        <textarea
          name="features"
          value={formData.features}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="amenities">Amenities:</label>
        <textarea
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="rate">Rate:</label>
        <input
          type="number"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
        />

        <label htmlFor="capacity">Capacity:</label>
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
        />

        <label htmlFor="bedroom">Bedroom:</label>
        <input
          type="number"
          name="bedroom"
          value={formData.bedroom}
          onChange={handleChange}
        />

        <label htmlFor="bathroom">Bathroom:</label>
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

        <label htmlFor="image1">Image 1:</label>
        <input
          type="text"
          name="image1"
          value={formData.image1}
          onChange={handleChange}
        />

        <label htmlFor="image2">Image 2:</label>
        <input
          type="text"
          name="image2"
          value={formData.image2}
          onChange={handleChange}
        />

        <label htmlFor="image3">Image 3:</label>
        <input
          type="text"
          name="image3"
          value={formData.image3}
          onChange={handleChange}
        />

        <label htmlFor="image4">Image 4:</label>
        <input
          type="text"
          name="image4"
          value={formData.image4}
          onChange={handleChange}
        />
        
        <label htmlFor="image3">Image 5:</label>
        <input
          type="text"
          name="image5"
          value={formData.image5}
          onChange={handleChange}
        />

        <label htmlFor="image3">Image 6:</label>
        <input
          type="text"
          name="image6"
          value={formData.image6}
          onChange={handleChange}
        />

        <label htmlFor="image3">Image 7:</label>
        <input
          type="text"
          name="image7"
          value={formData.image7}
          onChange={handleChange}
        />
        <label htmlFor="image8">Image 8:</label>
        <input
          type="text"
          name="image8"
          value={formData.image8}
          onChange={handleChange}
        />

        <label htmlFor="image3">Image 9:</label>
        <input
          type="text"
          name="image9"
          value={formData.image9}
          onChange={handleChange}
        />

        <label htmlFor="image3">Image 10:</label>
        <input
          type="text"
          name="image10"
          value={formData.image10}
          onChange={handleChange}
        />
        {/* Repeat the above <label> and <input> elements for image3 to image10 */}
        
        {errors.length > 0 && (
          <ul className="error-list">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <button className="primary" type="submit">
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddVillaForm;
