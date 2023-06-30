import React, { useContext, useState } from 'react';
import { ActivitiesContext } from '../Contexts/ActivitiesContext';
import { LocationsContext } from '../Contexts/LocationsContext';
import { useNavigate } from 'react-router-dom';


//Renders a form for adding a new activity.
const AddActivityForm = () => {
  const { addActivity } = useContext(ActivitiesContext);
  const { locations } = useContext(LocationsContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState('');
  const [highlights, setHighlights] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [categories, setCategories] = useState('Sports');
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);
    const validationErrors = [];

    if (!name) {
      validationErrors.push('Name is required.');
    }
    if (!highlights) {
      validationErrors.push('Highlights is required.');
    }
    if (!image) {
      validationErrors.push('Image URL is required.');
    }
    if (!details) {
      validationErrors.push('Details is required.');
    }
    if (!categories) {
      validationErrors.push('Category is required.');
    }
    if (selectedLocations.length === 0) {
      validationErrors.push('At least one location must be selected.');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newActivity = {
      name,
      highlights,
      image,
      details,
      categories,
      locations: selectedLocations,
    };

    try {
      const response = await fetch('/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newActivity),
      });

      if (response.ok) {
        addActivity(newActivity);
        setName('');
        setHighlights('');
        setImage('');
        setDetails('');
        setCategories('Sports');
        setSelectedLocations([]);
        navigate('/activities');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLocationChange = (event) => {
    const selectedLocationIds = Array.from(event.target.selectedOptions, (option) => option.value);
    const selectedLocations = locations.filter((location) => selectedLocationIds.includes(location.id));
    setSelectedLocations(selectedLocations);
  };

  return (
    <div className="add-activity">
      <h2>Submit New Activity Here</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Highlights:
          <textarea value={highlights} onChange={(e) => setHighlights(e.target.value)}></textarea>
        </label>

        <label>
          Image:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>

        <label>
          Details:
          <textarea value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
        </label>

        <label>
          Category:
          <select value={categories} onChange={(e) => setCategories(e.target.value)}>
            <option value="Sports">Sports</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Events">Events</option>
            <option value="Unique">Unique</option>
          </select>
        </label>

        <label>
          Locations:
          <select multiple value={selectedLocations.map((location) => location.id)} onChange={handleLocationChange}>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.city}, {location.country}
              </option>
            ))}
          </select>
        </label>

        <button className="some-button" type="submit">
          Submit
        </button>

        {errors.length > 0 && (
          <ul style={{ color: 'red' }}>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default AddActivityForm;
