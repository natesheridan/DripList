import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  
  <Router>
    <Auth0ProviderWithHistory>
        <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
