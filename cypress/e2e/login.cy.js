import { loginForm, input_1, input_2, input_3 } from "./page_objects/login_page.cy"

describe('Registro de Login', () => {

  // -------------- CENÁRIO 1 --------------------

  describe('Login com credenciais vazias', () => {

    after(() => {
      cy.clearAllLocalStorage()
    })

    it('Given I am on the login page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input_1.email}" in the email field`, () => {
      loginForm.typeEmail(input_1.email)
    })

    it(`Then I enter "${input_1.senha}" in the senha field`, () => {
      loginForm.typeSenha(input_1.senha)
    })

    it('Then I click the submit button', () => {
      loginForm.clickSubmit()
    })

    it('Then I should see "Email é um campo obrigatório"', () => {
      loginForm.elements.alerta_error().should('contains.text', 'Email é um campo obrigatório')
    })

    it('And I should see "Senha é um campo obrigatório"', () => {
      loginForm.elements.alerta_error().should('contains.text', 'Senha é um campo obrigatório')
    })
  })

  //----------------- CENÁRIO 2 --------------------

  describe('Login com credenciais inválidas', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })

    it('Given I am on the login page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input_2.email}" in the email field`, () => {
      loginForm.typeEmail(input_2.email)
    })

    it(`Then I enter "${input_2.senha}" in the senha field`, () => {
      loginForm.typeSenha(input_2.senha)
    })

    it('Then I click the submit button', () => {
      loginForm.clickSubmit()
    })

    it('When I should see "Problemas com o login do usuário"', () => {
      loginForm.elements.alerta_error().should('contains.text', 'Problemas com o login do usuário')
    })

  })

  //------------------ CENÁRIO 3 ------------------

  describe('Login com sucesso', () => {

    after(() => {
      cy.clearAllLocalStorage()
    })

    it('Given I am on the login page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input_3.email}" in the email field`, () => {
      loginForm.typeEmail(input_3.email)
    })

    it(`Then I enter "${input_3.senha}" in the senha field`, () => {
      loginForm.typeSenha(input_3.senha)
    })

    it('Then I click the submit  button', () => {
      loginForm.clickSubmit()
    })

    it(`Then I should see "Bem vindo, Teste Cypress"`, () => {
      loginForm.elements.alerta_sucesso().should('contains.text', 'Bem vindo, Teste Cypress')

    })

  })

})