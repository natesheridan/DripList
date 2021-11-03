export const getLatestRecipes = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
  .then(response => response.json())
}

export const getSingleRecipe = (id) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
}

export const getRandomRecipe = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(response => response.json())
}

//https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=
// ^^ big api with 627 drinks. I used the 'latest' list so it wasn't so huge.
