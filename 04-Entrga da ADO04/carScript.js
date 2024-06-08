function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('CarrinhoCompras')) || [];
    const listaCarrinho = document.getElementById('carrinho-produtos').querySelector('tbody');
    
    listaCarrinho.innerHTML = ''; // Limpa a lista antes de adicionar os itens
    
    carrinho.forEach((item, index) => {
        const tr = document.createElement('tr');
        const tdNum = document.createElement('td');
        const tdId = document.createElement('td');
        const tdNome = document.createElement('td');
        const tdValorUnitario = document.createElement('td');
        const tdQuantidade = document.createElement('td');
        const tdValorTotal = document.createElement('td');
        const tdAcao = document.createElement('td');
        const btnRemover = document.createElement('button');
        
        tdNum.textContent = index + 1;
        tdId.textContent = item.idProduto;
        tdNome.textContent = item.nomeProduto;
        tdValorUnitario.textContent = item.valorUnitarioProduto.toFixed(2);
        tdQuantidade.textContent = item.quantidade;
        tdValorTotal.textContent = (item.valorUnitarioProduto * item.quantidade).toFixed(2);
        
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerItemCarrinho(index);
        
        tdAcao.appendChild(btnRemover);
        
        tr.appendChild(tdNum);
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdValorUnitario);
        tr.appendChild(tdQuantidade);
        tr.appendChild(tdValorTotal);
        tr.appendChild(tdAcao);
        
        listaCarrinho.appendChild(tr);
    });
}

function removerItemCarrinho(index) {
    const carrinho = JSON.parse(localStorage.getItem('CarrinhoCompras')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('CarrinhoCompras', JSON.stringify(carrinho));
    carregarCarrinho();
}

function finalizarCompra() {
    const numeroCartao = prompt('Informe o número do cartão de crédito:');
    const senhaCartao = prompt('Informe a senha do cartão:');
     
    if (numeroCartao && senhaCartao) {
        alert('Compra efetuada com sucesso!');
        localStorage.removeItem('CarrinhoCompras');
        window.location.href = 'vitrine.html';
    } else {
        alert('Dados do cartão não informados. Tente novamente.');
    }
}

function voltarVitrine() {
    window.location.href = 'vitrine.html';
}

document.addEventListener('DOMContentLoaded', carregarCarrinho);

document.getElementById('finalizar-compra').addEventListener('click', finalizarCompra);

document.getElementById('voltar-vitrine').addEventListener('click', voltarVitrine);

