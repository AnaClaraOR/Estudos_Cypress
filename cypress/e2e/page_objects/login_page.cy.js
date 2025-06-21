import { faker } from '@faker-js/faker'

class LoginForm {
    elements = {
        emailInput: () => cy.get('#email'),
        senhaInput: () => cy.get('#senha'),
        submitBnt: () => cy.get('.btn-primary'),
        alerta_error: () => cy.get('.alert-danger'),
        alerta_sucesso: () => cy.get('.alert-success')
    }

    typeEmail(text) {
        if (!text) return;
        this.elements.emailInput().type(text)
    }
    typeSenha(text) {
        if (!text) return;
        this.elements.senhaInput().type(text)
    }
    clickSubmit() {
        this.elements.submitBnt().click()
    }
}

export const loginForm = new LoginForm()

export const input_vazio = {
    email: '',
    senha: ''
}

export const input_login_invalido = {
    email: faker.internet.email(),
    senha: faker.internet.password()
}
