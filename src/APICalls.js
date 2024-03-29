export const getLatestRecipes = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
  .then(response => response.json())
}

export const getSingleRecipe = (id) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
  .then(response => response.json())
}

export const getRandomRecipe = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(response => response.json())
}

export const getAllRecipes = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=')
  .then(response => response.json())
}

export const getVodkaRecipes = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=vodka`)
  .then(response => response.json())
}

export const getRumRecipes = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=rum`)
  .then(response => response.json())
}

export const getTequilaRecipes = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=tequila`)
  .then(response => response.json())
}
