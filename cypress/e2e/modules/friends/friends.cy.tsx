describe('e2e tests', () => {
  beforeEach(() => {
    cy.intercept(
      'http://private-5bdb3-friendmock.apiary-mock.com/friends/id',
    ).as('request');
  });
  it('navigates by buttons and url', () => {
    cy.visit('/friends');
    cy.findByText('Friends').should('exist');
    cy.findAllByText('Details').eq(2).click();
    cy.findByTestId('friend_profile_pict').should('exist');
    cy.url().should('contain', '/3');
    cy.findByTestId('back_btn').click();
    cy.url().should('not.contain', '/3');
    cy.url().should('contain', '/friends');
    cy.visit('/friends/5');
    cy.findByTestId('friend_profile_pict').should('exist');
  });

  it('has all functions working fine', () => {
    cy.visit('/friends/6');
    cy.wait('@request');
    cy.findByTestId('friend_profile_pict').should('exist');
    cy.findByTestId('friend_details_info').should('exist');
    cy.findByTestId('friend_details_photos').should('not.exist');

    cy.findByText('Photos').click();
    cy.findByTestId('friend_details_info').should('not.exist');
    cy.findByTestId('friend_details_photos').should('exist');
    cy.findByTestId('photo_dialog').should('not.be.visible');

    cy.findByTestId('friend_details_photos').get('img').eq(2).click();
    cy.findByTestId('photo_dialog').should('be.visible');
    cy.findByTestId('close_btn').click();
    cy.findByTestId('photo_dialog').should('not.be.visible');

    cy.findByText('Info').click();
    cy.findByTestId('friend_details_info').should('exist');
    cy.findByTestId('friend_details_photos').should('not.exist');
  });
});
