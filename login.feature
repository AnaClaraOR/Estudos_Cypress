Feature: Registro de Login

    Scenario: Login com credenciais vazias
        Given I am on the login page
        When I enter "" in the email field
        Then I enter "" in the senha field
        Then I click the submit  button
        Then I should see "Email é um campo obrigatório"
        And I should see "Senha é um campo obrigatório"

    Scenario: Login com credenciais inválidas
        Given I am on the login page
        When I enter "teste_invalido@gmail.com" in the email field
        Then I enter "12345" in the senha field
        Then I click the submit  button
        Then I should see "Problemas com o login do usuário"

    Scenario: Login com sucesso
        Given I am on the login page
        When I enter "testecy@gmail.com" in the email field
        Then I enter "12345" in the senha field
        Then I click the submit  button
        Then I should see "Bem vindo, [usuário]"  
