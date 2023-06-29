import React from "react";
import { NavLink} from "react-router-dom";


function Navigation() {
  

  return (
    <div className="navigation">
     
      <nav>
        <ul>

        <li>
            <NavLink exact to="/" activeClassName="active">
              ABOUT US
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/locations" activeClassName="active">
              TOP DESTINATIONS 
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
            <NavLink to="/villas/search" activeClassName="active">
              SEARCH
            </NavLink>
          </li>
        
         
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;