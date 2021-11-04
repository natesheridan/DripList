import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar'
import UserNav from '../UserNav/UserNav'


const Header = () => {
// Header should recieve Userdata as a prop.
    return(
            <section className="header">
                <Navbar />
                <UserNav />
                {/* Inside of Userbar we should pass Userdata as a prop */}
            </section>
        )
}

export default Header;