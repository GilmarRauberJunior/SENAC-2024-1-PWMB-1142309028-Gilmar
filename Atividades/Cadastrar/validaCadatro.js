
const nomeCliente = window.document.getElementById('frmNomeCliente');
const celCliente = window.document.getElementById('frmCelCliente');
const emailCliente = window.document.getElementById('frmEmailCliente');
const btnBotao1 = document.getElementById('btnBotao1');
const btnBotao2 = document.getElementById('btnBotao2');
const btnBotao3 = document.getElementById('btnBotao3');
//
btnBotao1.style.display = "inline";
btnBotao2.style.display = "none";
btnBotao3.style.display = "none";
//
var regNome = new RegExp("[A-z ]{6,100}");
var regCelular = new RegExp("([2-9]?[0-9]{4})[- ]?([0-9]{4})$");
var regEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
var CONFIRMA_INCLUSAO = false;
function cadastarCliente(idCiclo) {
    //evento.preventDefault(); //não deixa carregar a página

    if (idCiclo == '1') {
        if (!validarEntrada()) {
            alert("Acerte os campos")
        } else {
            solicitaConfirmar()
        }
    } else {
        if (idCiclo == '2') {
            trataConfirmar()
        } else {
            trataCancelemaneto()
        }
    }

}
//
function validarEntrada() {
    //validar nome do cliente
    if (!regNome.test(nomeCliente.value)) {
        setErrorForm(nomeCliente, "Nome do Cliente Inválido");
        return false;
    } else {
        setSuccessForm(nomeCliente);
    }
    //Validar  numero do cleluar
    if (!regCelular.test(celCliente.value)) {
        setErrorForm(celCliente, "Numero do Celular  Inválido");
        return false;
    } else {
        setSuccessForm(celCliente);
    }
    //Validar  email
    if (!regEmail.test(emailCliente.value)) {
        setErrorForm(emailCliente, "Email Inválido");
        return false;
    } else {
        setSuccessForm(emailCliente);
    }
    //Todos os campos estão válidos
    return true

}
function setSuccessForm(idInput) {
    //buscar a DIV que envolve "inpput" para criar uma classe a ela
    const frmControl = idInput.parentElement;
    frmControl.className = "form-control success";

}
function setErrorForm(idInput, msgError) {
    //buscar a DIV que envolve "inpput" para criar uma classe a ela
    const frmControl = idInput.parentElement;
    const small = frmControl.querySelector('small');
    //adicionar msg de error
    small.innerText = msgError;
    //Adicionar classe de error
    frmControl.className = "form-control error";

}
function solicitaConfirmar() {
    btnBotao1.style.display = "none";
    btnBotao2.style.display = "inline";
    btnBotao3.style.display = "inline";
}
function trataConfirmar() {
    alert("Castrado com Sucesso")
    location.reload() 
}

function trataCancelemaneto() {
    const frmControl1 = nomeCliente.parentElement;
    frmControl1.className = "form-control reset";
    const frmControl2 = celCliente.parentElement;
    frmControl2.className = "form-control reset";
    const frmControl3 = emailCliente.parentElement;
    frmControl3.className = "form-control reset";
    btnBotao1.style.display = "inline";
    btnBotao2.style.display = "none";
    btnBotao3.style.display = "none";
}

