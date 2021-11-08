import React, { useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import './FeaturedRecipeContainer.css';
import { useAuth0} from '@auth0/auth0-react'
import {getUserStorage} from '../../util.js';

const FeaturedRecipeContainer = ({recipes}) => {
    const recipeCard = recipes.map(recipe => {
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
          <h3 className="featured-drinks">Featured Drinks</h3>
        </div>
        <div className="featured-recipe-container">
          {recipeCard}
        </div>
       </>
    )
}

export default FeaturedRecipeContainer;
