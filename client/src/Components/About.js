import React, { useContext } from "react";
import { UserAdminContext } from "../Contexts/UserAdminContext";
import { Link } from "react-router-dom";
import LoginSignupToggle from "./LoginSignupToggle";

const AboutUs = () => {
  const { userAdmin } = useContext(UserAdminContext);

  return (
    <div className="about-us">
      <h2>Your Passport To Luxury Villas</h2>
      <p>
        Welcome to Luxury Villa Rentals! We offer a wide selection of luxurious villas in beautiful destinations around the world. Whether you're planning a romantic getaway, a family vacation, or a special event, we have the perfect villa to suit your needs.
      </p>
      <p>
        Our team of experienced travel experts is dedicated to providing exceptional service and ensuring that your stay in our villas is nothing short of extraordinary. With stunning locations, exquisite amenities, and personalized concierge services, we strive to create unforgettable experiences for our guests.
      </p>
      <p>
        Browse our villa collection, explore the breathtaking destinations, and start planning your dream vacation today. If you have any questions or need assistance, feel free to contact our friendly customer support team. We can't wait to help you create memories that will last a lifetime.
      </p>
      
      {!userAdmin ? (
        <div className="login-section">
          <h3>Ready to book your villa?</h3>
          <p>Sign up or log in to access exclusive offers and manage your bookings.</p>
          <LoginSignupToggle />
        </div>
      ) : (
        <div className="admin-link">
          <p>Logged in as {userAdmin.first_name} {userAdmin.last_name}</p>
          <Link to="/user_admin">Go to Admin Portal</Link>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
