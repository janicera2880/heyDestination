import React, { useState, useContext } from 'react';
import { UserAdminContext } from '../Contexts/UserAdminContext';
import AdminLogin from './AdminLogin';
import SignupForm from './SignupForm';

/*A function component that toggles between a login and signup form,
 and allows a logged in user to logout. Uses React's state and context hooks to manage state
 form and a signup button or a signup form and a login button. Also renders a logout button if a user is logged in. */
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
      <div className='logout'>
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
