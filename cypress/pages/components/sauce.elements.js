const Login = {
    INP_USER     : '[datatest="input-email-login-enter"]',
    INP_PASSWORD : '[datatest="input-password-login-enter"]',
    BTN_LOGIN    : '[datatest="button-login-enter"]'
}

const Home = {
    MENU_HOME : ':nth-child(2) > .cursor-pointer > .text-center',
    BTN_LJ_PRCR  : '.generalFilterButtonDefinitions',
    BTN_NOVO_PARCEIRO   :':nth-child(3) > .cursor-pointer > .text-center',
    BTN_PROFI_FREE_SUB  :'.sc-bYoBSM > :nth-child(2)',
    BTN_ADD_PROFI       :'.sc-iNGGcK',

    // campos formulario cadastrar novo profissional
    CMP_DADOS_PROF  :'.sc-hiCibw > :nth-child(1)',
    CMP_INSERIR_FT      :'.iJBCSE > .sc-cCcXHH',
    CMP_PERFL_ATEND     :'.sc-hiCibw > :nth-child(7)',
    CMP_SERV_PRESTADOS      :'.sc-hiCibw > :nth-child(9)',


    // campos formulario cadastrar Loja 
    CMP_FRML    : 'h2.generalHeader',
    CMP_FRML_HOR   : 'form > :nth-child(7)',
    CMP_FRML_SERV   : 'form > :nth-child(11)'
}

// Campos Formulario NOVO SELLER

const Formulario ={
    INP_NOME_FANT   : ':nth-child(2) > :nth-child(1) > .form-group > .form-control',
    INP_COD_LOJA    : ':nth-child(2) > :nth-child(2) > .form-group',
    INP_ENDRC   : '.col-sm-5 > .form-group > .form-control',
    INP_CIDADE  : '.col-sm-3 > .form-group > .form-control',
    INP_LAT : ':nth-child(3) > .form-group > .form-control',
    INP_LONG    : ':nth-child(4) > .form-group > .form-control',
    INP_TELE    : ':nth-child(4) > .col-sm-6 > .form-group > .form-control'

}

const FormHorarioLoja ={
    BTN_SEG     : '.col-position-0 > .sc-eCImPb > label',
    SEG_HORA_INI   :'.col-position-0 > .form-group > :nth-child(1) > .react-datepicker__input-container > .form-control',
    SEG_HORA_FIM    :'.col-position-0 > .form-group > :nth-child(2) > .react-datepicker__input-container > .form-control',
    BTN_TER : '.col-position-1 > .sc-eCImPb > label',
    TER_HORA_INI    :'.col-position-1 > .form-group > :nth-child(1) > .react-datepicker__input-container > .form-control',
    TER_HORA_FIM    :'.col-position-1 > .form-group > :nth-child(2) > .react-datepicker__input-container > .form-control',
    BTN_QUAR    :'.col-position-2 > .sc-eCImPb > label',
    QUAR_HORA_INI   :'.col-position-2 > .form-group > :nth-child(1) > .react-datepicker__input-container > .form-control',
    QUAR_HORA_FIM   :'.col-position-2 > .form-group > :nth-child(2) > .react-datepicker__input-container > .form-control',
    BTN_QUINT   :'.col-position-3 > .sc-eCImPb > label',
    QUIN_HORA_INI   :'.col-position-3 > .form-group > :nth-child(1) > .react-datepicker__input-container > .form-control',
    QUIN_HORA_FIM   :'.col-position-3 > .form-group > :nth-child(2) > .react-datepicker__input-container > .form-control',
    BTN_SEXT    :'.col-position-4 > .sc-eCImPb > label',
    SEXT_HORA_INI   :'.col-position-4 > .form-group > :nth-child(1) > .react-datepicker__input-container > .form-control',
    SEXT_HORA_FIM   :'.col-position-4 > .form-group > :nth-child(2) > .react-datepicker__input-container > .form-control',
    BTN_SAB     :'.col-position-5 > .sc-eCImPb > label',
    SAB_HORA_INI    :'.col-position-5 > .form-group > :nth-child(1) > .react-datepicker__input-container > .form-control',
    SAB_HORA_FIM    :'.col-position-5 > .form-group > :nth-child(2) > .react-datepicker__input-container > .form-control',
    BTN_DOM     :'.col-position-6 > .sc-eCImPb > label',
    DOM_HORA_INI    :'.col-position-6 > .form-group > :nth-child(1) > .react-datepicker__input-container > .form-control',
    DOM_HORA_FIM    :'.col-position-6 > .form-group > :nth-child(2) > .react-datepicker__input-container > .form-control',
    CMP_VAZIO   :'.form'
}


