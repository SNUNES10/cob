import Base from './_base.page'
import {Login as log, Home, Login, Formulario, TabServiço, FormHorarioLoja, IntervaloAgenda, SalvarCadastro, AgendaRecepcao, ConsultarLoja, ExcluirLoja, FormularioDadosProfssionais, InserirFotos} from './components/sauce.elements'

export class Sauce extends Base {

    static acessar_sistema(){
      cy.visit('https://mktsvc-admin-qa.cobasi.com.br/')
    }

    static logar_sistema(user_type){
      super.typeValue(Login.INP_USER, user_type)
      super.typeValue(Login.INP_PASSWORD, '4mwV3e6X')
      super.clickOnElement(Login.BTN_LOGIN)
    }

    static clicar_botao_lj_prcr(){
      cy.wait(5000)
      super.clickOnElement(Home.BTN_LJ_PRCR)
    }

    static clicar_botao_nwParceiro(){
      cy.wait(5000)
      super.clickOnElement(Home.BTN_NOVO_PARCEIRO)
      cy.wait(3000)
      super.clickOnElement(Home.BTN_PROFI_FREE_SUB)
    }

    static botao_adicionar_profissional(){
      super.clickOnElement(Home.BTN_ADD_PROFI)
      cy.wait(2000)
    }

    static preencher_dadosProfissional(){
      super.typeValue(FormularioDadosProfssionais.INP_NOME, 'Jose Teste Automatizado')
      super.typeValue(FormularioDadosProfssionais.INP_CPF, '09809876545')
      super.clickOnElement(FormularioDadosProfssionais.CLICK_SEL_PROF_LOJA)
      cy.wait(2000)
      super.typeValue(FormularioDadosProfssionais.INP_SEL_PROF_LOJA, 'Teste Automatizado')
      // cy.wait(2000)
      // super.clickOnElement(FormularioDadosProfssionais.CHECKBOX_LOJA)
      // cy.wait(2000)
      // super.clickOnElement(FormularioDadosProfssionais.CHECKBOX_GENERO)
      // super.typeValue(FormularioDadosProfssionais.INP_TELEFONE, '61 998765432')
      // super.typeValue(FormularioDadosProfssionais.INP_EMAIL, 'testeautomatizado@gmail.com')
      
    }

    static inserir_foto(){
      const teste = 'images/aleatorio.png'
      const campo = '.sc-iAKWXU'
      cy.get(campo).attachFile(teste)
      cy.pause()
    }
    

    static validar_campos(){
      super.verifyIfElementExists(Home.CMP_DADOS_PROF)
      super.verifyIfElementExists(Home.CMP_PERFL_ATEND)
      super.verifyIfElementExists(Home.CMP_INSERIR_FT)
      super.verifyIfElementExists(Home.CMP_SERV_PRESTADOS)

    }

    static preencher_sobreMin(){
      super.typeValue(FormularioDadosProfssionais.INP_SOBREMIN, 'ONE,TWO. COBASI FC, TESTE AUTOMATIZADO')
      super.typeValue(FormularioDadosProfssionais.INP_QUALI, 'TESTES TESTE TESTES AUTO')
    }

