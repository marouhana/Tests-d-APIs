describe("Premier test", () => {
    it("enregistrement", () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register/");
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click();
        cy.get("#firstName").type("hanae");
        cy.get('#lastName').type("krim");
        cy.get('#signup-email').type("hanae2024@gmail.com");
        cy.get('#signup-password').type("hAnae123456")
        cy.get('._2OVE0h6V').click();
        cy.wait(1000)
        cy.get('[data-qa="signup-submit-button"]').click();
    })
        it("connecte",() => {
            cy.visit("https://preprod.backmarket.fr/fr-fr/register/");
            cy.get('#signin-email').type("hanae2024@gmail.com");
            cy.get('signin-password').type("hAnae123456");
            cy.wait(1000)
            cy.get('[data-qa="signin-submit-button"]').click();
            }) 

        it.only("lemail est bon mais le mot de passe il est vide ",() => {
            cy.visit("https://preprod.backmarket.fr/fr-fr/register/");
            cy.get('#signin-email').type("hanae2024@gmail.com");
            cy.get('signin-password').type('hAnae123456');
            cy.get('[data-qa="signin-submit-button"]').click();
            cy.get(' .erreur').should('contain.text','Le champ mot de passe est obligatoire.')
        })

        it.only("lemail est vide ",() => {
            cy.visit("https://preprod.backmarket.fr/fr-fr/register/");
            cy.get('#signin-email').type(' ');
            cy.get('signin-password').type('hAnae123456');
            cy.get('[data-qa="signin-submit-button"]').click();
            cy.get(' .erreur').should('contain.text','Le champ "Email" est obligatoire.')
        })
      

    
});