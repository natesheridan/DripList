import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.js';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="log-in-section">
        <p> Log In Section - Coming Soon </p>
      </div>
      <div className="featured-drink">
        <p> Featured Drink - Coming Soon </p>
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
