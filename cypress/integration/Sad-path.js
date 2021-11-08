describe('Recipes', () => {
  it('Should show error if recipes cannot be fetched', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://www.thecocktaildb.com/api/json/v2/9973533/latest.php'
      },
      {statusCode: 404, body:'h3, [class="display-error"]'}
    )
    cy.visit('http://localhost:3000')
    .get(error message class and tag)
  })

  it('Should show error if favorites show no results', () => {
    cy.intercept(''https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
    .visit('http://localhost:3000/')
    .get('form input[name="input"]').type('')
    .get('h3, [class="display-error"]')

  })
})
