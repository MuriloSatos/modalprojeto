

const paragrafo = document.getElementById("teste");
const tabelaCurso = document.getElementById("cursoTableDados");
const modalNomeCurso = document.getElementById("curso-nome");
const modalDescricaoCurso = document.getElementById("curso-descricao");
const modalIDCurso = document.getElementById("curso-id");
const botaoExcluir = document.getElementById("btn-excluir");

botaoExcluir.addEventListener("click", excluirCurso);

const botaolimpar = document.getElementById("btn-limpar");
botaolimpar.addEventListener("click", limpar);
const botaoAtualizar = document.getElementById("btn-salvar");
botaoAtualizar.addEventListener("click", salvarCurso);

function mostrarDetalhes(id, descricao, nome) {
    modalIDCurso.value = id;
    modalDescricaoCurso.value = descricao;
    modalNomeCurso.value = nome;
}

async function excluirCurso() {
    const cID = modalIDCurso.value;
    console.log("vou deletar o id ", cID);

    const retorno = await window.senacAPI.excluirCurso(cID);
    mostrarDetalhes("", "", "");
    carregarCurso();
}

async function atualizarCurso() {
    const cID = modalIDCurso.value;
    const cNome = modalNomeCurso.value;
    const cDescricao = modalDescricaoCurso.value;

    console.log("vou atualizar o id ", cID);

    const retorno = await window.senacAPI.atualizarCurso(cID, cNome, cDescricao);
    console.log(retorno);

    carregarCurso();
}

async function adicionarCurso() {
    const cNome = modalNomeCurso.value;
    const cDescricao = modalDescricaoCurso.value;

    console.log("vou adicionar o curso ", cNome, cDescricao);

    const retorno = await window.senacAPI.adicionarCurso(cNome, cDescricao);
    console.log(retorno);

    carregarCurso();
}

function limpar() {
    modalIDCurso.value = "";
    modalDescricaoCurso.value = "";
    modalNomeCurso.value = "";
}

async function carregarCurso() {
    const listaCurso = await window.senacAPI.buscarCurso();
    tabelaCurso.innerHTML = "";

    console.log(listaCurso);
    listaCurso.forEach(criarLinhaCurso);

    if (!listaCurso.length > 0) {
        tabelaCurso.textContent = "sem dados";
    }

    lucide.createIcons();
}

function criarLinhaCurso(curso) {
    const linha = document.createElement("tr");

    const celulanome = document.createElement("td");
    celulanome.textContent = curso.nome;
    linha.appendChild(celulanome);

    const celulaCodigo = document.createElement("td");
    celulaCodigo.textContent = curso.descricao;
    linha.appendChild(celulaCodigo);

    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click",
        function () { mostrarDetalhes(curso.id, curso.descricao, curso.nome) }
    );
    botao.textContent = 'Editar';

    const icone = document.createElement("i");
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);

    celulaBotao.appendChild(botao);

    linha.appendChild(celulaBotao);

    tabelaCurso.appendChild(linha);
}

function salvarCurso() {
    const cID = modalIDCurso.value;
    if (cID) {
        atualizarCurso();
    } else {
        adicionarCurso();
    }
}

carregarCurso();
