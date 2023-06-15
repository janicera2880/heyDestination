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
          <li className="dropdown">
            <span className="dropdown-btn">THINGS TO DO</span>
            <div className="dropdown-content">
              <NavLink to="/activities/sports" activeClassName="active">
                Sports
              </NavLink>
              <NavLink to="/activities/lifestyle" activeClassName="active">
                Lifestyle
              </NavLink>
              <NavLink to="/activities/events" activeClassName="active">
                Events
              </NavLink>
              <NavLink to="/activities/unique" activeClassName="active">
                Unique
              </NavLink>
            </div>
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