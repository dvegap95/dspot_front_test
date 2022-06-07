describe('navigation tests', () => {
  it('navigates by buttons and links', () => {
    cy.visit('/');
    cy.findByText('Home Page').should('exist');
  });
});
