

const paragrafo = document.getElementById("teste");
const tabelaProfessor = document.getElementById("professorTableDados");
const modalNomeProfessor = document.getElementById("professor-nome");
const modalCpfProfessor = document.getElementById("professor-cpf");
const modalIDProfessor = document.getElementById("professor-id");
const botaoExcluir = document.getElementById("btn-excluir");

botaoExcluir.addEventListener("click", excluirProfessor);

const botaolimpar = document.getElementById("btn-limpar");
botaolimpar.addEventListener("click", limpar);
const botaoAtualizar = document.getElementById("btn-salvar");
botaoAtualizar.addEventListener("click", salvarProfessor)




function mostrarDetalhes(id, cpf, nome) {
   
    modalIDProfessor.value = id;
    modalCpfProfessor.value = cpf;
    modalNomeProfessor.value = nome;

}

async function excluirProfessor() {
    const pID = modalIDProfessor.value;
    console.log("vou deletar o id ", pID);

    const retorno = await window.senacAPI.excluirProfessor(pID);
    mostrarDetalhes("", "", "");
    carregarProfessor();//após deleção atualiza a lista de alunos

}

async function atualizarProfessor() {
    const pID = modalIDProfessor.value;
    const pNome = modalNomeProfessor.value;
    const pCpf = modalCpfProfessor.value;

    console.log("vou atualizar o id ", pID);

    const retorno = await window.senacAPI.atualizarProfessor(pID, pNome, pCpf);
    console.log(retorno);

    carregarProfessor();//após deleção atualiza a lista de alunos
}

async function adicionarProfessor() {

    const pNome = modalNomeProfessor.value;
    const pCpf = modalCpfProfessor.value;

    console.log("vou adicionar o id ", pNome, pCpf);

    const retorno = await window.senacAPI.adicionarProfessor(pNome, pCpf);
    console.log(retorno);

    carregarProfessor();//após deleção atualiza a lista de alunos
}

function limpar() {
    modalIDProfessor.value = "";
    modalCpfProfessor.value = "";
    modalNomeProfessor.value = "";
}




async function carregarProfessor() {


    const listaProfessor = await window.senacAPI.buscarProfessor()
    tabelaProfessor.innerHTML = "";

    console.log(listaProfessor)
    listaProfessor.forEach(criarLinhaProfessor)

    if (!listaProfessor.length > 0) {

        tabelaProfessor.textContent = "sem dados"
    }

    lucide.createIcons(); // renderiza os ícones do Lucide

}

function criarLinhaProfessor(professor) {
    //paragrafo.textContent = paragrafo.textContent + aluno.nome

    //linha 
    const linha = document.createElement("tr");

    //nome
    const celulanome = document.createElement("td");
    celulanome.textContent = professor.nome;
    linha.appendChild(celulanome);

    //matricula
    const celulaCpf = document.createElement("td");
    celulaCpf.textContent = professor.cpf;
    linha.appendChild(celulaCpf);

    //botao de modificar
    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.addEventListener("click",
        function () { mostrarDetalhes(professor.id, professor.cpf, professor.nome) }
    );
    botao.textContent = 'teste';

    const icone = document.createElement("i")
    icone.setAttribute("data-lucide", "edit");
    botao.appendChild(icone);

    celulaBotao.appendChild(botao);


    linha.appendChild(celulaBotao);


    //final adiciono a linha criada com matricula,nome e botao à tabela
    tabelaProfessor.appendChild(linha);

}




function salvarProfessor() {
    const pID = modalIDProfessor.value;
    if (pID) {
        atualizarProfessor();
    } else {
        adicionarProfessor();
    }
}


carregarProfessor();