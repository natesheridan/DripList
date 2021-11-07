import './RecipeDetails.css';
import { useEffect, useState } from 'react';
import { getSingleRecipe } from '../../APICalls.js';
import { toggleInStorage, getUserStorage } from '../../util.js';
import { useAuth0 } from '@auth0/auth0-react';

const RecipeDetails = ({ id }) => {
  const  { user } = useAuth0();
  const [singleRecipe, setSingleRecipe] = useState({})
  const LS = getUserStorage(user.sub)
  const foundItem = LS.find(recipes => recipes.id===id)
  const [isFavorite, setIsFavorite] = useState((foundItem)||false)

  useEffect(() => {
    getSingleRecipe(id)
    .then(data => data.drinks[0])
    .then(drink => setSingleRecipe(drink))
  }, [])

  return (
    <div className="single-recipe-detail" id={id}>
      <img src={singleRecipe.strDrinkThumb} className="recipe-details-img"/>
      <button className="add-btn"
        onClick={() => {
          toggleInStorage(user.sub, singleRecipe)
          setIsFavorite(!isFavorite)

        }}
      >
        {isFavorite ? <>Add to DripList</> : <>Remove from DripList</>}
      </button>
      <h2 className="recipe-name">{singleRecipe.strDrink}</h2>
      <div className="ingredients-list">
        <h3>Ingredients</h3>
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
      </div>
      <div className="instructions">
        <p>Glass Type: {singleRecipe.strGlass}</p>
        <p>Instructions: {singleRecipe.strInstructions}</p>
      </div>
    </div>
  )
}

export default RecipeDetails;
