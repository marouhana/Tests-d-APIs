const { it } = require("mocha");

describe("Premier test", () => {
    it("Connexion", () => {
        cy.visit("https://practice.automationtesteracademy.com/");
        cy.get('[data-testid="logo-img-login"]').should("be.visible");
    cy.get('[data-test="username-login"]').type("geek_user").should("have.value", "geek_user");
    cy.get('[data-test="password-login"]').type("cypress-geek").should("have.value", "cypress-geek");
    cy.get('[data-test="remember-login"]').check();
    cy.get('[data-test="submit-login"]').should("have.text","Se Connecter").click();
    cy.url().should("eq", "https://practice.automationtesteracademy.com/home");
    cy.url().should("include", "/home");

    })
   
    
});