import React from 'react';
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import './Vodka.css';
import {
  getVodkaRecipes
} from '../../APICalls.js';

const Vodka = () => {
  const [vodkaContainer, setVodkaContainer] = useState([])
  useEffect(() => {
    getVodkaRecipes()
    .then(data => data.drinks)
    .then(drinks => setVodkaContainer(drinks))
  })
  const vodkaRecipeCard = vodkaContainer.map(recipe => {
      return (
      <div>
        <Link to={`/drinks/vodka`}>
          <RecipeCard
            name={recipe.strDrink}
            ingredients1={recipe.strIngredient1}
            ingredients2={recipe.strIngredient2}
            ingredients3={recipe.strIngredient3}
            ingredients4={recipe.strIngredient4}
            ingredients5={recipe.strIngredient5}
            ingredients6={recipe.strIngredient6}
            ingredients7={recipe.strIngredient7}
            ingredients8={recipe.strIngredient8}
            ingredients9={recipe.strIngredient9}
            ingredients10={recipe.strIngredient10}
            ingredients11={recipe.strIngredient11}
            ingredients12={recipe.strIngredient12}
            ingredients13={recipe.strIngredient13}
            ingredients14={recipe.strIngredient14}
            ingredients15={recipe.strIngredient15}
            instructions={recipe.strInstructions}
            />
        </Link>
      </div>
    )
  })
    return <div className="vodka-recipe-container"> {vodkaRecipeCard} </div>
}



export default Vodka
