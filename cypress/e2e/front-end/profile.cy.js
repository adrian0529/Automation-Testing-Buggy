describe('Users feature', () => {
    it('TC-005: FE | Profile| Actualizar la información del perfil del usuario', () => {
        cy.visit('https://buggy.justtestit.org/');
        cy.screenshot();
        cy.get('.input-sm').type('adrian.aleman.10');
        cy.get('.ng-untouched').eq(1).type('12345678Aa#');
        cy.get('.btn-success').click();
        cy.screenshot();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .card > .card-header').should('contain.text', 'Basic');
        cy.get(':nth-child(2) > .card > .card-header').should('contain.text', 'Additional Info');
        cy.get(':nth-child(3) > :nth-child(1) > .card-header').should('contain.text', 'Additional Info');
        cy.get('#username').should('be.disabled');
        cy.screenshot();
        cy.get('#age').clear();
        cy.get('#age').type('24');
        cy.get('.btn-default').click();
        cy.get(':nth-child(1) > .result').should('contain.text', 'The profile has been saved successful');
        cy.screenshot();  
    })
})