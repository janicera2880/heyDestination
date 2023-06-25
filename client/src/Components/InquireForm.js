import React, { useContext, useState } from 'react';
import { InquiriesContext } from '../Contexts/InquiriesContext';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const InquireForm = () => {
  const { addInquiry } = useContext(InquiriesContext);
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

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
              setFormErrors(Object.values(errorData.errors));
            } else {
              setSuccessMessage('');
              setFormErrors(['An error occurred. Please try again later.']);
            }
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setSuccessMessage('');
        setFormErrors(['An error occurred. Please try again later.']);
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

        <label>
          Departure Date:
          <input
            type="date"
            {...register('departure', { required: 'Departure date is required' })}
          />
          {errors.departure && <span className="error">{errors.departure.message}</span>}
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            {...register('guests', { required: 'Number of guests is required' })}
          />
          {errors.guests && <span className="error">{errors.guests.message}</span>}
        </label>

        <label>
          Full Name:
          <input
            type="text"
            {...register('full_name', { required: 'Full name is required' })}
          />
          {errors.full_name && <span className="error">{errors.full_name.message}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>

        <label>
          Phone Number:
          <input
            type="text"
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </label>
      <label>
          Message:
          <textarea
            type="textarea"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <span className="error">{errors.message.message}</span>}
        </label>
        {formErrors.length > 0 && (
          <ul className="error-list">
            {formErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <button className="primary" type="submit">
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default InquireForm;
