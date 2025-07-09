describe('saucedemo', function () {

    beforeEach(() => {

    })

    afterEach(() => {

        cy.clearLocalStorage()

    })

    const num = Date.now()
    const n = num.toString()

    it('should show an error message', () => {
        cy.login('locked_out_user');
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Sorry, this user has been locked out');
    });
});