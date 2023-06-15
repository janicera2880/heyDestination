import React, { useState, useContext } from 'react';
import { UserAdminContext } from '../Contexts/UserAdminContext';

//Renders a login/logout button and popup, and handles user authentication.
const UserLoginLogout = () => {
    const { userAdmin, setUserAdmin } = useContext(UserAdminContext);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  
    const handleLogin = () => {
      //Redirects the user to the login page.
      window.location.href = "/login";
    };
  //Sets the showLogoutPopup state to true.
    const handleLogout = () => {
      setShowLogoutPopup(true);
    };
  // Executes a fetch request to log out the user. Once the request is successful, sets the userAdmin state to null.
    const confirmLogout = () => {
      fetch("/logout", {
        method: "DELETE"
      }).then(() => {
        setUserAdmin(null);
        setShowLogoutPopup(false);
      });
    };
  //Cancels the logout process by hiding the logout popup.
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
          <button onClick={handleLogin}>LOGIN</button>
        </div>
      );
    }
  };
  
export default UserLoginLogout