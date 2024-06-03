// Script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifique se o email e a senha correspondem aos valores predefinidos
    if (email === 'joaozinho' && senha === '123') {
        // Login bem-sucedido
        localStorage.setItem('loggedIn', 'true'); // Armazene o estado de login
        window.location.href = 'Home.html'; // Redirecione para a página Home
    } else {
        document.getElementById('mensagemErro').textContent = 'Credenciais inválidas. Tente novamente.';
    }
});
// Script.js
document.getElementById('prontuarioForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nomePaciente = document.getElementById('nomePaciente').value;
    const diagnostico = document.getElementById('diagnostico').value;

    // Crie um objeto para representar o prontuário
    const prontuario = { nomePaciente, diagnostico };

    // Obtenha a lista de prontuários do armazenamento local (se existir)
    const listaProntuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];

    // Adicione o novo prontuário à lista
    listaProntuarios.push(prontuario);

    // Salve a lista atualizada no armazenamento local
    localStorage.setItem('prontuarios', JSON.stringify(listaProntuarios));

    // Atualize a exibição dos prontuários na página
    exibirProntuarios();
});

function exibirProntuarios() {
    const listaProntuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];
    const listaElement = document.getElementById('listaProntuarios');
    listaElement.innerHTML = '';

    listaProntuarios.forEach(prontuario => {
        const listItem = document.createElement('li');
        listItem.textContent = `Paciente: ${prontuario.nomePaciente}, Diagnóstico: ${prontuario.diagnostico}`;
        listaElement.appendChild(listItem);
    });
}

// Exiba os prontuários ao carregar a página
exibirProntuarios();
