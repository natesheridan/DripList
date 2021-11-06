import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// needs to have react-router installed via npm install before working
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="nav-logo"><Link to="/"><span className="material-icons">water_drop</span>DripList</Link></h2>
            <NavLink to="/drinks">
              <button>All Drinks</button>
            </NavLink>
            <NavLink to="/drinks/vodka">
              <button>Vodka</button>
            </NavLink>
            <NavLink to="/drinks/tequila">
              <button>Tequila</button>
            </NavLink>
            <NavLink to="/drinks/rum">
              <button>Rum</button>
            </NavLink>
            {/* <NavLink to="/">Home</NavLink> */}
            {/* <NavLink to="/drinks">All Drinks</NavLink> */}
            {/* <NavLink to="/saved">Saved Drinks</NavLink> */}
            {/* <NavLink to="/profile">Profile</NavLink> */}
        </nav>
    )
}

export default Navbar;
