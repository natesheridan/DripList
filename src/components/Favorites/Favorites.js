import React from 'react';
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import './Favorites.css';
import { getUserStorage } from '../../util.js';
import { useAuth0 } from '@auth0/auth0-react';
import { render } from '@testing-library/react';

const Favorites = ({recipes}) => {
  const {user} = useAuth0()
  const recipeCard = recipes?.map(recipe => {
    return (
      <Link to={`/drinks/${recipe.idDrink}`}>
        <RecipeCard
          name={recipe.strDrink}
          image={recipe.strDrinkThumb}
          tags={recipe.strTags}
          />
      </Link>
    )
  })
  return <div className="featured-recipe-container"> {recipeCard} </div>
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
    