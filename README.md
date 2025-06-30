# Seu Barriga

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://https://github.com/AnaClaraOR/Estudos_Cypress)](https://https://github.com/AnaClaraOR/Estudos_Cypress)

O [Sr. Barriga](https://seubarriga.wcaquino.me/login), um app revolucionário que vai ajudá-lo a manter suas finanças em dia.

## Introdução
Foi utilizado o site do **Sr. Barriga** com o intuito de realizar estudos de testes automatizados. 

## Descrição do Projeto
O Seu Barriga é um app que ajuda no gerenciamento de finanças. Nele você pode criar contas, excluir e listar contas. Você vai gerenciar as finanças a partir da criação de movimentações, podendo escolher a conta que terá a movimentação e informar o interessado. Pode ser realizado o acompanhamento das movimentações criadas através do resumo mensal, onde também é possível realizar exclusões de movimentações.

Neste projeto será utilizado o Cypress como ferramenta de teste automatizado end-to-end projetada para a criação, execução e depuração dos testes em estudo. 
Além disso, o JavaScript foi escolhido para ser utilizado como linguagem para o desenvolvimento do script.
E para o planejamento dos testes foi utilizado o Gherkin.

## Funcionalidade a serem testadas
Realizei os testes das seguintes funcionalidades: 
- Realizar Cadastro de Usuário
- Realizar Login de Usuário

## Casos de Teste (Planejamento)

 ### 1 - Realizar Cadastro de Usuário
 #### Cenário - Criar um novo usuário com sucesso
 **Objetivo:** Cadastrar com sucesso um novo usuário
 **Resultado Esperado:** O sistema deve mostrar ao agora, usuário, a seguinte mensagem: "Usuário inserido com sucesso" e direcionar o usuário para a tela de login
 
 #### Cenário - Tentar criar um usuário já cadastrado
 **Objetivo:** Não realizar cadastro com email já cadastrado
 **Resultado Esperado:** Sistema deve mostrar um mensagem de erro, "Endereço de email já utilizado" e não deve permitir a criação de um novo usuário
 
### 2 - Realizar Login de Usuário
#### Cenário - Login com credenciais vazias
 **Objetivo:** Acessar o sistema sem está cadastrado
 **Resultado Esperado:** Sistema não deve permitir o login do usuário com os campos obrigatórios em branco. 

#### Cenário - Login com credenciais inválidas
 **Objetivo:** Acessar o sistema sem está cadastrado
 **Resultado Esperado:** Sistema não deve permitir o login do usuário caso não esteja cadastrado.

 #### Cenário - Login com sucesso
**Objetivo:** Acessar o sistema
**Resultado Esperado:** O usuário deve conseguir realizar o login, visualizar na tela uma mensagem de boas vindas e ver a tela principal da ferramenta.

## Contribuinte
Este projeto foi realizado por: 

**Ana Clara Ribeiro:**
[![Linkedin Badge Ana](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anaclaraor/)](https://www.linkedin.com/in/anaclaraor/)


 

 
