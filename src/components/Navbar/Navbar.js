import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// needs to have react-router installed via npm install before working
import './Navbar.css';

const Navbar = () => {
  const  { user, isAuthenticated } = useAuth0();

    return (
        <nav className="navbar">
            <h2><Link to="/"><span className="material-icons">water_drop</span>DripList</Link></h2>
            {isAuthenticated &&
            <div className="nav-btns">
              <NavLink to="/drinks">
                <button className="nav-btn">All Drinks</button>
              </NavLink>
              <NavLink to="/drinks/vodka">
                <button className="nav-btn">Vodka</button>
              </NavLink>
              <NavLink to="/drinks/tequila">
                <button className="nav-btn">Tequila</button>
              </NavLink>
              <NavLink to="/drinks/rum">
                <button className="nav-btn">Rum</button>
              </NavLink>
            </div> }
            {/* <NavLink to="/">Home</NavLink> */}
            {/* <NavLink to="/drinks">All Drinks</NavLink> */}
            {/* <NavLink to="/saved">Saved Drinks</NavLink> */}
            {/* <NavLink to="/profile">Profile</NavLink> */}
        </nav>
    )
}

export default Navbar;
