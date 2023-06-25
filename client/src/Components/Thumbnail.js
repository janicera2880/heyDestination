import React, { useContext } from "react";
import { UserAdminContext } from "../Contexts/UserAdminContext";

const Thumbnail = () => {
  const { userAdmin } = useContext(UserAdminContext);
  return (
    <div className="thumbnail">
      {userAdmin && userAdmin.profile_image && (
        <img
          src={userAdmin.profile_image}
          alt="Profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
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
