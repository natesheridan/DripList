describe('RecipeInfo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to access single recipe details', () => {
    cy.get('[name="Lemon Elderflower Spritzer"]').click()
  })

  it('Should contain recipe img', () => {
    cy.get('[name="Lemon Elderflower Spritzer"]').click()
    .get('img').each($el => {
      cy.wrap($el).should('have.attr', 'src')
      cy.wrap($el).should('have.attr', 'alt')
    })
  })

  it('Should display recipe name', () => {
      cy.get('[name="Lemon Elderflower Spritzer"]').click()
      .get('.recipe-name')
      .should('have.text', 'Money Plane')
    })

  it('Should display ingredients list', () => {
      cy.get('[name="Lemon Elderflower Spritzer"]').click()
      .get('.ingredients-list')
    })


})
