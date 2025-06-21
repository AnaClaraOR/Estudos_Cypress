import { cadastroForm, input_cadastro_existente, input_cadastro_novo } from "./page_objects/cadastro_page.cy";
import { loginForm } from "./page_objects/login_page.cy"


describe('Cadastro de usuário', () => {

    //------------------CENÁRIO 1------------------------
    // Trecho comentado devido a falta de remoção de usuário, então a cada execução 
    // um novo usuário é criado, gerando uma massa de dados

    // describe('Realizar cadastro de novo usuário', () => {

    //     it('Given I am on the login page', () => {
    //         cy.visit('/')
    //     });

    //     it('When I click in Novo usuário? to go register page', () => {
    //         cadastroForm.clickUser()
    //     });

    //     it(`Then I enter "${input_cadastro_novo.nome}" in the Nome field`, () => {
    //         cadastroForm.typeNome(input_cadastro_novo.nome)
    //     });

    //     it(`Then I enter "${input_cadastro_novo.email}" in the email field`, () => {
    //         loginForm.typeEmail(input_cadastro_novo.email)
    //     });

    //     it(`Then I enter "${input_cadastro_novo.senha}" in the senha field`, () => {
    //         loginForm.typeSenha(input_cadastro_novo.senha)
    //     });

    //     it('Then I click the cadastrar button', () => {
    //         cadastroForm.clickCadastro()
    //     });

    //     it('Then I should see "Usuário inserido com sucesso"', () => {
    //         loginForm.elements.alerta_sucesso().should('contains.text', 'Usuário inserido com sucesso')
    //     });
    // })

    //-------------------CENÁRIO 2--------------------------
    // Utilizado a variável existente para a execução do teste

    describe('Realizar cadastro com email existente', () => {

        
        it('Given I am on the login page', () => {
            cy.visit('/')
        });

        it('When I click in Novo usuário? to go register page', () => {
            cadastroForm.clickUser()
        });

        it(`Then I enter "${input_cadastro_novo.nome}" in the Nome field`, () => {
            //cadastroForm.typeNome(input_cadastro_novo.nome)
            cadastroForm.typeNome(input_cadastro_existente.nome)
        });

        it(`Then I enter "${input_cadastro_novo.email}" in the email field`, () => {
            //loginForm.typeEmail(input_cadastro_novo.email)
            loginForm.typeEmail(input_cadastro_existente.email)
        });

        it(`Then I enter "${input_cadastro_novo.senha}" in the senha field`, () => {
            //loginForm.typeSenha(input_cadastro_novo.senha)
            loginForm.typeSenha(input_cadastro_existente.senha)
        });

        it('Then I click the cadastrar button', () => {
            cadastroForm.clickCadastro()
        });

        it('Then I should see "Endereço de email já utilizado"', () => {
            loginForm.elements.alerta_error().should('contains.text', 'Endereço de email já utilizado')
        });
    })
})