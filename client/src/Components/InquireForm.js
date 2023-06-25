import React, { useContext, useState } from 'react';
import { InquiriesContext } from '../Contexts/InquiriesContext';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const InquireForm = () => {
  const { addInquiry } = useContext(InquiriesContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const villaId = parseInt(id, 10);

  // Get locationId from the URL state (if available)
  const location = useLocation();
  const locationId = location.state && location.state.locationId;

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsLoading(true);

    const requestBody = {
      ...data,
      villa_id: villaId,
      location_id: locationId
    };

    fetch('/villas/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage(
            'Thank you for your interest! Please allow 1-3 business days for an agent to contact you.'
          );
          response.json().then((newInquiry) => addInquiry(newInquiry));
          navigate('/locations');
        } else {
          response.json().then((errorData) => {
            if (errorData.errors) {
              setSuccessMessage('');
              // Set form-level errors
              Object.keys(errorData.errors).forEach((field) => {
                errors[field] = {
                  type: 'manual',
                  message: errorData.errors[field]
                };
              });
            } else {
              setSuccessMessage('');
              setErrors(['An error occurred. Please try again later.']);
            }
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrors(['An error occurred. Please try again later.']);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="inquire-form">
      <p>We're here to help! Fill out the form below and a villa specialist will be in touch with you shortly.</p>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <form className="inquire-form__form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Arrival Date:
          <input
            type="date"
            {...register('arrival', { required: 'Arrival date is required' })}
          />
          {errors.arrival && <span className="error">{errors.arrival.message}</span>}
        </label>

        {/* Rest of the form fields with validation */}
        
        <button className="primary" type="submit">
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>

        {errors.length > 0 && (
          <ul className="error-list">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default InquireForm;
