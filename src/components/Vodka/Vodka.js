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
  }, [])
  const vodkaRecipeCard = vodkaContainer.map(recipe => {
      return (
      <div>
        <Link to={`/recipe/${recipe.idDrink}`}>
          <RecipeCard
          name={recipe.strDrink}
          image={recipe.strDrinkThumb}
          tags={recipe.strTags}
            />
        </Link>
      </div>
    )
  })
  return (
    <>
    <div className="drinks-title">
    <h3 className="featured-drinks">Vodka Drinks</h3>
    </div>
    <div className="featured-recipe-container">
     {vodkaRecipeCard}
     </div>
     </>
  )
}



export default Vodka
