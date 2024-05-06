var films = [
            "Os Sete Samurais (1954)",
            "Bonnie e Clyde - Uma Rajada de Balas (1967)",
            "Apertem os Cintos. . . O Piloto Sumiu (1980)",
            "Doutor Jivago (1965)",
            "Contatos Imediatos de Terceiro Grau (1977)",
            "Quem Quer Ser um Milionário? (2008)",
            "A Ponte do Rio Kwai (1957)",
            "O Exterminador do Futuro (1984)"
            ];

const link = document.createElement("a");
var message = document.createTextNode("Aqui estão os melhores filmes eleitos por Hollywood!");

function load(){
    document.getElementById("message").appendChild(message);
    films.forEach((film, index) => {
        const itemListFilm = document.createElement("li");
        itemListFilm.innerHTML = `${index+1} - ${film}`;
        document.getElementById("filmList").appendChild(itemListFilm);
    });
}
