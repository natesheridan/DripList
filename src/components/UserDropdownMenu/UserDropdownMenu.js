import React from 'react';
import './UserDropdownMenu.css'
import LogoutButton from '../LogoutButton/LogoutButton'


const UserDropdownMenu = () => {
    return (
        <div className="user-dropdown-menu">
            <button>View Profile</button>
            <button>Edit Profile</button>
            <LogoutButton/>
        </div>
    )
}

export default UserDropdownMenu
