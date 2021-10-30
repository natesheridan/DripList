import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({name, ingredients}) => {
  return (
  <article className="recipe-card">
  <p> {name}</p>
  <p> {ingredients}</p>
  </article>
)
}


export default RecipeCard;
