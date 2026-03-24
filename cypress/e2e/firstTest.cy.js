describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://recipe-app-eight-bay.vercel.app/");

    cy.get('[data-testid="cypress-title"]', { timeout: 10000 }).should("exist");
  });
});
