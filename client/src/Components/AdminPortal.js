import React, { useContext } from "react";
import { UserAdminContext } from "../Contexts/UserAdminContext";
import { Link } from "react-router-dom";
import Thumbnail from "./Thumbnail";

const AdminPortal = () => {
  const { userAdmin } = useContext(UserAdminContext);

  return (
    <div className="admin-portal">
      
      <Thumbnail userAdmin={userAdmin} />
      <div className="links">
        <h2>Welcome to hey-Destination Admin Portal!</h2>

        <p>This section allows you to handle incoming inquiries from potential clients. You can review and respond to inquiries promptly, ensuring excellent customer service.</p>
        <Link to="/incoming-inquiries">Incoming Inquiries</Link>

        <p>Click on this option to easily create and add new villa listings to our database. You can provide detailed information or update about each villa. This empowers you to showcase the best accommodation options to our valued customers.</p>
        <Link to="/user-admin-villas">Manage Villas</Link>

        <p>Take control of our travel destinations by managing locations. You can add new locations, update existing ones, and ensure accurate information is available to clients. By maintaining an up-to-date and comprehensive list of locations, you enhance the overall travel experience for our customers.</p>
        <Link to="/manage-locations">Manage Locations</Link>

        <p>This feature enables you to curate and organize a wide range of activities and experiences for our clients. You can add new activities, specify details such as duration, pricing, and availability, and make necessary updates as required. By offering diverse and exciting activities, we enhance the overall itinerary and ensure memorable travel experiences for our customers.</p>
        <Link to="/manage-activities">Manage Activities</Link>
      </div>
    </div>
  );
};
export default AdminPortal;
