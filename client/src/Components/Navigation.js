import React from "react";
import { NavLink} from "react-router-dom";


function Navigation() {
  

  return (
    <div className="navigation">
     
      <nav>
        <ul>
          
          <li>
            <NavLink to="/locations" activeClassName="active">
              DESTINATIONS
            </NavLink>
          </li>
          <li>
            <NavLink to="/activities" activeClassName="active">
             THINGS TO DO
            </NavLink>
          </li>
          <li>
            <NavLink to="/inquiries" activeClassName="active">
              INQUIRE
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" activeClassName="active">
              SEARCH
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="active">
              EMPLOYEE PORTAL
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;