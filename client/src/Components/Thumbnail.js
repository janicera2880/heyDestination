import React, { useContext } from "react";
import { UserAdminContext } from "../Contexts/UserAdminContext";

const Thumbnail = () => {
  const { userAdmin } = useContext(UserAdminContext);
//console.log("profile_pic", userAdmin.profile_pic)
  //conditionally renders an img element if userAdmin exists and has profile image
  return (
    <div className="thumbnail">
      {userAdmin && userAdmin.profile_pic && (
        <img
          src={userAdmin.profile_pic}
          className="thumbnail-image"
          alt="Profile"
        />
      )}
      {userAdmin && (
        <h3>
          Hello, {userAdmin.first_name} {userAdmin.last_name}
        </h3>
      )}
    </div>
  );
};

export default Thumbnail;

