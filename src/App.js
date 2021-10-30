import React, { Component } from 'react';
import Form from './Form.js';
import RecipeContainer from './RecipeContainer.js';
import './App.css';
import English from './flag2.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [
        { id: 1, name: 'Old Fashioned', ingredients: ["bourbon", "bitters", "orange zest"] },
        { id: 2, name: 'Gimlet', ingredients: ["gin", "lime juice"] },
        { id: 3, name: 'Dirty Martini', ingredients: ["gin", "vermouth", "olive juice"] }
      ]
    }
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
