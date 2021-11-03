import './RecipeDetails.css';
import { useEffect, useState } from 'react';
import { getSingleRecipe } from '../../APICalls.js';

const RecipeDetails = ({ id }) => {
const [singleRecipe, setSingleRecipe] = useState({})
useEffect(() => {
  getSingleRecipe(id)
  .then(response => response.json())
  .then(data => data.drinks[0])
  .then(drink => setSingleRecipe(drink))
}, [])

  return (
    <div className="single-recipe-detail" id={id}>
      <img src={singleRecipe.strDrinkThumb}/>
      <h2>{singleRecipe.strDrink}</h2>
        <p>{singleRecipe.strMeasure1} {singleRecipe.strIngredient1}</p>
        <p>{singleRecipe.strMeasure2} {singleRecipe.strIngredient2}</p>
        <p>{singleRecipe.strMeasure3} {singleRecipe.strIngredient3}</p>
        <p>{singleRecipe.strMeasure4} {singleRecipe.strIngredient4}</p>
        <p>{singleRecipe.strMeasure5} {singleRecipe.strIngredient5}</p>
        <p>{singleRecipe.strMeasure6} {singleRecipe.strIngredient6}</p>
        <p>{singleRecipe.strMeasure7} {singleRecipe.strIngredient7}</p>
        <p>{singleRecipe.strMeasure8} {singleRecipe.strIngredient8}</p>
        <p>{singleRecipe.strMeasure9} {singleRecipe.strIngredient9}</p>
        <p>{singleRecipe.strMeasure10} {singleRecipe.strIngredient10}</p>
        <p>{singleRecipe.strMeasure11} {singleRecipe.strIngredient11}</p>
        <p>{singleRecipe.strMeasure12} {singleRecipe.strIngredient12}</p>
        <p>{singleRecipe.strMeasure13} {singleRecipe.strIngredient13}</p>
        <p>{singleRecipe.strMeasure14} {singleRecipe.strIngredient14}</p>
        <p>{singleRecipe.strMeasure15} {singleRecipe.strIngredient15}</p>
      <p>Glass Type: {singleRecipe.strGlass}</p>
      <p>Instructions: {singleRecipe.strInstructions}</p>
    </div>
  )
}

export default RecipeDetails;
