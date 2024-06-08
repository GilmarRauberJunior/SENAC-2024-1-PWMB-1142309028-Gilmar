const produtos = [
    {
        idProduto: 1,
        nomeProduto: "Smartphone",
        descricaoProduto: "Smartphone de última geração",
        valorUnitarioProduto: 1999.99,
        qtdEstoqueProduto: 50,
        urlImgProduto: "assets/smartphone.jpeg",
        nomeArquivoImgProduto: "smartphone.jpeg"
    },
    {
        idProduto: 2,
        nomeProduto: "Laptop",
        descricaoProduto: "Laptop com alta performance",
        valorUnitarioProduto: 2999.99,
        qtdEstoqueProduto: 30,
        urlImgProduto: "assets/laptop.jpeg",
        nomeArquivoImgProduto: "laptop.jpeg"
    },
    {
        idProduto: 3,
        nomeProduto: "Tablet",
        descricaoProduto: "Tablet para todas as ocasiões",
        valorUnitarioProduto: 1499.99,
        qtdEstoqueProduto: 40,
        urlImgProduto: "assets/tablet.jpeg",
        nomeArquivoImgProduto: "tablet.jpeg"
    },
    // Adicione mais produtos conforme necessário
];

localStorage.setItem('Produtos', JSON.stringify(produtos));

document.addEventListener('DOMContentLoaded', () => {
    const produtos = JSON.parse(localStorage.getItem('Produtos')) || [];

    function montarTabelaProdutos(produtos) {
        const tabela = document.getElementById('vitrine');
        tabela.innerHTML = '';

        produtos.forEach(produto => {
            const div = document.createElement('div');
            div.className = 'product-card';
            
            const img = document.createElement('img');
            img.src = produto.urlImgProduto;
            div.appendChild(img);
            
            const h2 = document.createElement('h2');
            h2.textContent = produto.nomeProduto;
            div.appendChild(h2);
            
            const pDesc = document.createElement('p');
            pDesc.textContent = produto.descricaoProduto;
            div.appendChild(pDesc);
            
            const pPrice = document.createElement('p');
            pPrice.textContent = `Preço: R$ ${produto.valorUnitarioProduto.toFixed(2)}`;
            div.appendChild(pPrice);
            
            const button = document.createElement('button');
            button.textContent = 'Adicionar ao Carrinho';
            button.onclick = () => adicionarAoCarrinho(produto.idProduto);
            div.appendChild(button);

            tabela.appendChild(div);
        });
    }

    function adicionarAoCarrinho(idProduto) {
        const produto = produtos.find(p => p.idProduto === idProduto);
        if (produto) {
            let carrinho = JSON.parse(localStorage.getItem('CarrinhoCompras')) || [];
            const itemIndex = carrinho.findIndex(item => item.idProduto === idProduto);

            if (itemIndex >= 0) {
                carrinho[itemIndex].quantidade += 1;
            } else {
                carrinho.push({ 
                    idProduto: produto.idProduto,
                    nomeProduto: produto.nomeProduto,
                    valorUnitarioProduto: produto.valorUnitarioProduto,
                    quantidade: 1
                });
            }
            
            localStorage.setItem('CarrinhoCompras', JSON.stringify(carrinho));
            alert('Produto adicionado ao carrinho!');
        }
    }

    function montarTelaCompleta(cliente) {
        document.getElementById('cliente-info').style.display = 'block';
        document.getElementById('cliente-avatar').src = cliente.urlAvatarCliente;
        document.getElementById('cliente-nome').textContent = cliente.nomeCliente;
        montarTabelaProdutos(produtos);
    }

    function montarTelaParcial() {
        montarTabelaProdutos(produtos);
    }

    function verificarUsuario() {
        const cliente = JSON.parse(localStorage.getItem('LoginCliente'));
        if (cliente) {
            montarTelaCompleta(cliente);
        } else {
            montarTelaParcial();
        }
    }

    document.getElementById('ver-carrinho').addEventListener('click', () => {
        window.location.href = 'carrinho.html';
    });

    verificarUsuario();
});
