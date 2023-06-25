import React, { useContext, useState } from 'react';
import { ActivitiesContext } from '../Contexts/ActivitiesContext';
import { useNavigate } from 'react-router-dom';


//Renders an add activity form with input fields for name, highlights, image, details, and category. 
const AddActivityForm = () => {
  const { addActivity } = useContext(ActivitiesContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [highlights, setHighlights] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [categories, setCategories] = useState('Sports'); // Default category value is 'sports'


  //On submit, sends a POST request to add a new activity to the server and updates the activities list using the addActivity function from the ActivitiesContext. 
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new activity object
    const newActivity = {
      name,
      highlights,
      image,
      details,
      categories,
    };

    try {
      // Send POST request to add activity
      const response = await fetch('/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newActivity),
      });

      if (response.ok) {
        // Add the activity using the addActivity function from the context
        addActivity(newActivity);

        // Resets the form fields on successful submission. 
        setName('');
        setHighlights('');
        setImage('');
        setDetails('');
        setCategories('Sports');
      // Navigate to a new location after successful submission
        navigate('/locations'); 
      } else {
        // Display error message if there's a problem with the request
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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

        <button className="some-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddActivityForm;
