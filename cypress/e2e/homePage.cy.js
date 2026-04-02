describe("Recipe HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders the default elements on HomePage", () => {
    cy.getDataTest("search-input")
      .should("exist")
      .should("have.attr", "placeholder", "What do you want to cook today?");

    cy.getDataTest("title")
      .should("exist")
      .should("have.text", "Recommended Recipes");

    cy.getDataTest("subtitle")
      .should("exist")
      .should("have.text", "Popular choices");

    cy.getDataTest("card-skeleton").should("have.length", 9);
    cy.getDataTest("card-skeleton").should("not.exist");

    cy.getDataTest("card-image")
      .invoke("attr", "src")
      .should("include", "edamam-product-images.");
  });

  it("renders the default elements on Sidebar", () => {
    cy.getDataTest("logo")
      .should("exist")
      .should("have.attr", "src", "/logo.svg");

    cy.getDataTest("favorites-link").should("exist").click();
    cy.url().should("include", "/favorites");
    cy.getDataTest("my-favorites-title").contains(/My Favorites/i);
    cy.getDataTest("404-image")
      .should("have.attr", "src", "/404.svg")
      .should("be.visible");

    cy.getDataTest("home-link").click();
    cy.getDataTest("white-heart-icon").eq(0).click();
    cy.getDataTest("white-heart-icon").eq(1).click();
    cy.getDataTest("white-heart-icon").eq(2).click();

    cy.getDataTest("favorites-link").should("exist").click();
    cy.url().should("include", "/favorites");
    cy.getDataTest("red-heart-icon")
      .should("have.length", 3)
      .click({ multiple: true });

    cy.getDataTest("red-heart-icon").should("have.length", 0);
    cy.url().should("include", "/favorites");
    cy.getDataTest("my-favorites-title").contains(/My Favorites/i);
    cy.getDataTest("404-image")
      .should("have.attr", "src", "/404.svg")
      .should("be.visible");
  });
});
