import React from 'react';
import {Link} from 'react-router-dom';
import './UserDropdownMenu.css'
import LogoutButton from '../LogoutButton/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react';
import { clearUserStorage } from './../../util'


const UserDropdownMenu = () => {
    const {user} = useAuth0()
    return (
        <div className="user-dropdown-menu">
            <Link to="/driplist" className="user-btn test">View DripList</Link>
            <Link onClick={() => {clearUserStorage(user.sub)}} className="user-btn test">Clear DripList</Link>
            <LogoutButton/>
        </div>
    )
}

export default UserDropdownMenu
