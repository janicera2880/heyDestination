import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const InquireForm = ({ onAddPost }) => {
  const [formData, setFormData] = useState({
    arrival: "",
    departure: "",
    guests: 0,
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const villaId = parseInt(id);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const newInquiry = { ...formData };

    fetch(`/villas/${villaId}/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInquiry),
    })
      .then((response) => {
        if (response.ok) {
          setErrors([]);
          response.json().then((newInquiry) => onAddPost(newInquiry));
          navigate("/villas");
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
    <div className="inquire-form">
      <br />
      <div className="inquire-form__header">
        We're here to help! Fill out the form below, and a villa specialist will be in touch with you shortly.
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <br />

        <input
          type="date"
          name="arrival"
          placeholder="Arrival Date"
          autoComplete="off"
          value={formData.arrival}
          onChange={handleChange}
        />
        <br />
        <input
          type="date"
          name="departure"
          placeholder="Departure Date"
          autoComplete="off"
          value={formData.departure}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="guests"
          placeholder="Number Of Guests"
          autoComplete="off"
          value={formData.guests}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="full_name"
          placeholder="First and Last Name"
          autoComplete="off"
          value={formData.full_name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (e.g., xxx-xxx-xxxx)"
          autoComplete="off"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="message"
          placeholder="Tell us about your group, your budget, and any other information to help curate your stay."
          autoComplete="off"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <br />

        <button className="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>

        {errors.length > 0 && (
          <ul style={{ color: "black" }}>
            {errors.map((err, index) => (
              /* Display any errors returned by the server */
              <li key={index}>{err}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default InquireForm;
