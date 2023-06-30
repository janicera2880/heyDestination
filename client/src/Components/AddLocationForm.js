import React, { useContext, useState } from 'react';
import { LocationsContext } from '../Contexts/LocationsContext';

//Renders a form for adding a new location.

const AddLocationForm = () => {
  const { addLocation } = useContext(LocationsContext);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);

  /*function called handleSubmit that is triggered when a form is submitted. 
  It performs client-side validation on the form inputs and sends a POST request to add a new location. 
  If the request is successful, it adds the new location to the context and resets the form fields. 
  If there is an error with the request, it displays an error message.*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors array
    setErrors([]);

    // Perform validation
    const validationErrors = [];
    if (!city) {
      validationErrors.push('City is required.');
    }
    if (!country) {
      validationErrors.push('Country is required.');
    }
    if (!image) {
      validationErrors.push('Image URL is required.');
    }
    if (!description) {
      validationErrors.push('Description is required.');
    }

    // Display validation errors, if any
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Create a new location object
    const newLocation = {
      city,
      country,
      image,
      description,
    };

    try {
      // Send POST request to add location
      const response = await fetch('/locations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLocation),
      });

      if (response.ok) {
        // Add the location using the addLocation function from the context
        addLocation(newLocation);

        // Reset form fields
        setCity('');
        setCountry('');
        setImage('');
        setDescription('');
      } else {
        // Display error message if there's a problem with the request
        const errorData = await response.json();
        setErrors([errorData.message]);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors(['An error occurred. Please try again later.']);
    }
  };

  return (
    <div className='add-location'>
      <h2>Submit New Location Here</h2>
      
      <form onSubmit={handleSubmit}>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        <label>Image:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <button type="submit">Submit</button>
        {errors.length > 0 && (
        <ul style={{ color: 'blue' }}>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      </form>
    </div>
  );
};

export default AddLocationForm;
