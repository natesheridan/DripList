import React from 'react';
import {Link} from 'react-router-dom';
import './UserDropdownMenu.css'
import LogoutButton from '../LogoutButton/LogoutButton'


const UserDropdownMenu = () => {
    return (
        <div className="user-dropdown-menu">
            <button className="user-btn"><Link to="/driplist" className="test">View Profile</Link></button>
            <button className="user-btn">Edit Profile</button>
            <LogoutButton/>
        </div>
    )
}

export default UserDropdownMenu
