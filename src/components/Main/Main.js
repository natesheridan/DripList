import React from 'react';
import Vodka from '../Vodka/Vodka.js';
import Tequila from '../Tequila/Tequila.js';
import Rum from '../Rum/Rum.js';
import Welcome from '../Welcome/Welcome.js'
import RecipeDetails from '../RecipeDetails/RecipeDetails.js';
import Form from '../Form/Form.js';
import FeaturedRecipeContainer from '../FeaturedRecipeContainer/FeaturedRecipeContainer.js';
import Favorites from '../Favorites/Favorites';
import './Main.css';
import {
  getLatestRecipes,
  getVodkaRecipes,
  getRumRecipes,
  getTequilaRecipes
} from '../../APICalls.js';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Main = () => {
  const  { user, isAuthenticated } = useAuth0();
  const [allDrinks, setAllDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    getLatestRecipes()
    .then(data => {
      setAllDrinks(data.drinks)
    });
  }, []);

  const findRecipe = (searchTerm) => {
    setFilteredDrinks(allDrinks.filter(recipe => recipe.strDrink.includes(searchTerm)))
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value)
    findRecipe(searchValue)
    }

  const  displayRecipes= () => {
      if (searchValue.length > 0) {
        return (
          <>
            <Form handleChange={handleChange}/>
            <FeaturedRecipeContainer recipes={filteredDrinks}/>
          </>
        )
      } else {
        return (
          <>
            <Form handleChange={handleChange}/>
            <FeaturedRecipeContainer recipes={allDrinks}/>
          </>
        )
      }
    }

    return (
      <section className="main">
          <Route
            exact path="/"
            render= {() => {
              return (
                <>
                  <Welcome/>
                  {isAuthenticated && <FeaturedRecipeContainer recipes={allDrinks}/>}
                </>
              )
            }}
          />
          <Route exact path="/drinks"
          render={displayRecipes}
          />
          <Route
            exact path="/drinks/vodka"
            render= {() => <Vodka />}
          />
          <Route
          exact path="/drinks/tequila"
          render= {() => <Tequila />}
          />
          <Route
          exact path="/drinks/rum"
          render= {() => <Rum />}
          />
          <Route
          exact path="/driplist"
          render= {() => <Favorites />}
          />
          <Route
          exact path="/recipe/:id"
          render={({match}) => {
            return <RecipeDetails id={match.params.id} />
          }}
          />
        </section>
    )
}

export default Main
