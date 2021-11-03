export const getLatestRecipes = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
  .then(response => response.json())
}

export const getSingleRecipe = (id) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
}

export const getVodkaRecipes = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=vodka`)
}

export const getRumRecipes = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=rum`)
}

export const getTequilaRecipes = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=tequila`)
}
