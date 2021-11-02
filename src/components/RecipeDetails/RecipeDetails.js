import './RecipeDetails.css';
import { useEffect, useState } from 'react';
import { getSingleRecipe } from '../../APICalls.js';

const RecipeDetails = ({ recipe }) => {
const [singleRecipe, setSingleRecipe] = useState(null)
console.log(recipe)
useEffect(() => {
  getSingleRecipe()
  .then(data => setSingleRecipe(data))
}, [])

  return (
    <div className="recipe-detail" id={recipe.idDrink}>
      <img src={recipe.strDrinkThumb}/>
      <h2>{recipe.strDrink}</h2>
        <p>{recipe.strMeasure1} {recipe.strIngredient1}</p>
        <p>{recipe.strMeasure2} {recipe.strIngredient2}</p>
        <p>{recipe.strMeasure3} {recipe.strIngredient3}</p>
        <p>{recipe.strMeasure4} {recipe.strIngredient4}</p>
        <p>{recipe.strMeasure5} {recipe.strIngredient5}</p>
        <p>{recipe.strMeasure6} {recipe.strIngredient6}</p>
        <p>{recipe.strMeasure7} {recipe.strIngredient7}</p>
        <p>{recipe.strMeasure8} {recipe.strIngredient8}</p>
        <p>{recipe.strMeasure9} {recipe.strIngredient9}</p>
        <p>{recipe.strMeasure10} {recipe.strIngredient10}</p>
        <p>{recipe.strMeasure11} {recipe.strIngredient11}</p>
        <p>{recipe.strMeasure12} {recipe.strIngredient12}</p>
        <p>{recipe.strMeasure13} {recipe.strIngredient13}</p>
        <p>{recipe.strMeasure14} {recipe.strIngredient14}</p>
        <p>{recipe.strMeasure15} {recipe.strIngredient15}</p>
      <p>Glass Type: {recipe.strGlass}</p>
      <p>Instructions: {recipe.strInstructions}</p>
    </div>
  )
}

export default RecipeDetails;
