import React, { useContext, useState } from 'react';
import { ActivitiesContext } from '../Contexts/ActivitiesContext';
import { useNavigate } from 'react-router-dom';

const AddActivityForm = () => {
  const { addActivity } = useContext(ActivitiesContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [highlights, setHighlights] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('Sports');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newActivity = {
      name,
      highlights,
      image,
      details,
      category,
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
        setCategory('Sports');
        navigate('/activities');
      } else {
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
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
