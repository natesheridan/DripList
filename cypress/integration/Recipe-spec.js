describe('Recipes', () => {
  beforeEach(() => {
    cy.allMoviesPath()
  })

  it('should render card class attributes', () => {
    cy.get('img').each($el => {
      cy.wrap($el).should('have.attr', 'src')
      cy.wrap($el).should('have.attr', 'alt')
      cy.wrap($el).should('have.attr', 'id')
    })
  })

  it('should render movie cards in cardContainer from API data', () => {
    cy.get(".card-container").should('be.visible')
    cy.get(".card").should('be.visible')
    cy.get(".card").should('have.attr', 'name', 'Lemon Elderflower Spritzer')
    });

    it('Should display an error message if data is not returned from the API', () => {
      const errorMessage = 'Data not found';
      cy.intercept(
          {
            method: 'GET',
            url: 'https://www.thecocktaildb.com/api/json/v2/9973533/latest.php'
          },{
            statusCode: 500,
            message: errorMessage
          }
      )
      cy.visit('http://localhost:3000')
          .wait(1000)
          .get('h1').contains(errorMessage)
    })
  });