    static checkbox_perfil(){
      super.clickOnElement(FormularioDadosProfssionais.CHECK_DOG)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_CAT)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_COELHO)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_PORCO)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_FURAO)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_MINI)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_PEQ)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_MEDIO)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_GRAND)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_GIG)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_MANSO)
      super.clickOnElement(FormularioDadosProfssionais.CHECK_BRAVO)
    }

    static servico_prestado(force = true){
      super.getElement(FormularioDadosProfssionais.CLICK_SEL_SERVI).click({force: true})

    }

    static verificar_formulario(){
      super.verifyIfElementExists(Home.CMP_FRML)
      super.verifyIfElementExists(Home.CMP_FRML_HOR)
      super.verifyIfElementExists(Home.CMP_FRML_SERV)
    }

    static preencher_campos_inciais(){
      super.typeValue(Formulario.INP_NOME_FANT, 'Teste Automatizado')
      super.typeValue(Formulario.INP_COD_LOJA, '8903890')
      super.typeValue(Formulario.INP_ENDRC, 'Rua Teste Cypress')
      super.typeValue(Formulario.INP_CIDADE, 'Cylandia ')
      super.typeValue(Formulario.INP_LAT, '90')
      super.typeValue(Formulario.INP_LONG, '789')
      super.typeValue(Formulario.INP_TELE, '91 90899098')
    }

    static preencher_horario_iniciais(){
      super.clickOnElement(FormHorarioLoja.BTN_SEG)
      super.clickOnElement(FormHorarioLoja.SEG_HORA_INI)
      super.typeValue(FormHorarioLoja.SEG_HORA_INI, '08:00')
      // super.clickOnElement(FormHorarioLoja.SEG_HORA_FIM)
      // super.typeValue(FormHorarioLoja.SEG_HORA_FIM, '18:00')
      super.clickOnElement(FormHorarioLoja.BTN_TER)
      super.typeValue(FormHorarioLoja.TER_HORA_INI, '08:00')
      // super.typeValue(FormHorarioLoja.TER_HORA_FIM, '18:00')
      super.clickOnElement(FormHorarioLoja.BTN_QUAR)
      super.typeValue(FormHorarioLoja.QUAR_HORA_INI, '08:00')
      // super.typeValue(FormHorarioLoja.QUAR_HORA_FIM, '18:00')
      super.clickOnElement(FormHorarioLoja.BTN_QUINT)
      super.typeValue(FormHorarioLoja.QUIN_HORA_INI, '08:00')
      // super.typeValue(FormHorarioLoja.QUIN_HORA_FIM, '18:00')
      super.clickOnElement(FormHorarioLoja.BTN_SEXT)
      super.typeValue(FormHorarioLoja.SEXT_HORA_INI, '08:00')
      // super.typeValue(FormHorarioLoja.SEXT_HORA_FIM, '18:00')
      super.clickOnElement(FormHorarioLoja.BTN_SAB)
      super.typeValue(FormHorarioLoja.SAB_HORA_INI, '08:00')
      // super.typeValue(FormHorarioLoja.SAB_HORA_FIM, '18:00')
      super.clickOnElement(FormHorarioLoja.BTN_DOM)
      super.typeValue(FormHorarioLoja.DOM_HORA_INI, '08:00')
      // super.typeValue(FormHorarioLoja.DOM_HORA_FIM, '18:00')
  
    }

    static acesso_agenda(){
      super.clickOnElement(AgendaRecepcao.INP_EMAIL)
      super.typeValue(AgendaRecepcao.INP_EMAIL, 'cobasi@cobasi-seller.com.br')
      super.typeValue(AgendaRecepcao.INP_PASS, '4mwV3e6X')
    }



    static preencher_horario_finais(){
      super.clickOnElement(FormHorarioLoja.SEG_HORA_FIM)
      super.typeValue(FormHorarioLoja.SEG_HORA_FIM, '18:00')

      // super.clickOnElement(FormHorarioLoja.SEXT_HORA_FIM)
      super.typeValue(FormHorarioLoja.SEXT_HORA_FIM, '18:00')
      // super.clickOnElement(FormHorarioLoja.CMP_VAZIO)

      super.typeValue(FormHorarioLoja.TER_HORA_FIM, '18:00')

      // super.clickOnElement(FormHorarioLoja.SAB_HORA_FIM)
      super.typeValue(FormHorarioLoja.SAB_HORA_FIM, '18:00')
      // super.typeValue(FormHorarioLoja.TER_HORA_FIM, '18:00')
      // super.clickOnElement(FormHorarioLoja.QUAR_HORA_FIM)
      super.typeValue(FormHorarioLoja.QUAR_HORA_FIM, '18:00')

      // super.clickOnElement(FormHorarioLoja.DOM_HORA_FIM)
      super.typeValue(FormHorarioLoja.DOM_HORA_FIM, '18:00')

      // super.clickOnElement(FormHorarioLoja.QUIN_HORA_FIM)
      super.typeValue(FormHorarioLoja.QUIN_HORA_FIM, '18:00')
      
      super.clickOnElement(IntervaloAgenda.BTN_HOR)
    }



    static preencher_vacina(){
      super.clickOnElement(TabServiço.BTN_BANHO)
      super.clickOnElement(TabServiço.BNT_BANH_TOSA)
      super.clickOnElement(TabServiço.BNT_BANH_TOSA_HIG)
      super.clickOnElement(TabServiço.BNT_BANH_TOSA_TES)
      super.clickOnElement(TabServiço.BNT_BANH_TOSA_TRI)
      super.clickOnElement(TabServiço.BTN_CONS_CLINC)
      super.clickOnElement(TabServiço.BTN_VAC)
      super.clickOnElement(TabServiço.BTN_VAC_2)
      super.clickOnElement(TabServiço.BTN_VAC_3)
      super.clickOnElement(TabServiço.BTN_VAC_4)
      super.clickOnElement(TabServiço.BTN_VAC_5)
      super.clickOnElement(TabServiço.BTN_VAC_6)
      super.clickOnElement(TabServiço.BTN_VAC_7)
      super.clickOnElement(TabServiço.BTN_VAC_8)
      super.clickOnElement(TabServiço.BTN_VAC_9)
      super.clickOnElement(TabServiço.BTN_VAC_10)
      super.clickOnElement(TabServiço.BTN_VAC_11)
      super.clickOnElement(TabServiço.BTN_VAC_12 )
    }

    static botao_salvar(){
      super.clickOnElement(SalvarCadastro.BTN_SALVAR)
    }

    static pesquisar_loja(){
      super.typeValue(ConsultarLoja.INP_CONSULTAR, 'Teste Automatizado')
      cy.wait(3000)
      super.clickOnElement(ConsultarLoja.BTN_SEARCH)
      cy.wait(3000)
    }
    
    static consultar_dados(){
      super.clickOnElement(ConsultarLoja.BTN_GET) 
    }

    static excluir_loja(){
      super.clickOnElement(ExcluirLoja.BTN_EXC)
      super.clickOnElement(ExcluirLoja.BTN_EXC_VAL)
    }
}
