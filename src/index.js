import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID
const secret = process.env.REACT_APP_AUTH0_SECRET_ID

const options = {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  form: {
    grant_type: 'client_credentials',
    client_id: clientID,
    client_secret: secret,
    audience: 'https://' + domain + '/api/v2/'
  }
};

const getUserData = () => {
  return fetch('https://dev-ziedxe-0.us.auth0.com/oauth/token' ,options)
  .then(response => response.json())
  .then(data => console.log(data))
}


ReactDOM.render(

  <Router>
    <Auth0ProviderWithHistory>
        <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
