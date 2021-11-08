Cypress.Commands.add("featuredRecipesPath", () => {
  cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
  cy.visit('http://localhost:3000')
})
