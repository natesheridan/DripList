import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar'
import Userbar from '../Userbar/Userbar'


const Header = () => {
// Header should recieve Userdata as a prop.
    return(
            <section className="header">
                <Navbar />
                <Userbar />
                {/* Inside of Userbar we should pass Userdata as a prop */}
            </section>
        )
}

export default Header;