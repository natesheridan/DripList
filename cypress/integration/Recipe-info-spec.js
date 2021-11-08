describe('RecipeInfo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/recipe/178360')
  })

  it('Should contain recipe img', () => {
    cy.get(".single-recipe-detail")
      .get(".recipe-details-img")
  })

  it('Should display recipe name', () => {
      cy.get('.recipe-name')
    })

  it('Should display ingredients list', () => {
      cy.get('.ingredients-list')
    })

  it('Should display instructions list', () => {
        cy.get('.instructions')
      })

})
