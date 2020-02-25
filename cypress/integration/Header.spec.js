/// <reference types="cypress" />

describe('Header should contain a logo with link to homepage and a log in icon', () => {
  it('should visit the website, find a header, click on logo and enter homepage', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="header-container]')
      .children()
      .eq(0)
      .click()
    cy.url().should('have.text', 'http://localhost:3000')
  })
})
