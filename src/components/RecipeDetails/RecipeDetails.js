import './RecipeDetails.css';
import { useEffect, useState } from 'react';
import { getSingleRecipe } from '../APICalls.js';

const RecipeDetails = () => {
const [singleRecipe, setSingleRecipe] = useState(null)

useEffect(() => {
  getSingleRecipe()
  .then(data => setSingleRecipe(data))
}, [])

  return (
    <h3>{singleRecipe.strDrink}</h3>
  )
}

export default RecipeDetails;
