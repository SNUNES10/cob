/// <reference types="cypress" />
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { Sauce } from '../../../pages/sauce.page'

/*** 
 * Os 'before' que se aplicam para todos as features e steps estão armazenados na pasta 'step_definitions/common'
 */

Before({ tags: "@tag" }, () => {
    console.log("before scenarios with tag '@tag'")
})

Given(`que esteja na página home`, () => {
    Sauce.acessar_sistema()
});

Given(`que esteja logado com {string}`, (user_type) => {
    Sauce.logar_sistema(user_type)
});

When(`acesso o sistema e clico em Profissionais Parceiro e aciono o botao Profissionais freelancers ou substitutos`, () => {
    Sauce.clicar_botao_nwParceiro()
});


Then(`visualizo feed de profissionais e aciono a opção de Adicionar Profissional`, () => {
    Sauce.botao_adicionar_profissional()
    Sauce.validar_campos()
});

Then(`Dados do Profissional`, () => {

});

Then(`Inserir Foto`, () => {

});

Then(`Perfil de Atendimento`, () => {

});

Then(`Serviços Prestado`, () => {

});

When(`clico na opção Adicionar Profissional e preencho os dados inicias`, () => {
    Sauce.botao_adicionar_profissional()
    Sauce.preencher_dadosProfissional()
    
});

Then(`preencho os campos do formulario`, () => {
    // Sauce.inserir_foto()
    // Sauce.preencher_sobreMin()
    // Sauce.checkbox_perfil()
    // Sauce.servico_prestado()
   
});

Then(`clico no botao Salvar para finalizar o cadastro do novo Profissional`, () => {
   
});