Feature: Excluir Loja

    Background: Iniciar sistema
      Given que esteja na página home
      And que esteja logado com "cobasi@cobasi-seller.com.br"
    #   And acesso o sistema e clico em Nova loja de Parceiro


    @filter-scenario
    Scenario: Excluir Loja Cadastrada
      When pesquiso pela loja cadastrada
      And seleciono a loja que foi pesquisada
      Then clico no botao de excluir loja