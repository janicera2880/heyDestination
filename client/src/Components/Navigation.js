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
            <NavLink to="/villas" activeClassName="active">
              LUXURY VILLAS
            </NavLink>
          </li>
          <li>
            <NavLink to="/activities" activeClassName="active">
             ACTIVITIES
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
              OUR SERVICES
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;