describe("Recipe HomePage", () => {
  it("renders the default elements on HomePage", () => {
    cy.visit("https://recipe-app-eight-bay.vercel.app/");

    cy.get('[data-testid="cypress-title"]')
      .should("exist")
      .should("have.text", "Recommended Recipes");
  });

  it("renders the default elements on Sidebar", () => {
    cy.visit("https://recipe-app-eight-bay.vercel.app/");

    cy.get('[data-testid="cypress-logo-image"]')
      .should("exist")
      .should("have.attr", "src", "/logo.svg");

    cy.get('[data-testid="cypress-home-link"]').should("exist").click();
    cy.url().should("eq", "https://recipe-app-eight-bay.vercel.app/");

    cy.get('[data-testid="cypress-favorites-link"]').should("exist").click();
    cy.url().should("eq", "https://recipe-app-eight-bay.vercel.app/favorites");
  });
});
