import React, { useContext } from "react";
import { UserAdminContext } from "../Contexts/UserAdminContext";

function Thumbnail() {
  // Get user from context
  const { userAdmin } = useContext(UserAdminContext);

  // Define onClick event handler
  const handleClick = () => {
    console.log(`Clicked on thumbnail for user ${userAdmin.first_name}`);
  };

  return (
    // Render a thumbnail with user's profile photo
    <div className="thumbnail">
      {userAdmin.profilePic && (
        <img
          src={userAdmin.profilePic.url}
          alt="Profile"
          onClick={handleClick}
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      )}
      <p>Welcome, {userAdmin.first_name}{userAdmin.last_name}</p>
      <p>{userAdmin.email} | {userAdmin.phone}</p>
    </div>
  );
}

export default Thumbnail;
