describe('Cadastro de usuário', () => {

    class CadastroForm {
        elements = {
            nomeInput: () => cy.get('#nome'),
            emailInput: () => cy.get('#email'),
            senhaInput: () => cy.get('#senha'),
            cadastroBnt: () => cy.get('.btn-primary'),
            alerta_error: () => cy.get('.alert-danger'),
            alerta_sucesso: () => cy.get('.alert-success'),
            novo_usuario: () => cy.get('.navbar-nav')
        }

        typeNome(text) {
            if(!text) return;
            this.elements.nomeInput().type(text)
        }
        typeEmail(text) {
            if(!text) return;
            this.elements.emailInput().type(text)
        }
        typeSenha(text) {
            if(!text) return;
            this.elements.senhaInput().type(text)
        }
        clickCadastro() {
            this.elements.cadastroBnt().click()
        }
        clickUser() {
            this.elements.novo_usuario().click()
        }
    }

    const cadastroForm = new CadastroForm()

    //------------------CENÁRIO 1------------------------

    describe('Realizar cadastro de novo usuário', () => {

        const input = {
            nome: 'Teste Cy 5',
            email: 'testecy5@gmail.com',
            senha: '12345'
        }
        after(() => {
            cy.clearAllLocalStorage()
        })

        it('Given I am on the login page', () => {
            cy.visit('/')
        });

        it('When I click in Novo usuário? to go register page', () => {
            cadastroForm.clickUser()
        });

        it(`Then I enter "${input.nome}" in the Nome field`, () => {
            cadastroForm.typeNome(input.nome)
        });

        it(`Then I enter "${input.email}" in the email field`, () => {
            cadastroForm.typeEmail(input.email)
        });

        it(`Then I enter "${input.senha}" in the senha field`, () => {
            cadastroForm.typeSenha(input.senha)
        });

        it('Then I click the cadastrar button', () => {
            cadastroForm.clickCadastro()
        });

        it('Then I should see "Usuário inserido com sucesso"', () => {
            cadastroForm.elements.alerta_sucesso().should('contains.text','Usuário inserido com sucesso')
        });
    })

    //-------------------CENÁRIO 2--------------------------

    describe('Realizar cadastro com email existente', () => {
        const input = {
            nome: 'Teste Cy 5',
            email: 'testecy5@gmail.com',
            senha: '12345'
        }
        after(() => {
            cy.clearAllLocalStorage()
        })

        it('Given I am on the login page', () => {
            cy.visit('/')
        });

        it('When I click in Novo usuário? to go register page', () => {
            cadastroForm.clickUser()
        });

        it(`Then I enter "${input.nome}" in the Nome field`, () => {
            cadastroForm.typeNome(input.nome)
        });

        it(`Then I enter "${input.email}" in the email field`, () => {
            cadastroForm.typeEmail(input.email)
        });

        it(`Then I enter "${input.senha}" in the senha field`, () => {
            cadastroForm.typeSenha(input.senha)
        });

        it('Then I click the cadastrar button', () => {
            cadastroForm.clickCadastro()
        });

        it('Then I should see "Endereço de email já utilizado"', () => {
            cadastroForm.elements.alerta_error().should('contains.text','Endereço de email já utilizado')
        });
    })
})