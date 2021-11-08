describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/drinks")
  })

    it("Should contain a searchBar input", () => {
    cy.get('form input[placeholder="Find your perfect cocktail here..."]')
      .get('form input[type="text"]')
      .get('form input[name="input"]')
  })

  })
