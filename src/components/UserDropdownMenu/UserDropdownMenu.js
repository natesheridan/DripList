import React from 'react';
import {Link} from 'react-router-dom';
import './UserDropdownMenu.css'
import LogoutButton from '../LogoutButton/LogoutButton'


const UserDropdownMenu = () => {
    return (
        <div className="user-dropdown-menu">
            <button><Link to="/driplist">View Profile</Link></button>
            <button>Edit Profile</button>
            <LogoutButton/>
        </div>
    )
}

export default UserDropdownMenu
