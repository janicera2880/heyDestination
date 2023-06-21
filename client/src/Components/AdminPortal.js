import React, { useContext, useState } from "react";
import { UserAdminContext } from "../Contexts/UserAdminContext";
import { Link } from "react-router-dom";
import Thumbnail from "./Thumbnail";


const AdminPortal = () => {
  const { userAdmin, setUserAdmin } = useContext(UserAdminContext);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

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

  return (
    <div className="admin-portal">
      <div className="admin-portal__header">
      <h2>Welcome to hey-Destination Admin Portal!</h2>
      <div className="admin-portal__thumbnail">
        <Thumbnail userAdmin={userAdmin} />
      </div>
    </div>
    
      <div className="admin-portal__links">
        <Link to="/incoming-inquiries" className="link-button">Incoming Inquiries</Link>
        <Link to="/user-admin-villas" className="link-button">Manage Villas</Link>
        <Link to="/manage-locations" className="link-button">Manage Locations</Link>
        <Link to="/manage-activities"className="link-button">Manage Activities</Link>
       
      </div>
      <div className="logout">
        <button onClick={handleLogout} className="logout-button">Logout</button>
        {showLogoutPopup && (
          <div className="popup">
            <p>Are you sure you want to logout?</p>
            <button onClick={confirmLogout} className="logout-button">Yes</button>
            <button onClick={cancelLogout} className="logout-button">No</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;
