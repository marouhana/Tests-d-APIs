describe('Parcours achat', () => {
    const userData = require('../fixtures/userData')
    const firstName = userData.firstName
    const lastName = userData.lastName
    const password = userData.pwd
    const email = userData.email

    it('connexion utilisateur et achat', () => {
        cy.visit('https://stg2-fr.rajapack.xyz/')
        cy.get('#dropdown-account').click()
        cy.get('#UserLoginDropdown').type(email)
        cy.get('#UserPasswordDropdown').type(password)
        cy.get('[type="submit"]').eq(0).should('have.text', 'Se connecter').click()
        cy.wait(4000)
        cy.get('.header-commandes__text.hidden-xs.block-md.mr-sm-3.mr-md-2.mr-lg-3').should('have.text', 'Commande par référence').click({force:true})
        cy.url('https://stg2-fr.rajapack.xyz/quick-order.html').should('contain', '/quick-order')
        cy.get('#addProductRef').type('cas01')
        cy.get('#checkoutListSearch').select('#checkoutList_CAS01')
        cy.get('#open-cart-confirmation').click({force:true})
    })
})
