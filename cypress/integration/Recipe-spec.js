describe('Recipes', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/drinks")
  })

  it('should render image', () => {
    cy.get('img')
  })

  it('should have a recipe card container', () => {
    cy.get(".featured-recipe-container")
    cy.get(".recipe-card")
    cy.get(".text-container")
    });

  });
