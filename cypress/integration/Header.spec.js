/// <reference types="cypress" />

describe('Header should contain a logo with link to homepage and a log in icon', () => {
  it('visits the website', () => {
    cy.visit('http://localhost:3000')
  })

  it('Finds the logo, clicks and enters homepage again', () => {
    cy.get('[data-testid="header-logo-action"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
