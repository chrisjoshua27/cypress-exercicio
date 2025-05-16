/// <reference types="cypress" />

describe('Testes de inclusão de novo contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve renderizar toda a página', () => {
        cy.get('input').should('have.length', 3)
    })


    it('Deve incluir o contato Teste, teste@gmail.com, 999999999', () => {
        cy.get('[type="text"]').type('Teste')
        cy.get('[type="email"]').type('teste@gmail.com')
        cy.get('[type="tel"]').type('999999999')
        cy.get('.adicionar').click()
        
        cy.contains('Teste').should('exist')
        cy.contains('teste@gmail.com').should('exist')
        cy.contains('999999999').should('exist')
    })

    it('Deve editar o contato Teste para Teste alterado', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('Teste alterado')
        cy.get('.alterar').click()

        cy.contains('Teste alterado').should('exist')
    })

    it ('Deve remover o contato Teste alterado', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

        cy.contains('Teste alterado').should('not.exist')
    })
})