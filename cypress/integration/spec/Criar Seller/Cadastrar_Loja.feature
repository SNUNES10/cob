Feature: Cadastrar Loja

    Background: Iniciar sistema
      Given que esteja na página home
      And que esteja logado com "cobasi@cobasi-seller.com.br"
      # And acesso o sistema e clico em Nova loja de Parceiro


    @filter-scenario
    Scenario: Acessar Formulario de Novo Cadastro
      When acesso o sistema e clico em Nova loja de Parceiro
      Then visualizo um formulário para preenchimento dos Dados da loja parceiro
      And Horário da loja
      And Serviços e tabelas de preço
      
    @filter-scenario
    Scenario: Cadastrar Nova Loja 
      When acesso o sistema e clico em Nova loja de Parceiro
      And acesso o sistema e preencho os campos iniciais do formulário
      And seleciono os horarios e quais as vacinas da nova loja
      Then clico no botao Salvar para finalizar o cadastro
    
     @filter-scenario
     Scenario: Consultar Loja Cadastrada 
      When acesso o sistema e pesquiso pela loja cadastrada Teste Automatizado
      And selecionar a loja que foi pesquisada
      Then Validar os campos preenchidos

      


# Dado ou Given == Pré requisito
# Quando ou When == Ações
# Então ou Then == validações das ações 