/// <reference types="cypress" />

describe("Test CRUD", () => {
  beforeEach(() => {});

  it("check form validation", () => {
    cy.visit("http://localhost:3000/#/create");

    cy.getByTestID("Form_TITLE").find("input").focus().blur();
    cy.getByTestID("Error_REQUIRED")
      .contains("Title is required")
      .should("exist");

    cy.getByTestID("Form_AUTHOR").find("input").focus().blur();
    cy.getByTestID("Error_REQUIRED")
      .contains("Author is required")
      .should("exist");

    cy.getByTestID("Form_CONTENT").find("textarea").first().focus().blur();
    cy.getByTestID("Error_REQUIRED")
      .contains("Content is required")
      .should("exist");
  });

  it("create a new story", () => {
    const title = "test title";
    const author = "test author";
    const content = "test content";

    cy.visit("http://localhost:3000");

    cy.getByTestID("Navbar_CREATE").should("exist").click();
    cy.url().should("contain", "/create");

    cy.getByTestID("Form_SUBMIT").should("be.disabled");

    cy.getByTestID("Form_TITLE").find("input").type(title);
    cy.getByTestID("Form_AUTHOR").find("input").type(author);
    cy.getByTestID("Form_CONTENT")
      .find("textarea")
      .first()
      .type(content)
      .blur();

    cy.getByTestID("Form_SUBMIT").should("be.enabled").click();

    cy.intercept("POST", "**/story-to-pdf").as("postStory");
    cy.wait("@postStory")
      .its("response.statusCode")
      .should("be.oneOf", [200, 201]);

    cy.url().should("eq", "http://localhost:3000/#/");
  });

  it("edit an existing story", () => {
    const title = "test title";
    const author = "test author";
    const content = "test content";
    const edited = " [edited]";

    cy.visit("http://localhost:3000");

    cy.getByTestID("Thumbnail_CARD")
      .contains(title.toUpperCase())
      .first()
      .closestByTestID("Thumbnail_CARD")
      .findByTestID("Thumbnail_EDIT")
      .click();

    cy.getByTestID("Form_TITLE").find("input").type(edited);
    cy.getByTestID("Form_AUTHOR").find("input").type(edited);
    cy.getByTestID("Form_CONTENT").find("textarea").first().type(edited).blur();

    cy.getByTestID("Form_SUBMIT").should("be.enabled").click();

    cy.intercept("PUT", "**/story-to-pdf").as("putStory");
    cy.wait("@putStory")
      .its("response.statusCode")
      .should("be.oneOf", [200, 201]);

    cy.url().should("eq", "http://localhost:3000/#/");
  });
});
