import React from 'react';
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.js';
import './Welcome.css';
import { getRandomRecipe, getLatestRecipes } from './../../APICalls'
import LoginButton from '../LoginButton/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';


const Welcome = () => {
  const  { user, isAuthenticated } = useAuth0();
  const [randomDrink, setRandomDrink] = React.useState([])
  const [drinks, setDrinks] = React.useState([])

  useEffect(() => {
    getRandomRecipe()
    .then(data => {
      setRandomDrink(data.drinks[0])
    })
    getLatestRecipes()
    .then(data => {
      setDrinks(data.drinks[0])
    })
  }, [])
  console.log(useAuth0())
  return (
      <section className="welcome-section">
        <div className="wbox log-in-section">
          <p> Welcome to DripList - Where you curate the drink list!</p>
          {/*<p className="wbox-logo">
            <span className="material-icons indigo">water_drop</span>DripList
          </p>
          <p className="s"> Where you curate the drink list! </p>*/}
          {!isAuthenticated
            ?<>
              <p>Sign in with Google to get started.</p>
              <div>
                <LoginButton/>
              </div>
            </>
            :<>
              <p>Hi {user.given_name}!</p> {/* userdata.Name? */}
              <p><a href="" className="user-driplist">Visit your saved DripList</a></p> {/* userdata.Name?  also replace a tags with NavLink after profile nav is setup*/}
               {/* userdata.Name? */}
            </>}
        </div>
        <div className="wbox featured-drink">
          <h3>Drip Listers love the {randomDrink?.strDrink}</h3>
              {/* <RecipeCard/> */}
              <img className="wbox-featured-img" alt={randomDrink?.strDrink} src={randomDrink?.strDrinkThumb}></img>
              <div className="wbox-featured-buttons">
                <button className="sneak-peak">See the Recipe</button>
              </div>
        </div>
      </section>
  )
}





export default Welcome

// Put Router URL with path corresponding to each URL endpoint we have
// /HOME /DRINKS /SAVED /PROFILE
//     -/home
//         Home will be used to display the follwing components:
//             + Welcome.js /////////////////////
//                 Welcome is a two panel display that consists of:
//                      +WelcomeDiv that is based off of the user.isAuthenticated
//                         (!isAuth)
//                             Login Button
//                             Description of Website
//                             Etc?
//                         (isAuth)
//                             Welcome User!
//                             Quick navigation to users most clicked drink?
//                             etc
//                      +FeaturedDrinkdiv
//                         This can just be a random drink
