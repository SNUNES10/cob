/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import {Sauce} from '../../../pages/sauce.page'

/*** 
 * Os 'before' que se aplicam para todos as features e steps estão armazenados na pasta 'step_definitions/common'
 */

Before({ tags: "@tag"}, () => {
  console.log("before scenarios with tag '@tag'")
})

Given(`que esteja na página home`, () => {
  Sauce.acessar_sistema()
});

Given(`que esteja logado com {string}`, (user_type) => {
	Sauce.logar_sistema(user_type)
});

When(`acesso o sistema e clico em Nova loja de Parceiro`, () => {
  Sauce.clicar_botao_lj_prcr()
});

Then(`visualizo um formulário para preenchimento dos Dados da loja parceiro`, ()  => {
  Sauce.verificar_formulario()
});

Then(`Horário da loja`, () => {
  
});

Then(`Serviços e tabelas de preço`, () => {
  
});

When(`acesso o sistema e preencho os campos iniciais do formulário`, () => {
  Sauce.preencher_campos_inciais()
  Sauce.acesso_agenda()
});

When(`seleciono os horarios e quais as vacinas da nova loja`, () => {
  Sauce.preencher_horario_iniciais()
  Sauce.preencher_horario_finais()
  Sauce.preencher_vacina()

});

Then(`clico no botao Salvar para finalizar o cadastro`, () => {
   Sauce.botao_salvar()
   cy.wait(5000)
});





