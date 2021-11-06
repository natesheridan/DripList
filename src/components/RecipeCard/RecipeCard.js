import React from 'react';
import './RecipeCard.css';

const RecipeCard = (drink) => {
  console.log(drink)
  return (
    <article className="recipe-card">
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
