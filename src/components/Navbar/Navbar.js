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
              <NavLink exact to="/drinks" activeStyle={{border: 'solid 3px #fff'}} className="nav-btn"> Featured </NavLink>
              <NavLink activeStyle={{border: 'solid 3px #fff'}} exact to="/drinks/vodka" className="nav-btn">Vodka</NavLink>
              <NavLink activeStyle={{border: 'solid 3px #fff'}} exact to="/drinks/tequila" className="nav-btn">Tequila</NavLink>
              <NavLink activeStyle={{border: 'solid 3px #fff'}} exact to="/drinks/rum" className="nav-btn">Rum</NavLink>
            </div> }
            {/* <NavLink to="/">Home</NavLink> */}
            {/* <NavLink to="/drinks">All Drinks</NavLink> */}
            {/* <NavLink to="/saved">Saved Drinks</NavLink> */}
            {/* <NavLink to="/profile">Profile</NavLink> */}
        </nav>
    )
}

export default Navbar;
