import React, { useContext, useState } from 'react';
import { InquiriesContext } from '../Contexts/InquiriesContext';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Creates a form component for users to make inquiries and sends form data to the server.
const InquireForm = () => {
  const { addInquiry } = useContext(InquiriesContext);
  const [formData, setFormData] = useState({
    arrival: '',
    departure: '',
    guests: '',
    full_name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const villaId = parseInt(id);
  const navigate = useNavigate();

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
    setIsLoading(true);
// Perform a POST request to the '/inquiries' endpoint
  fetch(`villas/${villaId}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
       
        // clear the errors and add the new inquiry to the list of inquiries
      body: JSON.stringify(formData),
    })
      .then((r) => {
        if (r.ok) {
          setErrors([]);
          setSuccessMessage('Thank you for your interest! Please allow 1-3 business days for an agent to contact you.');
          r.json().then((newInquiry) => addInquiry(newInquiry));
          navigate(`/villas/${villaId}`);
        } else {
            // parse the response JSON and set the errors state variable
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((error) => {
        // If there's a network error or server error, catch the error and set an error message
        console.error('Error:', error);
        setErrors(['An error occurred. Please try again later.']);
      });

    setFormData({
        arrival: '',
        departure: '',
        guests: '',
        full_name: '',
        email: '',
        phone: '',
        message: ''
    });
  };

  return (
    <div className="inquire-form">
      <h2>Inquire Here</h2>
      <p>We're here to help! Fill out the form below and a villa specialist will be in touch with you shortly.</p>

      {errors.length > 0 && (
        <ul className="error-list">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      {successMessage && (
    <div className="success-message">{successMessage}</div>
  )}

      <form className="inquire-form__form" onSubmit={handleSubmit}>
        <label>
          Arrival Date:
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Departure Date:
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            name="numberOfGuests"
            value={formData.guests}
            onChange={handleChange}
          />
        </label>

        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.full_name}
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
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
        Tell us about your group, your budget, and any other information to help curate your stay.
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <button className="primary" type="submit">
        {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default InquireForm;

