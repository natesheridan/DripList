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
      recipes: [],
      foundRecipes: []
    }
  }

  componentDidMount() {
    getRecipes()
    .then(data => this.setState({recipes: data.drinks}))
    console.log(this.state.recipes)
  }

  findRecipe(searchTerm) {
    console.log(this.state)
    this.setState({ foundRecipes: this.state.recipes.filter(recipe => recipe.strDrink.includes(searchTerm))})
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    this.findRecipe(this.state.searchTerm)
  }

  displayRecipes() {
    if (this.state.foundRecipes.length > 0) {
      return (
        <RecipeContainer recipes={this.state.foundRecipes}/>
      )
    } else {
      return (
        <RecipeContainer recipes={this.state.recipes}/>
      )
    }
  }

  render() {
    return(
      <main className='App'>
      <nav className="nav-bar">
        <p className="nav-bar__app-title">The Drip List</p>
        <Form handleChange={this.handleChange} />
        <div className="nav-bar__language-logo">
        <img className='nav-bar__english' src={English} alt="English language"/>
        </div>
      </nav>
      {this.state.foundRecipes.length && <RecipeContainer  recipes={this.state.foundRecipes}/>, <RecipeContainer  recipes={this.state.recipes}/>}
      </main>
    )
  }
}

//conditional rendering logic isn't quite working but search functionality is

export default App;
