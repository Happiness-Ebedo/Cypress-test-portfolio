describe('saucedemo', function () {

    beforeEach(() => {

    })

    afterEach(() => {

        cy.clearLocalStorage()

    })

    const num = Date.now()
    const n = num.toString()

    it('should log in successfully (may behave incorrectly)', () => {
        cy.login('error_user');
        cy.url().should('include', '/inventory.html');

        // Clean up
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });
});