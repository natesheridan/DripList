import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRumRecipes } from '../../APICalls.js';

const Rum = () => {
  const [rumContainer, setRumContainer] = useState([])

  useEffect(() => {
    getRumRecipes()
    .then(data => data.drinks)
    .then(drinks => setRumContainer(drinks))
  }, [])

  const rumRecipeCard = rumContainer.map(recipe => {
    return (
      <Link to={`/recipe/${recipe.idDrink}`}>
        <RecipeCard
          name={recipe.strDrink}
          image={recipe.strDrinkThumb}
          tags={recipe.strTags}
          />
      </Link>
  )
  })
  return (
    <>
    <div className="drinks-title">
    <h3 className="featured-drinks">Rum Drinks</h3>
    </div>
    <div className="featured-recipe-container">
     {rumRecipeCard}
     </div>
     </>
  )
  }



export default Rum
