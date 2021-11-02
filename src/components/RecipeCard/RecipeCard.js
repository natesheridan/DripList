import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({name, ingredients1, ingredients2, ingredients3, ingredients4, ingredients5, ingredients6, ingredients7, ingredients8, ingredients9, ingredients10, ingredients11, ingredients12, ingredients13, ingredients14, ingredients15, instructions}) => {
  return (
    <article className="recipe-card">
      <p> {name}</p>
      <p> {ingredients1}</p>
      <p> {ingredients2}</p>
      <p> {ingredients3}</p>
      <p> {ingredients4}</p>
      <p> {ingredients5}</p>
      <p> {ingredients6}</p>
      <p> {ingredients7}</p>
      <p> {ingredients8}</p>
      <p> {ingredients9}</p>
      <p> {ingredients10}</p>
      <p> {ingredients11}</p>
      <p> {ingredients12}</p>
      <p> {ingredients13}</p>
      <p> {ingredients14}</p>
      <p> {ingredients15}</p>
      <p> {instructions}</p>
  </article>
)
}


export default RecipeCard;
