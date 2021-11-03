import React from 'react';
import Vodka from '../Vodka/Vodka.js';
import Tequila from '../Tequila/Tequila.js';
import Rum from '../Rum/Rum.js';
import Welcome from '../Welcome/Welcome.js'
import RecipeDetails from '../RecipeDetails/RecipeDetails.js';
import Form from '../Form/Form.js';
import FeaturedRecipeContainer from '../FeaturedRecipeContainer/FeaturedRecipeContainer.js';
import './Main.css';
import {
  getLatestRecipes,
  getVodkaRecipes,
  getRumRecipes,
  getTequilaRecipes
} from '../../APICalls.js';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Main = () => {

  const [allDrinks, setAllDrinks] = useState([])
  const [filteredDrinks, setFilteredDrinks] = useState([])
  const [searchValue, setSearchValue] = useState('')

  React.useEffect(() => {
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
          return (<Welcome/>)
            }}
          />
          <Route exact path="/drinks" render={displayRecipes}/>
          <Route
          exact path="/drinks/:id"
          render={({match}) => {
            return <RecipeDetails id={match.params.id} />
          }}
        />
        <Route
          exact path="/drinks/vodka"
          render= {() => {
        return (<Vodka />)
          }}
          />
        <Route
          exact path="/drinks/tequila"
          render= {() => {
        return (<Tequila />)
          }}
          />
        <Route
          exact path="/drinks/rum"
          render= {() => {
        return (<Rum />)
          }}
        />
        </section>

    )
}

export default Main


//             + DrinkCardContainer.js //////////
//                 Array to pass in as data is latest drinks from /latest API endpoint
//                 DrinkCardContainer is ideally a component that can scale to any size
//                 it should be able to wrap items based on viewport width and also
//     -/drinks
//         /Drinks can be used to display a full page of drinks
//         this is where users are able to search all drinks and maybe filter drink recipes?
//             Two components to render when /drinks router endpoint is it
//                 + Search.js ////////////////////
//                     Search ideally can search at the bare minimum but then also can be used to
//                     filter data as well
//                 + DrinkCardContainer.js ////////
//                     Array to pass in as data is all drinks from /search ?q="" API endpoint
//                     Make sure it stops after 25-50 drinks - or somehow renders in as you scroll?
//                     DrinkCardContainer is ideally a component that can scale to any size
//                     it should be able to wrap items based on viewport width and also
//     -/saved
//         /Saved is shown as a button in Navbar only when User.IsAuth=true
//              if !user.isAuth display login button?
//         otherwise this is the same the /drinks route but takes in data from ?user.Favorites?
//         ^^^^^^^^^^^^^^^^^
//         THIS IS WHERE WE WILL NEED EXPRESS SERVER TO STORE OUR USERS FAVORITES

//     -/profile
//         /Profile is also only shown as a button when user is auth'd.
//         This route rendered can just be a place to view/edit profile settings
//             One component:
//             Profile.js?
