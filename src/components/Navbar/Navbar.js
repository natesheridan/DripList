import React from 'react';
// import { NavLink } from 'react-router-dom';
// needs to have react-router installed via npm install before working
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="nav-logo"><span className="material-icons">water_drop</span>DripList</h2>
            <button>Test Button</button>
            <button>Test Button</button>
            <button>Test Button</button>
            <button>Test Button</button>
            {/* <NavLink to="/">Home</NavLink> */}
            {/* <NavLink to="/drinks">All Drinks</NavLink> */}
            {/* <NavLink to="/saved">Saved Drinks</NavLink> */}
            {/* <NavLink to="/profile">Profile</NavLink> */}
        </nav>
    )
}

export default Navbar;