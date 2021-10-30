import React from 'react';
import RecipeCard from './RecipeCard.js';
import './RecipeContainer.css';

const RecipeContainer = ({recipes}) => {

    const recipeCard = recipes.map(recipe => {
      return (
      <div>
        <RecipeCard
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      </div>
      )
    })
    return <div className="recipe-container"> {recipeCard} </div>
}






export default RecipeContainer;
