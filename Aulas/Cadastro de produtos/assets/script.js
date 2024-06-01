document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnCadastro").addEventListener("click", function () {
        var frutas = {
            nome: "Banana",
            desc: "Rica em potássio e ótima em salada de frutas e vitaminas."
        };
        
        localStorage.setItem("fruta", JSON.stringify(frutas));
        
        var fruta = localStorage.getItem("fruta");
        console.log(fruta);
    });
});