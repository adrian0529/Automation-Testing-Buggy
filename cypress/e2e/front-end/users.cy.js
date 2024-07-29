describe('Users feature', () => {

    function generateUniqueUsername() {
        const timestamp = new Date().getTime();
        return `adrian.aleman_${timestamp}`;
    }

    it('TC-004: FE | Users | Registrar un nuevo usuario', () => {
        const username = generateUniqueUsername();
        cy.visit('https://buggy.justtestit.org/');
        cy.screenshot();
        cy.get('.btn-success-outline').click();
        cy.screenshot();
        cy.get('#username').type(username);
        cy.get('#firstName').type('Adrian');
        cy.get('#lastName').type('Aleman');
        cy.get('#password').type('12345678Aa#');
        cy.get('#confirmPassword').type('12345678Aa#');
        cy.screenshot();
        cy.get('.btn-default').click();
        cy.get('.result').should('contain.text', 'Registration is successful')
        cy.screenshot();
    })
})