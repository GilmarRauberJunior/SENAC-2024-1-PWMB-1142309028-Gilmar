const clientes = [
    {
        emailCliente: "jurandir@gmail.com",
        senhaCliente: "senha123",
        nomeCliente: "Jurandir",
        urlAvatarCliente: "assets/avatar.png",
        nomeArquivoAvatarCliente: "avatar.png"
    }
];

function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    const cliente = clientes.find(c => c.emailCliente === email && c.senhaCliente === senha);
    
    if (cliente) {
        const loginCliente = {
            emailCliente: cliente.emailCliente,
            nomeCliente: cliente.nomeCliente,
            urlAvatarCliente: cliente.urlAvatarCliente,
            nomeArquivoAvatarCliente: cliente.nomeArquivoAvatarCliente
        };
        localStorage.setItem('LoginCliente', JSON.stringify(loginCliente));
        alert('Login bem-sucedido!');
        window.location.href = 'vitrine.html';
    } else {
        alert('Atenção; você não é nosso cliente, faça seu cadastro.');
        window.location.href = 'vitrine.html';
    }
}