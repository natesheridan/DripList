export const getRecipes = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=')
  .then(response => response.json())
}
