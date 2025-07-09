describe('Homepage', () => {
  it('should load the homepage', () => {
    cy.visit('https://example.com'); // replace with your target URL
    cy.contains('Example Domain');
  });
});