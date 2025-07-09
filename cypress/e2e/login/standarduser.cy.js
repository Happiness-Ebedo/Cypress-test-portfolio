describe('saucedemo', function () {

    beforeEach(() => {

    })

    afterEach(() => {

        cy.clearLocalStorage()

    })

    const num = Date.now()
    const n = num.toString()

    it('should log in successfully', function () {
        cy.login('standard_user');
        cy.url().should('include', '/inventory.html');

        // Optional: Logout after success
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });
});