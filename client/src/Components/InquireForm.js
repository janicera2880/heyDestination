import React, { useContext, useState } from 'react';
import { InquiriesContext } from '../contexts/InquiriesContext';

//Creates a form component for users to make inquiries and sends form data to the server.
const InquireForm = () => {
  const { addInquiry } = useContext(InquiriesContext);
  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    numberOfGuests: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [errors, setErrors] = useState([]);

//Updates the form data state with a new key-value pair, where the key is the name of the form field and the value is the value of the form field.

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //Submits a form data to the server and handles the response accordingly.
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/channels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        if (r.ok) {
          setErrors([]);
          r.json().then((newInquiry) => addInquiry(newInquiry));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrors(['An error occurred. Please try again later.']);
      });

    setFormData({
      arrivalDate: '',
      departureDate: '',
      numberOfGuests: '',
      fullName: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <div className="inquire-form">
      <h2>Inquire Here</h2>

      {errors.length > 0 && (
        <ul className="error-list">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}

      <form className="inquire-form__form" onSubmit={handleSubmit}>
        <label>
          Arrival:
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Departure:
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Guests:
          <input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
          />
        </label>

        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InquireForm;

