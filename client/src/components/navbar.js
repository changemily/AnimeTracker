/*
In the navbar.js component, we will create a navigation bar that will link us to the required components using the following code.
 */

import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-home" to="LoginScreen/">
       <img style={{"width" : 5 + '%'}} src={require('../icons/homeIcon.png')}></img>
       </NavLink>

       <NavLink className="navbar-tracker" to="TrackerScreen/">
       <img style={{"width" : 10 + '%'}} src={require('../icons/trackerIcon.png')}></img>
       </NavLink>

       <NavLink className="navbar-watch" to="/WatchListScreen">
       <img style={{"width" : 20 + '%'}} src={require('../icons/watchListIcon.png')}></img>
       </NavLink>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/CreateTrackerRecordScreen">
               Create Record
             </NavLink>
           </li>
         </ul>
         <button>Sign Out</button>
       </div>
     </nav>
   </div>
 );
}