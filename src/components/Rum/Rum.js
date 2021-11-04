import React from 'react';
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import './Rum.css';
import {
  getRumRecipes
} from '../../APICalls.js';

const Rum = () => {
  const [rumContainer, setRumContainer] = useState([])
  useEffect(() => {
    getRumRecipes()
    .then(data => data.drinks)
    .then(drinks => setRumContainer(drinks))
  }, [])
  const rumRecipeCard = rumContainer.map(recipe => {
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
    return <div className="rum-recipe-container"> {rumRecipeCard} </div>
}



export default Rum
