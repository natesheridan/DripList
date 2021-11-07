import React from 'react';
import './RecipeCard.css';

const RecipeCard = (drink) => {
  return (
    <article className="recipe-card">
      {/* <p> {name}</p>
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
      <p> {instructions}</p> */}

      <div className="recipe-card">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={drink.image}></img>
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{drink.name}</h3>
          <div>
            {drink.tags}
          </div>
        </div>
      </div>
  </article>
)
}


export default RecipeCard;
