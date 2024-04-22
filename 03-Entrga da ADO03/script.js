function identificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var conatinerImagem = window.document.getElementById('divImg');
    var ano = document.getElementById('ano-nasc');

    if (ano.value < 1900 || ano.value > anoAtual) {
        window.alert("Ano inválido.");
    } else {
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'imagem');
        var genero = document.getElementsByName('genero');
        var sexo = '';
        var idade = anoAtual - Number(ano.value);
        if (genero[0].checked) {
            sexo = "masculino";
            if (idade <= 10 && idade >= 0) {
                imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/retrato-de-menino_23-2150773106.jpg?size=626&ext=jpg&ga=GA1.1.337094557.1713735370&semt=ais');
            } else if (idade <= 25 && idade > 10) {
                imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/retrato-de-um-adolescente-sorridente_171337-893.jpg');
            } else if (idade <= 60 && idade > 25) {
                imagem.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCuqo7hOuzhY5GmRqtfruNCHLiBsHU8O8wjQLF4W1vw&s');
            } else if (idade > 60) {
                imagem.setAttribute('src', 'https://img.freepik.com/fotos-premium/homem-idoso-feliz_256588-850.jpg');
            }
        } else if (genero[1].checked) {
            sexo = "feminino";
            if (idade <= 10 && idade >= 0) {
                imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/linda-garotinha-loira-sorri-piscando-posando-tocando-o-rosto-com-as-maos-no-vestido-rosa-fofo-crianca-olhando-feliz-e-encantada-copie-o-espaco_176420-10150.jpg');
            } else if (idade <= 25 && idade > 10) {
                imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/a-mulher-bonita-que-veste-o-revestimento-ocasional-da-sarja-de-nimes-sobre-a-parede-isolada-entrega-junto-e-os-dedos-cruzados-sorrindo-relaxado-e-alegre-sucesso-e-otimista_231208-1256.jpg');
            } else if (idade <= 60 && idade > 25) {
                imagem.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyQ143lc1_w4X8FjZXLpWPbbtGh27gDXPd9GNru3E_w&s');
            } else if (idade > 60) {
                imagem.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3ImXK4AKEZzISFhaRobGHau-1TE7A_BXBlrm8u1jJQ&s');
            }
        }
    }

    conatinerImagem.innerHTML = `A pessoa identificada é do gênero ${sexo} com ${idade} anos.`;
    conatinerImagem.appendChild(imagem);
}