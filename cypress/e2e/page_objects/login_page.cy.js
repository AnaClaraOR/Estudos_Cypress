import { faker } from '@faker-js/faker'

class LoginForm {
    elements = {
        submitBnt: () => cy.get('.btn-primary'),
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
