import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {

  return(
    <>
    {!useAuth0().isLoading 
    ?<>
        <Header/>
        <Main/>
    </>
    :<>
        <LoadingScreen/>
    </>
    }
    </>
  )
}



export default App;
