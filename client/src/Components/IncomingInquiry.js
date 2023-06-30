import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAdminContext } from "../Contexts/UserAdminContext";

function IncomingInquiry() {
  const { userAdmin } = useContext(UserAdminContext);

  let incomingQuery;
  if (userAdmin && userAdmin.inquiries) {
    incomingQuery = userAdmin.inquiries.map((inquiry) => (
      <div className="inquiry-box" key={inquiry.id}>
        <h4>From : {inquiry.full_name}</h4>
        <h4>{inquiry.email}</h4>
        <h4>{inquiry.phone}</h4>
        <p>{inquiry.message}</p>
        <h4>good for {inquiry.guests} guests</h4>
        <h4>Arrival Date: {new Date(inquiry.arrival).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h4>
        <h4>Departure Date: {new Date(inquiry.departure).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h4>
        
        <br />
        <br />
      </div>
    ));
  } else {
    incomingQuery = <p>No inquiries at this moment!</p>;
  }

  return (
    <div className="inquiry-container">
      <h2>
        {userAdmin ? `Hello ${userAdmin.first_name}, check here for incoming inquiries!` : 'Loading...'}
      </h2>
      <br />
      <br />
      <div className="inquiry-wrapper">
      {incomingQuery}
      </div>
      <br />
      {userAdmin && (
        <Link className="some-button" to="/user_admin">Go Back To Admin Portal</Link>
      )}
      <br />
    </div>
  );
}

export default IncomingInquiry;

