import React, { Component } from 'react';
import Form from './components/Form/Form.js';
import RecipeContainer from './components/RecipeCardContainer/RecipeCardContainer';
import './App.css';
import AmericaIcon from './assets/flag2.png'
import { getLatestRecipes } from './APICalls.js';
import Header from './components/Header/Header'
import Main from './components/Main/Main'

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      foundRecipes: []
    }
  }

  componentDidMount() {
    getLatestRecipes()
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
      <>
        <Header />
        <Main />
        <main className='App'>
        <nav className="nav-bar">
          <p className="nav-bar__app-title">The Drip List</p>
          <Form handleChange={this.handleChange} />
          <div className="nav-bar__language-logo">
          <img className='nav-bar__english' src={AmericaIcon} alt="English language"/>
          </div>
        </nav>
        {this.state.foundRecipes.length && <RecipeContainer  recipes={this.state.foundRecipes}/>, <RecipeContainer  recipes={this.state.recipes}/>}
        </main>
      </>
    )
  }
}

//conditional rendering logic isn't quite working but search functionality is

export default App;
