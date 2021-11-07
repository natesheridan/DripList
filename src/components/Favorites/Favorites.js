import React from 'react';
import { useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import './Favorites.css';
import { useAuth0 } from '@auth0/auth0-react';

const Favorites = () => {
  const {user} = useAuth0()
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(user.sub)))
  const recipeCards = favorites?.map(recipe => {
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
    <div className="saved-recipe-container">

          <div className="drinks-title">
          <h3 className="featured-drinks">Your DripList</h3>
          </div>
      {(recipeCards.length>0)
        ?{recipeCards}
        :<p className="drinks-title">Save some drinks first!</p>
      }
    </div>
  )
}



export default Favorites


