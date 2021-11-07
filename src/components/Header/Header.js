import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar'
import UserNav from '../UserNav/UserNav'
import { useAuth0 } from '@auth0/auth0-react';


const Header = () => {
  const  { user, isAuthenticated } = useAuth0();
// Header should recieve Userdata as a prop.
    return(
            <section className="header">
                <Navbar />
                {isAuthenticated && <UserNav />}
                {/* Inside of Userbar we should pass Userdata as a prop */}
            </section>
        )
}

export default Header;
