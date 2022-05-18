Feature: Consultar Loja Cadastrada

    Background: Iniciar sistema
      Given que esteja na página home
      And que esteja logado com "cobasi@cobasi-seller.com.br"


     @filter-scenario
     Scenario: Consultar Loja Cadastrada 
      When acesso o sistema e pesquiso pela loja cadastrada Teste Automatizado
      And selecionar a loja que foi pesquisada
      Then Validar os campos preenchidos
