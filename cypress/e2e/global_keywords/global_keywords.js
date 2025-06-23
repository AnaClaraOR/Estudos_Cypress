class GlobalForm {
    global_elements = {
        emailInput: () => cy.get('#email'),
        senhaInput: () => cy.get('#senha'),
        alerta_error: () => cy.get('.alert-danger'),
        alerta_sucesso: () => cy.get('.alert-success')
    }

    typeEmail(text) {
        if (!text) return;
        this.global_elements.emailInput().type(text)
    }
    typeSenha(text) {
        if (!text) return;
        this.global_elements.senhaInput().type(text)
    }
}

export const globalForm = new GlobalForm()
