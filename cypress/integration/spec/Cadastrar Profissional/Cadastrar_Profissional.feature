Feature: Cadastrar Profissional

    Background: Iniciar sistema
      Given que esteja na página home
      And que esteja logado com "cobasi@cobasi-seller.com.br"
      # And acesso o sistema e clico em Nova loja de Parceiro


    @filter-scenario
    # Scenario: Acessar Formulario de Cadastro de Novo Profissional 
    #   When acesso o sistema e clico em Profissionais Parceiro e aciono o botao Profissionais freelancers ou substitutos
    #   Then visualizo feed de profissionais e aciono a opção de Adicionar Profissional
    #   And Dados do Profissional
    #   And Inserir Foto
    #   And Perfil de Atendimento
    #   And Serviços Prestado
      
    @filter-scenario
    Scenario: Cadastrar Novo Profissional 
      When acesso o sistema e clico em Profissionais Parceiro e aciono o botao Profissionais freelancers ou substitutos
      And clico na opção Adicionar Profissional e preencho os dados inicias 
      Then preencho os campos do formulario
      And clico no botao Salvar para finalizar o cadastro do novo Profissional
    
    #  @filter-scenario
    #  Scenario: Consultar Loja Cadastrada 
    #   When acesso o sistema e pesquiso pela loja cadastrada Teste Automatizado
    #   And selecionar a loja que foi pesquisada
    #   Then Validar os campos preenchidos

      


# Dado ou Given == Pré requisito
# Quando ou When == Ações
# Então ou Then == validações das ações 