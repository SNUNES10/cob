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


When(`pesquiso pela loja cadastrada`, () => {
    Sauce.pesquisar_loja()
  });
  
When(`seleciono a loja que foi pesquisada`, () => {
    Sauce.consultar_dados()
  });

  
Then(`clico no botao de excluir loja`, () => {
    Sauce.excluir_loja()
  });