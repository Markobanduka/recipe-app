describe("Recipe HomePage", () => {
  it("renders the default elements on HomePage", () => {
    cy.visit("https://recipe-app-eight-bay.vercel.app/");

    cy.get('[data-testid="cypress-search-input"]')
      .should("exist")
      .should("have.attr", "placeholder", "What do you want to cook today?");

    // change
    cy.get('[data-testid="cypress-title"]')
      .should("exist")
      .should("have.text", "Recommended Recipes");

    cy.get('[data-testid="cypress-subtitle"]')
      .should("exist")
      .should("have.text", "Popular choices");

    cy.get('[data-testid="cypress-skeleton"]').should("have.length", 9);

    cy.get('[data-testid="cypress-skeleton"]').should("not.exist");

    // cy.get('[data-testid="cypress-recipe-card"]').should("have.length", 9);
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
