describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxtestcomponent--primary'));

  it('should render the component', () => {
    cy.get('wd-nx-test').should('exist');
  });
});
