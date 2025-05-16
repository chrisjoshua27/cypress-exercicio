/// <reference types="cypress" />

describe("Testes para a pagina de candidatura", () => {
        beforeEach(() => {
        cy.visit("https://ebac-jobs-e2e.vercel.app/");
    });

	it("Deve renderizar 4 vagas", () => {
		cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4);
	});

	it("Deve levar o usúario até o formulario de inscrição", () => {;
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
	});

    it("Deve preencher o formulario de inscrição", () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type("christopher joshua soares") 
        cy.get('input[name="email"]').type("christopherjoshuasoares@hotmail.com")
        cy.get('input[name="telefone"]').type("11 55555-5555")
        cy.get('input[name="endereco"]').type("rua dos bobos, 0")
        cy.get("#linux").check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
});
