/// <reference types="cypress" />

describe('visit the website and find the card component', () => {
  it('visits the website', () => {
    cy.visit('http://localhost:3000')
  })

  it('renders the card containers with 4 parts', () => {
    cy.get('.card-container')
      .children()
      .should('have.length', 4)
  })

  it('renders the first part with correct children', () => {
    cy.get('.card-container')
      .children()
      .eq(0)
      .children()
      .should('have.length', 1)
      .children()
      .should('have.length', 3)
  })

  it('renders the second part with correct children', () => {
    cy.get('.card-container')
      .children()
      .eq(1)
      .children()
      .should('have.length', 1)
  })

  it('renders the third part with correct children', () => {
    cy.get('.card-container')
      .children()
      .eq(2)
      .children()
      .should('not.exist')
  })

  it('renders the fourth part with correct children', () => {
    cy.get('.card-container')
      .children()
      .eq(3)
      .children()
      .should('have.length', 2)
  })
})
