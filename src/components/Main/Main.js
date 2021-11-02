import React from 'react';
import Welcome from '../Welcome/Welcome.js'
import RecipeDetails from '../RecipeDetails/RecipeDetails.js';
import './Main.css';
import { Route } from 'react-router-dom';

const Main = () => {

  const [allDrinks, setAllDrinks] = React.useState(null)


    return (
      <section className="main">
          <Route
            exact path="/"
            render= {() => {
          return (<Welcome/>)
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
