import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VillasContext } from "../Contexts/VillasContext";

const InquireForm = () => {
  const { addInquiryToVilla } = useContext(VillasContext);
  const initialState = {
    arrival: "",
    departure: "",
    guests: 0,
    full_name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading state
  const { id } = useParams();
  const villaID = parseInt(id);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!value) {
      setValues({
        ...values,
        [name]: initialState[name],
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Enable loading state

    fetch(`/villas/${villaID}/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          setErrors([]);
          response.json().then((newInquiry) => addInquiryToVilla(newInquiry));
          navigate("/villas");
        } else {
          response.json().then((err) => {
            if (err.errors) {
              setErrors(err.errors);
            } else {
              setErrors([err.error]);
            }
          });
        }
      })
      .finally(() => {
        setIsLoading(false); // Disable loading state
      });

    setValues(initialState);
  };

  

  return (
    <div className="inquire-form">
      <br />
      <div className="inquire-form__header">
      <h4>To make an inquiry regarding this villa, kindly complete the form below, and a dedicated villa specialist will contact you promptly.</h4>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <br />
    < label>Arrival Date:</label>
        <input
          type="date"
          name="arrival"
          placeholder="Arrival Date"
          autoComplete="off"
          value={values.arrival}
          onChange={handleChange}
        />
        <br />
        < label>Departure:</label>
        <input
          type="date"
          name="departure"
          placeholder="Departure Date"
          autoComplete="off"
          value={values.departure}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="guests"
          placeholder="Number Of Guests"
          autoComplete="off"
          value={values.guests}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="full_name"
          placeholder="First and Last Name"
          autoComplete="off"
          value={values.full_name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (e.g., xxx-xxx-xxxx)"
          autoComplete="off"
          value={values.phone}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="message"
          placeholder="Tell us about your group, your budget, and any other information to help curate your stay."
          autoComplete="off"
          value={values.message}
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
