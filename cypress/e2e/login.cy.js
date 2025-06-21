import { loginForm, input_login_valido, input_vazio, input_login_invalido } from "./page_objects/login_page.cy"

describe('Registro de Login', () => {

  // -------------- CENÁRIO 1 --------------------

  describe('Login com credenciais vazias', () => {

    after(() => {
      cy.clearAllLocalStorage()
    })

    it('Given I am on the login page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input_vazio.email}" in the email field`, () => {
      loginForm.typeEmail(input_vazio.email)
    })

    it(`Then I enter "${input_vazio.senha}" in the senha field`, () => {
      loginForm.typeSenha(input_vazio.senha)
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

    it(`When I enter "${input_login_invalido.email}" in the email field`, () => {
      loginForm.typeEmail(input_login_invalido.email)
    })

    it(`Then I enter "${input_login_invalido.senha}" in the senha field`, () => {
      loginForm.typeSenha(input_login_invalido.senha)
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

    it(`When I enter "${input_login_valido.email}" in the email field`, () => {
      loginForm.typeEmail(input_login_valido.email)
    })

    it(`Then I enter "${input_login_valido.senha}" in the senha field`, () => {
      loginForm.typeSenha(input_login_valido.senha)
    })

    it('Then I click the submit  button', () => {
      loginForm.clickSubmit()
    })

    it(`Then I should see "Bem vindo, Teste Cypress"`, () => {
      loginForm.elements.alerta_sucesso().should('contains.text', 'Bem vindo, Teste Cypress')

    })

  })

})