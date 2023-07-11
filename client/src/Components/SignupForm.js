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
        profile_pic: null,
  });

 
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const { setUserAdmin } = useContext(UserAdminContext);
  const navigate = useNavigate();

 //A function that handles the form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting...");
    
    setIsLoading(true);

    const userData = new FormData();
    for (const key in formData) {
      if (key === 'profile_image') {
        userData.append(key, formData[key]);
      } else {
        userData.append(key, formData[key]);
      }
    }

    fetch('/signup', {
      method: 'POST',
      body: userData,
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          setFormData({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            admin: true,
            profile_pic: null,
          });
          setSelectedFileName(''); // Clear the selected file name
          response.json().then((userAdmin) => {
            setUserAdmin(userAdmin);
            setErrors([]);
            navigate('/');
          });
        } else {
          response.json().then((error) => setErrors(error.errors));
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Updated to store the File object
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
      <div className="profile-pic-input">
        <input
          type="file"
          name="profile_pic"
          accept="image/jpeg, image/png"
          onChange={handleInputChange}
        />
       <span>{selectedFileName || 'Choose a file'}</span> {/* Display the selected file name */}
      </div>
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

    
