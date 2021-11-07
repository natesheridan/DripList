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

  useEffect(() => {
    getRandomRecipe()
    .then(data => {
      setRandomDrink(data.drinks[0])
    })
  }, [])
  return (
      <section className="welcome-section">
        <div className="wbox log-in-section">
          <p> Welcome to DripList - Where you curate the drink list!</p>
          {!isAuthenticated
            ?<>
              <p>Sign in with Google to get started.</p>
              <div>
                <LoginButton/>
              </div>
            </>
            :<>
              <p>Hi {user.given_name}!</p>
              <p><a href="" className="user-driplist">Visit your saved DripList</a></p> 
        
            </>}
        </div>
        <div className="wbox featured-drink">
          <h3>Drip Listers love the {randomDrink?.strDrink}</h3>
              <img className="wbox-featured-img" alt={randomDrink?.strDrink} src={randomDrink?.strDrinkThumb}></img>
              <div className="wbox-featured-buttons">
                <button className="sneak-peak">See the Recipe</button>
              </div>
        </div>
      </section>
  )
}





export default Welcome

