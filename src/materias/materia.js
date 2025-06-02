
const tabelaMateria = document.getElementById("materiaTableDados");
const modalIDMateria = document.getElementById("materia-id");
const modalNomeMateria = document.getElementById("materia-nome");
const modalDescricaoMateria = document.getElementById("materia-descricao");
const modalIDCurso = document.getElementById("materia-idCurso");
const botaoExcluirMateria = document.getElementById("btn-excluir");
const botaoLimparMateria = document.getElementById("btn-limpar");
const botaoSalvarMateria = document.getElementById("btn-salvar");
const drop = document.getElementById("idcurso");



// Eventos
botaoExcluirMateria.addEventListener("click", excluirMateria);
botaoLimparMateria.addEventListener("click", limparMateria);
botaoSalvarMateria.addEventListener("click", salvarMateria);

// Funções CRUD para matéria
function mostrarDetalhesMateria(id, nome, descricao, idcurso) {
    modalIDMateria.value = id;
    modalNomeMateria.value = nome;
    modalDescricaoMateria.value = descricao;
    modalIDCurso.value = idcurso;
    alimenatar();
}

async function excluirMateria() {
    const id = modalIDMateria.value;
    await window.senacAPI.excluirMateria(id);
    mostrarDetalhesMateria("", "", "", "");
    carregarMateria();
}

async function atualizarMateria() {
    const id = modalIDMateria.value;
    const nome = modalNomeMateria.value;
    const descricao = modalDescricaoMateria.value;
    const idCurso = modalIDCurso.value;
    await window.senacAPI.atualizarMateria(id, nome, descricao, idCurso);
    carregarMateria();
}

async function adicionarMateria() {
    const nome = modalNomeMateria.value;
    const descricao = modalDescricaoMateria.value;
    const idCurso = modalIDCurso.value;
    await window.senacAPI.adicionarMateria(nome, descricao, idCurso);
    carregarMateria();
}

function limparMateria() {
    modalIDMateria.value = "";
    modalNomeMateria.value = "";
    modalDescricaoMateria.value = "";
    modalIDCurso.value = "";
}

async function carregarMateria() {
    const listaMateria = await window.senacAPI.buscarMateria();
    tabelaMateria.innerHTML = "";

    listaMateria.forEach(criarLinhaMateria);

    if (!listaMateria.length) {
        tabelaMateria.textContent = "sem dados";
    }

    lucide.createIcons();
}

function criarLinhaMateria(materia) {
    const linha = document.createElement("tr");

    const celulaId = document.createElement("td");
    celulaId.textContent = materia.id;
    linha.appendChild(celulaId);

    const celulaNome = document.createElement("td");
    celulaNome.textContent = materia.nome;
    linha.appendChild(celulaNome);

    const celulaDescricao = document.createElement("td");
    celulaDescricao.textContent = materia.descricao;
    linha.appendChild(celulaDescricao);

    const celulaIdCurso = document.createElement("td");
    celulaIdCurso.textContent = materia.idcurso;
    linha.appendChild(celulaIdCurso);

    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click", function () {
        mostrarDetalhesMateria(materia.id, materia.nome, materia.descricao, materia.idcurso);


    });
    botao.textContent = 'Editar';
    const icone = document.createElement("i");
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);
    celulaBotao.appendChild(botao);
    linha.appendChild(celulaBotao);

    tabelaMateria.appendChild(linha);
}

function salvarMateria() {
    const id = modalIDMateria.value;
    if (id) {
        atualizarMateria();
    } else {
        adicionarMateria();
    }
}

carregarMateria();


async function alimenatar() {

    const listaCurso = await window.senacAPI.buscarCurso();
    drop.innerHTML = "";
    listaCurso.forEach((listaCurso) => {
        const option = document.createElement("option");
        option.value = listaCurso.id;
        option.textContent = listaCurso.nome;
        drop.appendChild(option);
    });

};
