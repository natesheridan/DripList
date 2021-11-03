import React, { Component } from 'react';
import Form from './components/Form/Form.js';
import RecipeContainer from './components/FeaturedRecipeContainer/FeaturedRecipeContainer.js';
import './App.css';
import AmericaIcon from './assets/flag2.png'
import { getLatestRecipes } from './APICalls.js';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      foundRecipes: []
    }
  }

  render() {
    return(
      <>
        <Header/>
        <Main/>
      </>
    )
  }
}

//conditional rendering logic isn't quite working but search functionality is

export default App;
