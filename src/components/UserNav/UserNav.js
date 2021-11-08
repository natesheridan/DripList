import React from 'react';

import UserDropdownMenu from '../UserDropdownMenu/UserDropdownMenu'
import './UserNav.css';
import { useAuth0 } from '@auth0/auth0-react';

const UserNav = () => {
    const { user, isAuthenticated } = useAuth0()
    const [isActive, setIsActive] = React.useState(null)
    const onClick = () => setIsActive(!isActive)

    return (
        <div className="userNav">
            <div className="userInfoNav" onClick={onClick}>
                <img src={user?.picture}></img>
                <p>
                    {user?.name}{isActive?<span className="down-arrow material-icons">expand_less</span>:<span className="down-arrow material-icons">expand_more</span>}
                </p>
            </div>
            {isActive && <UserDropdownMenu/>}
        </div>
    )
}

export default UserNav