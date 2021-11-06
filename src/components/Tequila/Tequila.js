import React from 'react';
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import './Tequila.css';
import {
  getTequilaRecipes
} from '../../APICalls.js';

const Tequila = () => {
  const [tequilaContainer, setTequilaContainer] = useState([])
  useEffect(() => {
    getTequilaRecipes()
    .then(data => data.drinks)
    .then(drinks => setTequilaContainer(drinks))
  }, [])
  const tequilaRecipeCard = tequilaContainer.map(recipe => {
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
    <h3 className="featured-drinks">Tequila Drinks</h3>
    </div>
    <div className="featured-recipe-container">
     {tequilaRecipeCard}
     </div>
     </>
  )}



export default Tequila
