const nomeCliente = window.document.getElementById("nomeCompleto");
const telefoneCliente = window.document.getElementById("telefoneCliente");
const emailCliente = window.document.getElementById("emailCliente");

var regNomeCliente = new RegExp("[A-z]{8,100}");
var regTelefoneCliente = new RegExp("{11,15}");
var regEmailCliente = new RegExp("[a-z][@.]");

function cadastrar(){
    if(validarCliente()){
        alert("Cadastro efetuado com sucesso!");
        limparTela();
    }
}

function validarCliente(){
    if(regNomeCliente.test(nomeCliente.value)){
        alert("Nome cadastrado.");
        return true;
    }else{
        alert("Nome não cadastrado.");
        return false;
    }

    if(regTelefoneCliente.test(telefoneCliente.value)){
        alert("Telefone Cadastrado.");
        return true;
    }else{
        alert("Telefone não cadastrado.");
        return false;
    }

    if(regEmailCliente.test(emailCliente.value)){
        return true;
        alert("E-mail cadastrado.");
    }else{
        alert("E-mail não cadastrado.")
        return false;
    }
}

function limparTela(){
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("telefoneCliente").value = "";
    document.getElementById("emailCliente").value = "";
}