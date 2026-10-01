const catalogoProdutos = [
    ['Notebook Vaio FE16 AMD Ryzen 5-5625U 16GB RAM 512GB SSD 16 Windows 11', 4.700,00, 'Notebook', 'imagens/transferir.avif']
    ['Samsung Galaxy S26 Ultra 5G RAM', 9.000,00, 'celular', 'imagens/shopping.webp']
    ['Mouse Gamer Logitech g Pro2 Lightspeed Sem Fio Preto', 600,00, 'mouse', 'imagens/ag910-007294-vs-2-1790687102607.webp']
];

const divCatalogo = document.getElementById('div-catalogo');

        function mostrarCatalogoProdutos(event) {
            if(event) event.preventDefault();

            const filtro = document.getElementById('filtro')
                .value
                .trim()
                .toLowerCase();

            let produtosFiltrados = [];
            divCatalogo.innerHTML = '';

            if (filtro !== '') {
                produtosFiltrados = catalogoProdutos
                    .filter(produto => produto[2].toLowerCase().includes(filtro));
            } else {
                produtosFiltrados = catalogoProdutos;
            }

            if(produtosFiltrados.length === 0) {
                divCatalogo.innerHTML = `<p class="filtro-erro">Nao há produtos nesta categoria</p>`;
                return;
            }

            produtosFiltrados.forEach((produto) => {
                const divCard = document.createElement('div');
                divCard.classList.add('div-card');

                const img = document.createElement('img');
                img.src = produto[3];
                img.classList.add('img-produto');

                const h3 = document.createElement('h3');
                h3.innerHTML = produto[0];

                const spanCategoria = document.createElement('span');
                spanCategoria.innerHTML = produto[2];
                spanCategoria.classList.add('span-categoria');

                const spanPreco = document.createElement('span');
                spanPreco.innerHTML = `R$ ${produto[1].toFixed(2).replace('.', ',')}`;
                spanPreco.classList.add('span-preco');

                divCard.appendChild(img);
                divCard.appendChild(h3);
                divCard.appendChild(spanCategoria);
                divCard.appendChild(spanPreco);

                divCatalogo.appendChild(divCard);
            });

        }
        mostrarCatalogoProdutos();