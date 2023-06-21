import React, { useContext } from "react";
import { UserAdminContext } from "../Contexts/UserAdminContext";
import { Link } from "react-router-dom";
import LoginSignupToggle from "./LoginSignupToggle";
import ReactMarkdown from "react-markdown";
import villaPicture from "./Images/travel.png";

//Renders the About Us page component that displays information about the luxury villa rental service.
const AboutUs = () => {
  const { userAdmin } = useContext(UserAdminContext);

  return (
    <div className="about-us">

        <img
        src={villaPicture}
        width="700"
        height="500"
        alt="villa"
        className="villa-pic" />
      <ReactMarkdown>## Discover Your Perfect Villa Retreat</ReactMarkdown>
      <ReactMarkdown>At **hey-Destination**, it's our goal to make luxury vacation planning as effortless as the escape itself.</ReactMarkdown>
      <p>Renting a villa is simple, and our expert villa specialists are available to guide you every step of the way.</p>
      <p>Our team of experienced travel experts is dedicated to providing *exceptional* service and ensuring that your stay in our villas is nothing short of *extraordinary*.</p>
      <ReactMarkdown>### What Makes A Luxury Villa Vacation</ReactMarkdown> 
      <ReactMarkdown>- **Features & Amenities**
        We go above and beyond entertainment and surround sound. It's about private gyms, spas, children’s spaces, al fresco dining, private gyms, and beyond. Nothing is too big or too extravagant for our guests.</ReactMarkdown> 
        <ReactMarkdown>- **Staff & Services**
        We offer and fully guarantee that our Concierge Services will take the guesswork out of your getaway. Additionally, many of our villas feature private chefs, butlers, gardeners, and more to elevate your experience.</ReactMarkdown> 
        <ReactMarkdown>- **Superior Design & Maintenance**
        We know that overall aesthetics matter, but it goes beyond that. All our villas feature impeccable landscaping and views, outdoor spaces, interior design and furnishings, and more. We also ensure that each villa is personally inspected and vetted, and every villa is maintained from top to bottom.</ReactMarkdown> 
        <ReactMarkdown>### We Are More Than Just A Villa Rental</ReactMarkdown>
        <ReactMarkdown>At **hey-Destination**, every villa reservation includes our personal villa Concierge Service. Your *Concierge* is committed to providing around-the-clock personalized services to ensure every last detail of your getaway – no matter how large or small – is provided.</ReactMarkdown>
<ReactMarkdown>Explore the local attractions, national parks, best beaches, and more. It's our pleasure to provide you with everything you need to craft a truly unique experience designed around your wants and wishes. Let us make restaurant reservations, and allow us to handle tricky last-minute itinerary changes. Your villa Concierge takes care of all the details from start to finish making certain that your escape is one-of-a-kind.</ReactMarkdown>

      {!userAdmin ? (
        <div className="login-section">
          <h3>Employee Login Here</h3>
          <LoginSignupToggle />
        </div>
      ) : (
        <div className="admin-link">
          <h4>Logged in as {userAdmin.first_name} {userAdmin.last_name}</h4>
          <Link to="/user_admin">Go to Admin Portal</Link>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
