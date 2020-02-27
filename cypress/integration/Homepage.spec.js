/// <reference types="cypress" />

describe('visit the website and find the card component', () => {
  it('visits the website', () => {
    cy.visit('http://localhost:3000')
  })

  it('renders the card containers with 4 parts', () => {
    cy.get('.card-container')
      .first()
      .children()
      .should('have.length', 4)
  })

  it('renders the first part with correct children', () => {
    cy.get('.card-container')
      .first()
      .children()
      .eq(0)
      .children()
      .should('have.length', 1)
      .children()
      .should('have.length', 3)
  })

  it('renders the second part with correct children', () => {
    cy.get('.card-container')
      .first()
      .children()
      .eq(1)
      .children()
      .should('have.length', 1)
  })

  it('renders the third part with correct children', () => {
    cy.get('.card-container')
      .first()
      .children()
      .eq(2)
      .children()
      .should('not.exist')
  })

  it('renders the fourth part with correct children', () => {
    cy.get('.card-container')
      .first()
      .children()
      .eq(3)
      .children()
      .should('have.length', 2)
  })

  it('finds and clicks the action1 and action2 buttons', () => {
    cy.get('[data-testid="action1"]')
      .first()
      .click()
    cy.get('[data-testid="action2"]')
      .first()
      .click()
  })

  it('find and clicks social buttons', () => {
    cy.get('[data-testid="like-action"]')
      .first()
      .click()
    cy.get('[data-testid="share-action"]')
      .first()
      .click()
  })
})
