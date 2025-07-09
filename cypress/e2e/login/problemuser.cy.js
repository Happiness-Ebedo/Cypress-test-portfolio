describe('saucedemo', function () {

    beforeEach(() => {

    })

    afterEach(() => {

        cy.clearLocalStorage()

    })

    const num = Date.now()
    const n = num.toString()

    it('should log in (but app may behave oddly)', () => {
        cy.login('problem_user');
        cy.url().should('include', '/inventory.html');

        // Clean up
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });
});