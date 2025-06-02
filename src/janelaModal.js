const { BrowserWindow } = require('electron')
const path = require('path')
const { getJanelaPrincipal } = require('./janelaPrincipal')

function criarJanelaModal(telaPai,arquivohtml) {
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        
        modal: true,
        parent: telaPai,


        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }

    })

    janela.loadFile(arquivohtml)

    return janela;
}



function modalAbrirProfessor(event) {
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/professor/professor.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}


function modalAbrirAluno(event) {
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/aluno/aluno.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}

function modalAbrirCurso(event) {
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/curso/curso.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}
function modalAbrirMateria(event) {
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/materias/materia.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}

module.exports = {
    criarJanelaModal,
    modalAbrirProfessor,
    modalAbrirAluno,
    modalAbrirCurso,
    modalAbrirMateria
};