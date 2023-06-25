import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAdminContext } from '../Contexts/UserAdminContext';


//A functional component that displays a form for user signup
const SignupForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        admin: true,
        profile_image: '',
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUserAdmin } = useContext(UserAdminContext);
  const navigate = useNavigate();

 //A function that handles the form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting...");
    
    setIsLoading(true);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          setFormData(false);
          r.json().then((userAdmin) => {
            setUserAdmin(userAdmin);
            setErrors([]);
            navigate("/");
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }
//Updates the form data state with the new input value.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="signup-form">
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="Must be between 8 - 45 characters..."
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Confirm Password:
        <input
          type="password"
          name="password_confirmation"
          placeholder="Must match password..."
          value={formData.password_confirmation}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Admin:
        <input
          type="checkbox"
          name="admin"
          checked={formData.admin}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Profile Picture:
        <input
          type="text"
          name="profile_image"
          value={formData.profile_image}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button className="primary" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>

        {errors.map((err, index) => (
          <li style={{ color: "black" }} key={index}>
            {err}
          </li>
        ))}
    </form>
    </div>
  );
};

export default SignupForm;

    
