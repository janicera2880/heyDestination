import React, { useState } from 'react';

const InquireForm = () => {
  const [formData, setFormData] = useState({
    arrival: '',
    departure: '',
    guests: '',
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState([]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const { errors } = await response.json();
        // Handle validation errors and display them to the user
        // You can store the validation errors in a state variable and render them in the form
      } else {
        // Inquiry successfully created, perform any necessary actions
      }
    } catch (error) {
      // Handle any network or server errors
    }
  };

  return (
    <div>
    <h2>Inquire Here</h2>
    {errors.length > 0 && (
      <ul style={{ color: 'red' }}>
        {errors.map((errors, index) => (
          <li key={index}>{errors}</li>
        ))}
      </ul>
    )}
    <form onSubmit={handleSubmit}>
      <label htmlFor="arrival">Arrival:</label>
      <input
        type="date"
        id="arrival"
        name="arrival"
        value={formData.arrival}
        onChange={handleChange}
      />

      <label htmlFor="departure">Departure:</label>
      <input
        type="date"
        id="departure"
        name="departure"
        value={formData.departure}
        onChange={handleChange}
      />

      <label htmlFor="guests">Guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default InquireForm;
