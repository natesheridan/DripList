import React from 'react';
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import './Favorites.css';
import {  getSingleRecipe } from '../../APICalls.js';
import { useAuth0 } from '@auth0/auth0-react';
import { render } from '@testing-library/react';

const Favorites = () => {
  const  { user, isAuthenticated, isLoading } = useAuth0();
  const [favorites , setFavorites] = useState([]);
  const [cardElements, setCardElements] = useState([])
  
  useEffect(()=> {
    if(!user) return;
    console.log(user);
    const userFavoritesIDs = localStorage.getItem(user.sub)?.match(/.{1,6}/g)
    if (!userFavoritesIDs) {return}
    userFavoritesIDs.forEach((recipeID) => {
      getSingleRecipe(recipeID)
      .then(data => {
        setFavorites([...favorites, data.drinks[0]])
      })
    })
    .then(setCardElements(generateCards(favorites)))
  }, [])
  const generateCards = (recipes) => {
        
    let cards = recipes.map((recipe) =>{
      return (
        <Link to={`/drinks/${recipe.idDrink}`}>
            <RecipeCard
              key={recipe.strDrink}
              name={recipe.strDrink}
              image={recipe.strDrinkThumb}
              tags={recipe.strTags}
              />
          </Link>
      )
    })
    return cards;
  }

  return (<div className="favorites"> {cardElements} </div>)

}




export default Favorites



// const Rum = () => {
//   const [rumContainer, setRumContainer] = useState([])
//   useEffect(() => {
//     getRumRecipes()
//     .then(data => data.drinks)
//     .then(drinks => setRumContainer(drinks))
//   }, [])
//   const rumRecipeCard = rumContainer.map(recipe => {
//     return (
//       <Link to={`/drinks/${recipe.idDrink}`}>
//         <RecipeCard
//           name={recipe.strDrink}
//           image={recipe.strDrinkThumb}
//           tags={recipe.strTags}
//           />
//       </Link>
//   )
//   })
//     return <div className="rum-recipe-container"> {rumRecipeCard} </div>
    