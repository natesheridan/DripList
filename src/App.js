import React, { Component } from 'react';
import Form from './Form.js';
import RecipeContainer from './RecipeContainer.js';
import './App.css';
import English from './flag2.png'
import { getRecipes } from './APICalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    getRecipes()
    .then(data => this.setState({recipes: data.drinks}))
  }

  render() {
    return(
      <main className='App'>
      <nav className="nav-bar">
        <p className="nav-bar__app-title">The Drip List</p>
        <Form />
        <div className="nav-bar__language-logo">
        <img className='nav-bar__english' src={English} alt="English language"/>
        </div>
      </nav>
      <RecipeContainer recipes={this.state.recipes}/>
      </main>
    )
  }
}

export default App;
