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
        confirmation_password: '',
        admin: true,
        profile_pic: null,
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


  //Updates the profile picture in form data state with the selected file.
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profile_pic: file,
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
          value={formData.last_name}
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
          name="confirmation_password"
          placeholder="Must match password..."
          value={formData.confirmation_password}
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
          type="file"
          name="profile_pic"
          onChange={handleFileChange}
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

    
