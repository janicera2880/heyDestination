import React from "react";
import { NavLink} from "react-router-dom";

/*The component renders a navigation bar with multiple links. 
Each link is wrapped in a NavLink component, 
which is a special type of link component provided by React Router. */
function Navigation() {
  
//NavLink component accepts a to prop to specify the destination URL
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
             THINGS TO DO
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;