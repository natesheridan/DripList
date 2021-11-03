import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.js';
import './Welcome.css';
import { getRandomRecipe, getLatestRecipes } from './../../APICalls'
import { useAuth0 } from '@auth0/auth0-react';


const Welcome = () => {
  const  userData = {}
  
  const [randomDrink, setRandomDrink] = React.useState([])
  const [drinks, setDrinks] = React.useState([])

  React.useEffect(() => {
    getRandomRecipe()
    .then(data => {
      setRandomDrink(data.drinks[0])
    })
    getLatestRecipes()
    .then(data => {
      setDrinks(data.drinks[0])
    })
  }, [])

  const { loginWithRedirect } = useAuth0()

  return (
      <section className="welcome-section">
        <div className="wbox log-in-section">
          <p> Welcome to </p>
          <p className="wbox-logo">
            <span className="material-icons indigo">water_drop</span>DripList
          </p>
          <p className="s"> Where you curate the drink list! </p>
          {true
            ?<>
              <p>Please sign in with the buttons below:</p>
              <div>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </>
            :<>
              <p>Hi [Firstname Lastname]!</p> {/* userdata.Name? */}
              <p>Visit your saved <a href="">DripList</a></p> {/* userdata.Name?  also replace a tags with NavLink after profile nav is setup*/} 
              <p>Find a new favorite below or search by ingredient above!</p> {/* userdata.Name? */}
            </>}
        </div>
        <div className="wbox featured-drink">
          <h3>Have you tried</h3>
          <div className="featured-recipe">
              {/* <RecipeCard/> */}
              <h3>{randomDrink?.strDrink}</h3>
              <img className="wbox-featured-img" alt={randomDrink?.strDrink} src={randomDrink?.strDrinkThumb}></img>
              <div className="wbox-featured-buttons">
                <button>See the Recipe</button>
              </div>
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
