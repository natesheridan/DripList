import './RecipeDetails.css';
import { useEffect, useState } from 'react';
import { getSingleRecipe } from '../../APICalls.js';

const RecipeDetails = (id) => {
const [singleRecipe, setSingleRecipe] = useState(null)

useEffect(() => {
  getSingleRecipe(id)
  .then(data => setSingleRecipe(data))
}, [])

  return (
    <h3>BOOP</h3>
  )
}

export default RecipeDetails;
