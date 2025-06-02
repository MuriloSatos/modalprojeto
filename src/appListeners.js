
const { ipcMain } = require('electron');


const {
    buscarProfessor,
    deletarProfessor,
    atualizarProfessor,
    adicionarProfessor
} = require('./professor/professorDb');


const {
    buscarAlunos,
    deletarAluno,
    atualizarAluno,
    adicionarAluno
} = require ('./aluno/alunoDb')

const {
    buscarCurso,
    deletarCurso,
    atualizarCurso,
    adicionarCurso
} = require('./curso/cursoDb');

const {
    buscarMateria,
    deletarMateria,
    atualizarMateria,
    adicionarMateria
} = require('./materias/materiaDb');

const { 
    modalAbrirProfessor,
    modalAbrirAluno,
    modalAbrirCurso,
    modalAbrirMateria
} = require('./janelaModal');

function registrarProfessorHandler() {
    ipcMain.handle('buscar-professor', buscarProfessor);
    ipcMain.handle('deletar-professor', deletarProfessor);
    ipcMain.handle('atualizar-professor', atualizarProfessor);
    ipcMain.handle('adicionar-professor', adicionarProfessor);
}


function registrarAlunoHandler() {
    ipcMain.handle('buscar-alunos', buscarAlunos);
    ipcMain.handle('deletar-alunos', deletarAluno);
    ipcMain.handle('atualizar-alunos', atualizarAluno);
    ipcMain.handle('adicionar-alunos', adicionarAluno);
}

function registrarCursoHandler() {
    ipcMain.handle('buscar-curso', buscarCurso);
    ipcMain.handle('deletar-curso', deletarCurso);
    ipcMain.handle('atualizar-curso', atualizarCurso);
    ipcMain.handle('adicionar-curso', adicionarCurso);
}

function registrarMateriaHandler(){
    ipcMain.handle('buscar-materia', buscarMateria);
    ipcMain.handle('deletar-materia', deletarMateria);
    ipcMain.handle('atualizar-materia', atualizarMateria);
    ipcMain.handle('adicionar-materia', adicionarMateria);
}



function registrarJanelas(){
    ipcMain.on('abrir-professor',modalAbrirProfessor);
    ipcMain.on('abrir-aluno',modalAbrirAluno);
    ipcMain.on('abrir-curso',modalAbrirCurso);
    ipcMain.on('abrir-materia', modalAbrirMateria);
}

function registrarTodos(){
    registrarProfessorHandler();
    registrarAlunoHandler();
    registrarJanelas();
    registrarCursoHandler();
    registrarMateriaHandler();
}

module.exports = {
    registrarTodos
};