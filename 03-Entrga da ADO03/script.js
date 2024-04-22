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
        }else if(idade <= 25){
            imagem.src = "https://img.freepik.com/fotos-gratis/retrato-de-um-adolescente-sorridente_171337-893.jpg";
            conatinerImagem.appendChild(imagem);
        }else if(idade <= 60){
            imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCuqo7hOuzhY5GmRqtfruNCHLiBsHU8O8wjQLF4W1vw&s";
            conatinerImagem.appendChild(imagem);
        }else if(idade > 60){
            imagem.src = "https://img.freepik.com/fotos-premium/homem-idoso-feliz_256588-850.jpg";
            conatinerImagem.appendChild(imagem);
        }
    }

    if(genero === "Feminino"){
        if(idade <= 10){
            imagem.src = "https://img.freepik.com/fotos-gratis/linda-garotinha-loira-sorri-piscando-posando-tocando-o-rosto-com-as-maos-no-vestido-rosa-fofo-crianca-olhando-feliz-e-encantada-copie-o-espaco_176420-10150.jpg";
            conatinerImagem.appendChild(imagem);
        }else if(idade <= 25){
            imagem.src = "https://img.freepik.com/fotos-gratis/a-mulher-bonita-que-veste-o-revestimento-ocasional-da-sarja-de-nimes-sobre-a-parede-isolada-entrega-junto-e-os-dedos-cruzados-sorrindo-relaxado-e-alegre-sucesso-e-otimista_231208-1256.jpg";
            conatinerImagem.appendChild(imagem);
        }else if(idade <= 60){
            imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyQ143lc1_w4X8FjZXLpWPbbtGh27gDXPd9GNru3E_w&s";
            conatinerImagem.appendChild(imagem);
        }else if(idade > 60){
            imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3ImXK4AKEZzISFhaRobGHau-1TE7A_BXBlrm8u1jJQ&s";
            conatinerImagem.appendChild(imagem);
        }
    }
}