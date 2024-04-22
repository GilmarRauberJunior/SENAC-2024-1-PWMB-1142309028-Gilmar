function desafio1() {
    var ano = document.getElementById("ano-nasc").value;

    var idade = 2024 - ano;
    console.log(idade);

    var genero = document.getElementById("genero").value;

    var imagem = document.createElement("img");
    var conatinerImagem = window.document.getElementById("imagem");

    if(genero === "Masculino"){
        if(idade <= 10){
            imagem.src = "https://img.freepik.com/fotos-gratis/retrato-de-menino_23-2150773106.jpg?size=626&ext=jpg&ga=GA1.1.337094557.1713735370&semt=ais";
            conatinerImagem.appendChild(imagem);
        }
    }
}

function inserir() {
    var resultado = document.getElementById("resultado");

    var numero = window.document.getElementById("numeros").value;
    var maior = numero + 1;
    var menor = numero - 1;
    var qtdNum = 1;

    if (numero > maior) {
        maior = numero;
    }

    if (numero < menor) {
        menor = numero;
    }

    var somaTotal = somaTotal + numero;
    qtdNum++;

    var mediaNum = somaTotal / qtdNum;

    var menorNum = document.createElement("p");
    menorNum.innerHTML = "Menor valor inserido: " + menor;
    resultado.appendChild(menorNum);
    var maiorNum = document.createElement("p");
    maiorNum.innerHTML = "Maior valor inserido: " + maiorNum;
    resultado.appendChild(maiorNum);
    var soma = document.createElement("p");
    soma.innerHTML = "A soma total dos valores é : " + somaTotal;
    resultado.appendChild(soma);
    var media = document.createElement("p");
    media.innerHTML = "A média dos valores é: " + mediaNum;
    resultado.appendChild(media);
}

function finalizar() {
    return false;
}