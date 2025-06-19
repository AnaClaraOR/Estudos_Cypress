describe('Registro de Login', () => {

  class LoginForm {
    elements = {
      emailInput: () => cy.get('#email'),
      senhaInput: () => cy.get('#senha'),
      submitBnt: () => cy.get('.btn-primary'),
      alerta_error: () => cy.get('.alert-danger'),
      alerta_sucesso: () => cy.get('.alert-success')
    }

    typeEmail(text) {
      if(!text) return;
      this.elements.emailInput().type(text)
    }
    typeSenha(text) {
      if(!text) return;
      this.elements.senhaInput().type(text)
    }
    clickSubmit() {
      this.elements.submitBnt().click()
    }
  }

  const loginForm = new LoginForm()
  
  // -------------- CENÁRIO 1 --------------------
  
  describe('Login com credenciais vazias', () => {
    const input = {
      email: '',
      senha: ''
    }
    after(() => {
      cy.clearAllLocalStorage()
    })

    it('Given I am on the login page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input.email}" in the email field`, () => {
      loginForm.typeEmail(input.email)
    })

    it(`Then I enter "${input.senha}" in the senha field`, () => {
      loginForm.typeSenha(input.senha)
    })

    it('Then I click the submit  button', () => {
      loginForm.clickSubmit()
    })

    it('Then I should see "Email é um campo obrigatório"', () => {
      loginForm.elements.alerta_error().should('contains.text','Email é um campo obrigatório')
    })

    it('And I should see "Senha é um campo obrigatório"', () => {
      loginForm.elements.alerta_error().should('contains.text','Senha é um campo obrigatório')
    })
  })

  //----------------- CENÁRIO 2 --------------------

  describe('Login com credenciais inválidas', () => {
    const input = {
      email: 'teste_invalido@gmail.com',
      senha: '12345'
    }
    after(() => {
      cy.clearAllLocalStorage()
    })

    it('Given I am on the login page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input.email}" in the email field`, () => {
      loginForm.typeEmail(input.email)
    })

    it(`Then I enter "${input.senha}" in the senha field`, () => {
      loginForm.typeSenha(input.senha)
    })

    it('Then I click the submit button', () => {
      loginForm.clickSubmit()
    })

    it('hen I should see "Problemas com o login do usuário"', () => {
      loginForm.elements.alerta_error().should('contains.text','Problemas com o login do usuário')
    })

  })

  //------------------ CENÁRIO 3 ------------------

  describe('Login com sucesso', () => {
    const input = {
      email: 'testecy@gmail.com',
      senha: '12345',
    }
    after(() => {
      cy.clearAllLocalStorage()
    })

    it('Given I am on the login page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input.email}" in the email field`, () => {
      loginForm.typeEmail(input.email)
    })

    it(`Then I enter "${input.senha}" in the senha field`, () => {
      loginForm.typeSenha(input.senha)
    })

    it('Then I click the submit  button', () => {
      loginForm.clickSubmit()
    })

    it(`Then I should see "Bem vindo, Teste Cypress"`, () => {
      loginForm.elements.alerta_sucesso().should('contains.text','Bem vindo, Teste Cypress')

    })

  })

})