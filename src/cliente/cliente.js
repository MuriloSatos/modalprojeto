

const paragrafo = document.getElementById('teste');
const tabelaCliente = document.getElementById('clienteTableDados');
const modalNomeCliente = document.getElementById('cliente-nome');
const modalSenhaCliente = document.getElementById('cliente-senha');
const modalCpfCliente = document.getElementById('cliente-cpf');
const modalIdCliente = document.getElementById('cliente-id')
const botaoExcluir = document.getElementById('btn-excluir');
const modalClienteEmail = document.getElementById('cliente-email')
botaoExcluir.addEventListener('click', excluirCliente)

const botaolimpar = document.getElementById('btn-limpar');
botaolimpar.addEventListener('click', limpar)
const botaoAtualizar = document.getElementById('btn-salvar');
botaoAtualizar.addEventListener('click', salvarCliente)

const campoBusca = document.getElementById('busca-dev');

const botaoBuscar = document.getElementById('btn-buscar');
botaoBuscar.addEventListener('click', carregarDevs)

function filtrarDevs() {
    const termo = campoBusca.value.toLowerCase();
    const filtrados = listaDevsCliente.filter(d => d.nome, email.toLowerCase().includes(termo));
    renderizarDevs(filtrados);
}


let listaDevsCliente = []

async function carregarDevs() {
    const lista = await window.todosAPI.buscarClienteDevs(campoBusca.value);
    listaDevsCliente = lista;
    renderizarDevs(lista)

}

function renderizarDevs(lista) {
    tabelaCliente.innerHTML = ""
    lista.forEach(criarLinhaCliente)
    if (!lista.length > 0) {
        tabelaCliente.textContent = 'sem dados'
    }
    lucide.createIcons();
}



function mostrarDetalhes(nome, senha, cpf, email, id) {
    modalNomeCliente.value = nome;
    modalSenhaCliente.value = senha;
    modalCpfCliente.value = cpf;
    modalClienteEmail.value = email;
    modalIdCliente.value = id;
}



async function excluirCliente() {
    const id = modalIdCliente.value;
    const retorno = await window.todosAPI.excluirCliente(id);
    mostrarDetalhes("", "", "", "", "");
    carregarCliente();//após deleção atualiza a lista de alunos

}


async function atualizarCliente() {
    const id = modalIdCliente.value;
    const nome = modalNomeCliente.value;
    const senha = modalSenhaCliente.value;
    const email = modalClienteEmail.value;


    const retorno = await window.todosAPI.atualizarCliente(id, nome, senha, email);
    console.log(retorno);

    carregarCliente();//após deleção atualiza a lista de alunos
}


async function adicionarCliente() {
    const nome = modalNomeCliente.value;
    const senha = modalSenhaCliente.value;
    const email = modalClienteEmail.value;
    const cpf = modalCpfCliente.value;

    const retorno = await window.todosAPI.adicionarCliente(nome, senha, email, cpf);
    console.log(retorno);

    carregarCliente();//após deleção atualiza a lista de alunos
}

function limpar() {
    modalNomeCliente.value = "";
    modalSenhaCliente.value = "";
    modalCpfCliente.value = "";
    modalClienteEmail.value = "";
    modalIdCliente.value = "";

}


async function carregarCliente() {


    const listaCliente = await window.todosAPI.buscarCliente();
    tabelaCliente.innerHTML = "";

    console.log(listaCliente)
    listaCliente.forEach(criarLinhaCliente)

    if (!listaCliente.length > 0) {

        tabelaCliente.textContent = "sem dados"
    }

    // renderiza os ícones do Lucide

    let clienteNaoPode = localStorage.getItem("perfil");
    console.log(clienteNaoPode)
    if (clienteNaoPode !== 'adm') {

        botaoExcluir.disabled = true;
        botaoAtualizar.disabled = true;

    }

    lucide.createIcons();
}



function criarLinhaCliente(cliente) {
    const linha = document.createElement("tr");

    //nome
    const celulanome = document.createElement("td");
    celulanome.textContent = cliente.nome;
    linha.appendChild(celulanome);

    //matricula
    const celulaSenha = document.createElement("td");
    celulaSenha.textContent = cliente.senha;
    linha.appendChild(celulaSenha);

    const celulaCpf = document.createElement("td");
    celulaCpf.textContent = cliente.cpf;
    linha.appendChild(celulaCpf);

    const celulaEmail = document.createElement("td");
    celulaEmail.textContent = cliente.email;
    linha.appendChild(celulaEmail);

    const celulaId = document.createElement("td");
    celulaId.textContent = cliente.id;
    linha.appendChild(celulaId);



    //botao de modificar
    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click",
        function () { mostrarDetalhes(cliente.nome, cliente.senha, cliente.cpf, cliente.email, cliente.id) }
    );
    botao.textContent = 'teste';

    const icone = document.createElement("i")
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);

    celulaBotao.appendChild(botao);


    linha.appendChild(celulaBotao);


    //final adiciono a linha criada com matricula,nome e botao à tabela
    tabelaCliente.appendChild(linha);

}

function salvarCliente() {
    const id = modalIdCliente.value;
    if (id) {
        atualizarCliente();
    } else {
        adicionarCliente();
    }

}



carregarCliente()