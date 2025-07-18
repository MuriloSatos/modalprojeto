

const paragrafo = document.getElementById('Mostrar');
const tabelaProduto = document.getElementById('ProdutoTableDados');
const modalCodProduto = document.getElementById('codigo-produto');
const modalNomeProduto = document.getElementById('nome-produto');
const modalTipoProduto = document.getElementById('tipo-produto');
const modalPrecoProduto = document.getElementById('preco-produto')
const modalTamProduto = document.getElementById('tamanho-produto')
const modalMarcaProduto = document.getElementById('marca-produto')
const modalId = document.getElementById('id-produto')

const campoBusca = document.getElementById('busca-dev');
//campoBusca.addEventListener('input', filtrarDevs)


const botaoExcluir = document.getElementById('btn-excluir');
botaoExcluir.addEventListener('click',excluirProduto)
const botaolimpar = document.getElementById('btn-limpar');
botaolimpar.addEventListener('click',limpar)
const botaoSalvar = document.getElementById('btn-salvar');
botaoSalvar.addEventListener('click',salvarProduto)

const botaoBuscar = document.getElementById('btn-buscar');
botaoBuscar.addEventListener('click', carregarDevs)


function filtrarDevs() {
    const termo = campoBusca.value.toLowerCase();
    const filtrados = listaDevsProduto.filter(d => d.nomeproduto.toLowerCase().includes(termo));
    renderizarDevs(filtrados);
}


let listaDevsProduto = []

async function carregarDevs() {
    const lista = await window.todosAPI.buscarProdutoNome(campoBusca.value);
    listaDevsProduto = lista;
    renderizarDevs(lista)

}

function renderizarDevs(lista) {
    tabelaProduto.innerHTML = ""
    lista.forEach(criarLinhaProduto)
    if (!lista.length > 0) {
        tabelaProduto.textContent = 'sem dados'
    }
    lucide.createIcons();
}



function mostrarDetalhes(nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto,id){
modalNomeProduto.value = nomeproduto;
modalTipoProduto.value = tipoproduto;
modalPrecoProduto.value = preco;
modalTamProduto.value = tamanhoproduto;
modalMarcaProduto.value = marcaproduto;
modalCodProduto.value = codigoproduto;
modalId.value = id;
}


async function excluirProduto(){
    const id = modalId.value;
    const retorno = await window.todosAPI.excluirProduto(id);
    mostrarDetalhes("","","","","","","");
    carregarProduto();//após deleção atualiza a lista de produto
    
}


async function atualizarProduto(){
    const id = modalId.value;
    const nomepro = modalNomeProduto.value;
    const tipo = modalTipoProduto.value;
    const preco = modalPrecoProduto.value;
    const tamanho = modalTamProduto.value;
    const marca = modalMarcaProduto.value;
    const cod = modalCodProduto.value;

    
    const retorno = await window.todosAPI.atualizarProduto(id,nomepro,tipo,preco,tamanho,marca,cod);
    console.log(retorno);

    carregarProduto();//após deleção atualiza a lista de alunos
}


async function adicionarProduto(){
    const nomepro = modalNomeProduto.value;
    const tipo = modalTipoProduto.value;
    const preco = modalPrecoProduto.value;
    const tamanho = modalTamProduto.value;
    const marca = modalMarcaProduto.value;
    const cod = modalCodProduto.value;


    const retorno = await window.todosAPI.adicionarProduto(nomepro,tipo,preco,tamanho,marca,cod);
    console.log(retorno);

    carregarProduto();//após deleção atualiza a lista de alunos
 }
  
function limpar(){
    modalId.value = "";
    modalNomeProduto.value = "";
    modalTipoProduto.value = "";
    modalPrecoProduto.value = "";
    modalTamProduto.value = "";
    modalMarcaProduto.value = "";
    modalCodProduto.value = "";

}


async function carregarProduto(){

    
    const listaProduto = await window.todosAPI.buscarProduto();
    tabelaProduto.innerHTML = "";

     console.log(listaProduto)
    listaProduto.forEach(criarLinhaProduto)

    if (! listaProduto.length > 0 ){

        tabelaProduto.textContent ="sem dados"
    }

    
    let clienteNaoPode = localStorage.getItem("perfil");
    console.log(clienteNaoPode)
    if (clienteNaoPode !== 'adm') {

        botaoExcluir.disabled = true;
        botaoSalvar.disabled = true;

    }
    
    lucide.createIcons(); // renderiza os ícones do Lucide

}


function criarLinhaProduto(produto){
      const linha = document.createElement("tr");

    //nome
    const celulanome = document.createElement("td");
    celulanome.textContent = produto.nomeproduto;
    linha.appendChild(celulanome);

    //matricula
    const celulaTipo = document.createElement("td");
    celulaTipo.textContent = produto.tipoproduto;   
    linha.appendChild(celulaTipo);

    const celulaPreco = document.createElement("td");
    celulaPreco.textContent = produto.preco;   
    linha.appendChild(celulaPreco);

    const celulaTamanho = document.createElement("td");
    celulaTamanho.textContent = produto.tamanhoproduto;   
    linha.appendChild(celulaTamanho);

    const celulaMarca = document.createElement("td");
    celulaMarca.textContent = produto.marcaproduto;   
    linha.appendChild(celulaMarca);

    const celulaCodigo = document.createElement("td");
    celulaCodigo.textContent = produto.codigoproduto;   
    linha.appendChild(celulaCodigo);

    const celulaId = document.createElement("td");
    celulaId.textContent = produto.id;   
    linha.appendChild(celulaId);


    //botao de modificar
    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click", 
                                    function () { mostrarDetalhes(produto.nomeproduto,produto.tipoproduto,produto.preco,produto.tamanhoproduto,produto.marcaproduto,produto.codigoproduto,produto.id) }
                                );
    botao.textContent = 'Mostrar';    
    
    const icone = document.createElement("i")
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);

    celulaBotao.appendChild(botao);


    linha.appendChild(celulaBotao);


    //final adiciono a linha criada com matricula,nome e botao à tabela
    tabelaProduto.appendChild(linha);

}

function salvarProduto(){
    const id = modalId.value;
    if(id){
        atualizarProduto();
    } else {
        adicionarProduto();
    }

}

carregarProduto()