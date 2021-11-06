import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../Welcome/Welcome.css';

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0()

    return (
        <button className="login-btn" onClick={(event) => {
          event.preventDefault()
          loginWithRedirect()}}>
            Sign In
        </button>
    )
}

export default LoginButton
