import React, { useContext, useState } from "react";
import { UserAdminContext } from "../Contexts/UserAdminContext";
import { Link } from "react-router-dom";
import Thumbnail from "./Thumbnail";
import { useNavigate } from 'react-router-dom';

/*Renders the AdminPortal component that allows an authenticated admin user
to manage villas, locations, activities and incoming inquiries. The component
also provides a logout button that logs out the user and displays a confirmation popup before logging out.*/
const AdminPortal = () => {
  const { userAdmin, setUserAdmin } = useContext(UserAdminContext);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const navigate = useNavigate();
  //Handles the logout action by setting the state for showing the logout popup.
  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  //Executes a fetch request to logout the user, then clears their session and hides the logout popup.
  const confirmLogout = () => {

    

    fetch('/logout', {
      method: 'DELETE',
    }).then(() => {
      setUserAdmin(null);
      setShowLogoutPopup(false);
      navigate('/');
    });
  };

  //Cancels the logout by hiding the logout popup.
  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <div className="admin-portal">
      <div className="admin-portal__header">
      <h2>Welcome to hey-Destination Admin Portal!</h2>
      <div className="admin-portal__thumbnail">
        <Thumbnail userAdmin={userAdmin} />
      </div>
    </div>
    
      <div className="admin-portal__links">
        <Link to="/user_admin/:id/villas/inquieries" className="link-button">Incoming Inquiries</Link>
        <Link to="/user_admin/villas" className="link-button">Manage Villas</Link>
        <Link to="/locations" className="link-button">Manage Locations</Link>
        <Link to="/activities" className="link-button">Manage Activities</Link>
       
      </div>
      <div className="logout">
        <button onClick={handleLogout} className="some-button">Logout</button>
        {showLogoutPopup && (
          <div className="popup">
            <p>Are you sure you want to logout?</p>
            <button onClick={confirmLogout} className="some-button">Yes</button>
            <button onClick={cancelLogout} className="some-button">No</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;
