const { contextBridge, ipcRenderer } = require('electron')

function buscarAlunos() {
    return ipcRenderer.invoke('buscar-alunos');
}

function excluirAlunos(pID){
    
    return ipcRenderer.invoke('deletar-alunos',pID);
}

function atualizarAlunos(pID, pNome, pMatricula){
    
    return ipcRenderer.invoke('atualizar-alunos',pID,pNome,pMatricula);
}

function adicionarAlunos( pNome, pMatricula){
    
    return ipcRenderer.invoke('adicionar-alunos',pNome,pMatricula);
}



function buscarProfessor() {
    return ipcRenderer.invoke('buscar-professor');
}

function excluirProfessor(pID){
    
    return ipcRenderer.invoke('deletar-professor',pID);
}

function atualizarProfessor(pID, pNome, cpf){
    
    return ipcRenderer.invoke('atualizar-professor',pID,pNome,cpf);
}
function adicionarProfessor( pNome, cpf){
    
    return ipcRenderer.invoke('adicionar-professor',pNome,cpf);
}



function buscarCurso() {
    return ipcRenderer.invoke('buscar-curso');
}
function excluirCurso(pID){
    
    return ipcRenderer.invoke('deletar-curso',pID);
}  
function atualizarCurso(pID, pNome, descricao){
    return ipcRenderer.invoke('atualizar-curso',pID,pNome,descricao);
}
function adicionarCurso( pNome, descricao){ 
    return ipcRenderer.invoke('adicionar-curso',pNome,descricao);
}




function buscarMateria() {
   return ipcRenderer.invoke('buscar-materia');
}

function excluirMateria(pID) {
    return ipcRenderer.invoke('deletar-materia', pID);
}

function atualizarMateria(pID, pNome, descricao, idcurso) {
    return ipcRenderer.invoke('atualizar-materia', pID, pNome, descricao, idcurso);
}

function adicionarMateria(pNome, descricao, idcurso) {
    return ipcRenderer.invoke('adicionar-materia', pNome, descricao, idcurso);
}




contextBridge.exposeInMainWorld('senacAPI',

    {
        buscarAlunos: buscarAlunos,
        excluirAlunos: excluirAlunos,
        atualizarAlunos: atualizarAlunos,
        adicionarAlunos: adicionarAlunos,

        buscarProfessor: buscarProfessor,
        excluirProfessor: excluirProfessor,
        atualizarProfessor: atualizarProfessor,
        adicionarProfessor: adicionarProfessor,

        buscarCurso: buscarCurso,
        excluirCurso: excluirCurso,
        atualizarCurso: atualizarCurso,
        adicionarCurso: adicionarCurso,

        buscarMateria: buscarMateria,
        excluirMateria: excluirMateria,
        atualizarMateria: atualizarMateria,
        adicionarMateria: adicionarMateria

    }


)


function abrirAluno() {
    ipcRenderer.send('abrir-aluno');
}


function abrirProfessor() {
    ipcRenderer.send('abrir-professor');

}
function abrirCurso() {
    ipcRenderer.send('abrir-curso');
}

function abrirMateria() {
    ipcRenderer.send('abrir-materia');
}


contextBridge.exposeInMainWorld('janelaAPI',
    {
        abrirAluno: abrirAluno,
        abrirProfessor: abrirProfessor,
        abrirCurso: abrirCurso,
        abrirMateria: abrirMateria

    }

)