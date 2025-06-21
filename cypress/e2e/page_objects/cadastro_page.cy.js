import { faker } from '@faker-js/faker'

class CadastroForm {
    elements = {
        nomeInput: () => cy.get('#nome'),
        cadastroBnt: () => cy.get('.btn-primary'),
        novo_usuario: () => cy.get('.navbar-nav')
    }

    typeNome(text) {
        if (!text) return;
        this.elements.nomeInput().type(text)
    }
    clickCadastro() {
        this.elements.cadastroBnt().click()
    }
    clickUser() {
        this.elements.novo_usuario().click()
    }
}

export const cadastroForm = new CadastroForm()

export const input_cadastro_existente = {
    nome: 'Teste Cypress',
    email: 'testecy@gmail.com',
    senha: '12345',
}

export const input_cadastro_novo = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
}