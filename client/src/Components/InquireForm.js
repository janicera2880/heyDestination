import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { InquiriesContext } from "../Contexts/InquiriesContext";

const InquireForm = () => {

  const { id } = useParams();
  const villaId = parseInt(id);
  const navigate = useNavigate();

  const { addInquiry } = useContext(InquiriesContext);

  const [values, setValues] = useState({
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
  const [isSubmitted, setIsSubmitted] = useState(false); // State for the pop-up message


  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const newInquiry = {
      ...values,
      villa_id: villaId,
    };

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
          response.json().then((newInquiry) => {
            addInquiry(newInquiry);
            setIsSubmitted(true); // Set the state to show the pop-up message
            setTimeout(() => {
              //setIsSubmitted(false); // Reset the state after a certain time (optional)
              navigate("/villas");
            }, 1000); // Adjust the timeout duration as needed
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
    <div className="inquire-form">
      <h4>
        To make an inquiry regarding this villa, kindly complete the form below,
        and a dedicated villa specialist will contact you promptly.
      </h4>

      <form onSubmit={handleSubmit}>
        <label>Arrival Date:</label>
        <input
          type="date"
          name="arrival"
          placeholder="Arrival Date"
          autoComplete="off"
          value={values.arrival}
          onChange={handleChange}
        />

        <label>Departure:</label>
        <input
          type="date"
          name="departure"
          placeholder="Departure Date"
          autoComplete="off"
          value={values.departure}
          onChange={handleChange}
        />
        <label>Number Of Guests:</label>
        <input
          type="number"
          name="guests"
          placeholder="Number Of Guests"
          autoComplete="off"
          value={values.guests}
          onChange={handleChange}
        />

        <input
          type="text"
          name="full_name"
          placeholder="First and Last Name"
          autoComplete="off"
          value={values.full_name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email Address, e.g., johndoe@gmail.com"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Must be 10 digits"
          autoComplete="off"
          value={values.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Tell us about your group, your budget, and any other information to help curate your stay."
          autoComplete="off"
          value={values.message}
          onChange={handleChange}
        ></textarea>

        <button className="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>

        {errors.length > 0 && (
          <ul style={{ color: "black" }}>
            {errors.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        )}
        {isSubmitted && (
          <div className="popup-success">
            Thank you for your interest! Please allow within 1 to 3 business days and a dedicated agent will contact you. Feel free to browse around and message us using the Inquiry Form.
          </div>
        )}
      </form>
    </div>
  );
};

export default InquireForm;
