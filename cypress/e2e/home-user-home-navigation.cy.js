describe('navigation', () => {
  it('uses the navigation links to go to user page and back to home', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#userLink').click()
    cy.url().should('include', '/userpage')
    cy.get('#homeLink').click()
    cy.url().should('equal', 'http://localhost:3000/')
  })
})