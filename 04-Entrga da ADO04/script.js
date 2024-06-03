function logar() {
    localStorage.setItem("nome", "Jurandir");
    localStorage.setItem("email", "jurandir@gmail.com");
    localStorage.setItem("senha", "1234*senha");
    localStorage.setItem("avatar", "https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_people_person_profile_student_user_icon_123383.png");
    localStorage.setItem("avatarArquivo", "./assets/avatar_cliente.png");

    let email = document.getElementById('emailCliente').value;
    let senha = document.getElementById('senhaCliente').value;

    if(email === localStorage.getItem("email")){
        window.open("./Produtos.html");
        const img = document.createElement("img");
        img.src = localStorage.getItem('avatar');
        img.width = '250px';
        img.height = '150px';
        window.document.getElementById('containerAvatarCliente').appendChild(img);
    }else{
        alert("Você não é um de nossos cliente, faça já seu cadastro.");
    }

}