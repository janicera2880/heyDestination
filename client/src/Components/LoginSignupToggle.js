import React, { useState, useContext } from 'react';
import { UserAdminContext } from '../Contexts/UserAdminContext';
import AdminLogin from './AdminLogin';
import SignupForm from './SignupForm';

const LoginSignupToggle = () => {
  const { userAdmin, setUserAdmin } = useContext(UserAdminContext);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [toggleForms, setToggleForms] = useState(true);

  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  const confirmLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => {
      setUserAdmin(null);
      setShowLogoutPopup(false);
    });
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  if (userAdmin) {
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
        {showLogoutPopup && (
          <div className="popup">
            <p>Are you sure you want to logout?</p>
            <button onClick={confirmLogout}>Yes</button>
            <button onClick={cancelLogout}>No</button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="login-portal">
        {toggleForms ? (
          <>
            <AdminLogin />
            <p>
              Don't have an account? &nbsp;
              <button onClick={() => setToggleForms(false)}>Signup Here</button>
            </p>
          </>
        ) : (
          <>
            <SignupForm />
            <p>
              Already have an account? &nbsp;
              <button onClick={() => setToggleForms(true)}>Click to Login</button>
            </p>
          </>
        )}
      </div>
    );
  }
};

export default LoginSignupToggle;
