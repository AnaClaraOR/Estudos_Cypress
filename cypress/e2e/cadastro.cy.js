import { cadastroForm, input_cadastro } from "./page_objects/cadastro_page.cy";
import { loginForm, input } from "./page_objects/login_page.cy"


describe('Cadastro de usuário', () => {

    //------------------CENÁRIO 1------------------------

    describe('Realizar cadastro de novo usuário', () => {

        after(() => {
            cy.clearAllLocalStorage()
        })

        it('Given I am on the login page', () => {
            cy.visit('/')
        });

        it('When I click in Novo usuário? to go register page', () => {
            cadastroForm.clickUser()
        });

        it(`Then I enter "${input_cadastro.nome}" in the Nome field`, () => {
            cadastroForm.typeNome(input_cadastro.nome)
        });

        it(`Then I enter "${input.email}" in the email field`, () => {
            loginForm.typeEmail(input.email)
        });

        it(`Then I enter "${input.senha}" in the senha field`, () => {
            loginForm.typeSenha(input.senha)
        });

        it('Then I click the cadastrar button', () => {
            cadastroForm.clickCadastro()
        });

        it('Then I should see "Usuário inserido com sucesso"', () => {
            loginForm.elements.alerta_sucesso().should('contains.text', 'Usuário inserido com sucesso')
        });
    })

    //-------------------CENÁRIO 2--------------------------

    describe('Realizar cadastro com email existente', () => {

        after(() => {
            cy.clearAllLocalStorage()
        })

        it('Given I am on the login page', () => {
            cy.visit('/')
        });

        it('When I click in Novo usuário? to go register page', () => {
            cadastroForm.clickUser()
        });

        it(`Then I enter "${input_cadastro.nome}" in the Nome field`, () => {
            cadastroForm.typeNome(input_cadastro.nome)
        });

        it(`Then I enter "${input.email}" in the email field`, () => {
            loginForm.typeEmail(input.email)
        });

        it(`Then I enter "${input.senha}" in the senha field`, () => {
            loginForm.typeSenha(input.senha)
        });

        it('Then I click the cadastrar button', () => {
            cadastroForm.clickCadastro()
        });

        it('Then I should see "Endereço de email já utilizado"', () => {
            loginForm.elements.alerta_error().should('contains.text', 'Endereço de email já utilizado')
        });
    })
})