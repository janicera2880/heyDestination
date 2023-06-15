import React, { useState, useContext } from 'react';
import { UserAdminContext } from '../Contexts/UserAdminContext';
import AdminLogin  from './AdminLogin';
import SignupForm from './SignupForm';

const UserLoginLogout = () => {
  const { userAdmin, setUserAdmin } = useContext(UserAdminContext);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  const handleSignup = () => {
    setShowLoginForm(false);
  };

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
      <div>
        {showLoginForm ? <AdminLogin /> : <SignupForm />}
        <button onClick={handleLogin}>Employee Login</button>
        <button onClick={handleSignup}>Employee Signup</button>
      </div>
    );
  }
};

export default UserLoginLogout;
