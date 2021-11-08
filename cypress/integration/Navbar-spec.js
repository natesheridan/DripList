describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("The navbar information should render on load", () => {
      cy.get(".navbar").should("be.visible")
      cy.contains(".nav-logo", "DripList")
      cy.contains(".userInfoNav")
      cy.contains(".button, "Vodka")
      cy.contains(".button, "Tequila")
      cy.contains(".button, "Rum")
    })
