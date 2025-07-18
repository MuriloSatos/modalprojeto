const paragrafo = document.getElementById('teste');
const tabelaVenda = document.getElementById('VendaTableDados');
const tagSelect = document.getElementById('campoDropProduto');
const tagSelectCliente = document.getElementById('campoDropCliente');
const modalDataVenda = document.getElementById('data-venda');
const modalCodVenda = document.getElementById('codigo-venda');
const modalQuantidadePeca = document.getElementById('quantidade-peca');
const modalValor = document.getElementById('valor-total');
const modalStatus = document.getElementById('status-venda');

const campoBusca = document.getElementById('busca-dev');


const botaoExcluir = document.getElementById('btn-excluir');
botaoExcluir.addEventListener('click',excluirVenda)
const botaolimpar = document.getElementById('btn-limpar');
botaolimpar.addEventListener('click',limpar)
const botaoSalvar = document.getElementById('btn-salvar');
botaoSalvar.addEventListener('click',salvarVenda)




function mostrarDetalhes(codProduto, dataVenda, codVenda, quantidadePeca, valorTotal, statusvenda, idcliente) {
    console.log('codProduto:', codProduto);
    console.log('dataVenda:', dataVenda);
    console.log('codVenda:', codVenda);
    console.log('quantidadePeca:', quantidadePeca);
    console.log('valorTotal:', valorTotal);
    console.log('statusVenda:', statusvenda);
    console.log('idcliente:', idcliente);
    
    tagSelect.value = codProduto;
    modalDataVenda.value = new Date(dataVenda).toISOString().split('T')[0];
    modalCodVenda.value = codVenda;
    modalQuantidadePeca.value = quantidadePeca;
    modalValor.value = valorTotal;
    modalStatus.value = statusvenda;
    tagSelectCliente.value = idcliente;
}



 async function excluirVenda() {
    const codigovenda = modalCodVenda.value;
    const retorno = await window.todosAPI.excluirVenda(codigovenda);
    mostrarDetalhes("", "", "", "", "", "", "");
    carregarVenda();
    paragrafo.textContent = retorno;
}



async function atualizaVenda() {
    const id = tagSelectCliente.value;
    const codProduto = tagSelect.value;
    const dataVenda = modalDataVenda.value;
    const codVenda = modalCodVenda.value;
    const quantidadePeca = modalQuantidadePeca.value;
    const valorTotal = modalValor.value;
    const statusVenda = modalStatus.value;


    
    const retorno = await window.todosAPI.atualizarVenda(id,codProduto, dataVenda, codVenda, quantidadePeca, valorTotal, statusVenda);
    console.log(retorno);
    carregarVenda();
}


async function adicinarVenda(){
    const codigoproduto = tagSelect.value;
    const dataVenda = modalDataVenda.value;
    const codVenda = modalCodVenda.value;
    const quantidadePeca = modalQuantidadePeca.value;
    const valorTotal = modalValor.value;
    const statusVenda = modalStatus.value;

    const retorno = await window.todosAPI.adicionarVenda(codigoproduto,dataVenda, codVenda, quantidadePeca, valorTotal, statusVenda);
    console.log(retorno);
    carregarVenda();

}

function limpar(){
    tagSelectCliente.value = "";
    tagSelect.value = "";
    modalDataVenda.value = "";
    modalCodVenda.value = "";
    modalQuantidadePeca.value = "";
    modalValor.value = "";
    modalStatus.value = "";
}

async function carregarVenda() {
    const listaVenda = await window.todosAPI.buscarVenda();
    tabelaVenda.innerHTML = "";

    console.log(listaVenda);
    listaVenda.forEach(criarLinhaVenda);

    if(!listaVenda.length > 0) {
        tabelaVenda.textContent = 'sem dados';
    }

    let clienteNaoPode = localStorage.getItem("perfil");
    if( clienteNaoPode !== "adm") {
        botaoExcluir.disabled = true;
        botaoSalvar.disabled = true;
        botaoBuscar.disabled = true;
    }

   
    listaCodP();
    listaCodC();
    lucide.createIcons();
}



function criarLinhaVenda(venda){
    const linha = document.createElement("tr");

    const celulaCodPro = document.createElement("td");
    celulaCodPro.textContent = venda.codigoproduto;
    linha.appendChild(celulaCodPro);

    const celuladata = document.createElement("td");
    celuladata.textContent = new Date(venda.datavenda).toLocaleDateString('pt-BR');
    linha.appendChild(celuladata);

    const celulaCodVen = document.createElement("td");
    celulaCodVen.textContent = venda.codigovendas;
    linha.appendChild(celulaCodVen);

    const celulaQuantidade = document.createElement("td");
    celulaQuantidade.textContent = venda.pecaquantidade;
    linha.appendChild(celulaQuantidade);

    const celulaValorTotal = document.createElement("td");
    celulaValorTotal.textContent = venda.valortotal;
    linha.appendChild(celulaValorTotal);

    const celulaStatus = document.createElement("td");
    celulaStatus.textContent = venda.statusvenda;
    linha.appendChild(celulaStatus);

    const celulaId = document.createElement("td");
    celulaId.textContent = venda.idcliente;
    linha.appendChild(celulaId);

    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click", function () {
        mostrarDetalhes(
            venda.codigoproduto,
            venda.datavenda,
            venda.codigovendas,
            venda.pecaquantidade,
            venda.valortotal,
            venda.statusvenda,
            venda.idcliente
        );
    });

    botao.textContent = 'Mostrar';
    const icone = document.createElement("i");
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);
    celulaBotao.appendChild(botao);
    linha.appendChild(celulaBotao);

    tabelaVenda.appendChild(linha);
}


function salvarVenda() {
    const id = tagSelectCliente.value;
    if (id) {
        atualizaVenda();
    } else {
        adicinarVenda();
    }

}

async function listaCodP() {
    const listaproduto = await window.todosAPI.buscarProduto();
    listaproduto.forEach(mostrarDetalhesProduto);
}


async function listaCodC() {
    console.log("vou chamar os clientes");
    const listaCliente = await window.todosAPI.buscarCliente();
    console.log(listaCliente);
    listaCliente.forEach(mostrarDetalhesCliente);
}


function mostrarDetalhesProduto(codProduto) {
    const option = document.createElement("option");
    option.value = codProduto.codigoproduto;
    option.textContent = codProduto.nomeproduto;
    tagSelect.appendChild(option);
}


function mostrarDetalhesCliente(Cliente) {
    const option = document.createElement("option");
    option.value = Cliente.id;
    option.textContent = Cliente.nome;
    tagSelectCliente.appendChild(option);
}

carregarVenda();

