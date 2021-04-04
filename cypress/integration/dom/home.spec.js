/// <reference types="cypress" />

context('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('cy.get() - query DOM elements', () => {
        cy.get('h1:first').should('contain', 'Hello')
    })
})