const AgendaRecepcao ={
    INP_EMAIL   :':nth-child(6) > :nth-child(1) > .form-group > .form-control',
    INP_PASS    :':nth-child(6) > :nth-child(2) > .form-group > .form-control'
}

const IntervaloAgenda ={
    BTN_HOR     :'.input-group > :nth-child(1) > .custom-control'
}

const TabServiço ={
    BTN_BANHO   :':nth-child(1) > .py-3 > .custom-control',
    BNT_BANH_TOSA   :':nth-child(2) > .py-3 > .custom-control > .custom-control-label',
    BNT_BANH_TOSA_HIG   :':nth-child(3) > .py-3 > .custom-control > .custom-control-label',
    BNT_BANH_TOSA_TES   :':nth-child(4) > .py-3 > .custom-control > .custom-control-label',
    BNT_BANH_TOSA_TRI   :':nth-child(5) > .py-3 > .custom-control > .custom-control-label',
    BTN_CONS_CLINC      :':nth-child(6) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC      :':nth-child(7) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_2      :':nth-child(8) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_3      :':nth-child(9) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_4      :':nth-child(10) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_5      :':nth-child(11) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_6      :':nth-child(12) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_7      :':nth-child(13) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_12      :':nth-child(14) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_8      :':nth-child(15) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_9      :':nth-child(16) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_10      :':nth-child(17) > .py-3 > .custom-control > .custom-control-label',
    BTN_VAC_11     :':nth-child(18) > .py-3 > .custom-control > .custom-control-label',
}

const SalvarCadastro ={
    BTN_SALVAR      :'.btnSecondary'
}

const ConsultarLoja ={
    INP_CONSULTAR   :'.generalFilterInputDefinitions',
    BTN_SEARCH      :'.input-group-text',
    BTN_GET     :'.mr-3'
}

const ExcluirLoja ={
    BTN_EXC     :'.mr-2',
    BTN_EXC_VAL     :'.modal-footer > .btn-danger'
}

// Campos Formulario NOVO PROFISSIONAL

const FormularioDadosProfssionais ={
    INP_NOME    :':nth-child(1) > .sc-dkPtRN',
    INP_CPF     :'.sc-hiCibw > :nth-child(2) > :nth-child(2) > .sc-dkPtRN',
    CLICK_SEL_PROF_LOJA   :':nth-child(3) > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value',
    INP_SEL_PROF_LOJA   :'.search > input',
    CHECKBOX_GENERO     :'.sc-jcFjpl > :nth-child(3) > label',
    INP_TELEFONE    :':nth-child(4) > :nth-child(2) > .sc-bdvvtL > .sc-dkPtRN',
    INP_EMAIL   :':nth-child(3) > .sc-bdvvtL > .sc-dkPtRN',
    CHECKBOX_LOJA   :'.select-item > .sc-eCImPb > label',
    INP_SOBREMIN    :':nth-child(1) > .sc-hBUSln',
    INP_QUALI       :':nth-child(2) > .sc-hBUSln',

    // check box formulario cadastro perfil

    CHECK_DOG   :'.sc-cTAqQK > :nth-child(1) > :nth-child(2) > label',
    CHECK_CAT   :'.sc-cTAqQK > :nth-child(1) > :nth-child(3) > label',
    CHECK_COELHO   :':nth-child(1) > :nth-child(4) > label',
    CHECK_PORCO   :':nth-child(1) > :nth-child(5) > label',
    CHECK_FURAO   :':nth-child(1) > :nth-child(6) > label',
    CHECK_MINI   :'.sc-cTAqQK > :nth-child(2) > :nth-child(2) > label',
    CHECK_PEQ   :':nth-child(2) > :nth-child(3) > label',
    CHECK_MEDIO   :':nth-child(2) > :nth-child(4) > label',
    CHECK_GRAND   :':nth-child(2) > :nth-child(5) > label',
    CHECK_GIG   :':nth-child(2) > :nth-child(6) > label',
    CHECK_MANSO   :':nth-child(3) > :nth-child(2) > label',
    CHECK_BRAVO   :':nth-child(3) > :nth-child(3) > label',

    // MULTI SELECT SERVICO PRESTADO
    CLICK_SEL_SERVI     :'.sc-jObWnj > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value > .gray'



}

const InserirFotos ={
    FILE_FOTO   :'.sc-iAKWXU'
}

export{Login, Home, Formulario, FormHorarioLoja, IntervaloAgenda, TabServiço, SalvarCadastro, AgendaRecepcao, ConsultarLoja, ExcluirLoja, FormularioDadosProfssionais, InserirFotos}
