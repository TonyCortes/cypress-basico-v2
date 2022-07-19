/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('Prenche os campos obrigatórios e envia os formulários', function(){
        cy.get('#firstName').type('Tony')
        cy.get('#lastName').type('Côrtes')
        cy.get('#email').type('tonycortes.h@test.com')
        cy.get('#open-text-area').type('Nada não, só estou aprendendo. Obrigado!')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
  })