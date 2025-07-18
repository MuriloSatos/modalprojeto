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



function modalAbrirCliente(event) {
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/cliente/cliente.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}

function modalAbrirProduto(event) {
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/produto/produto.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}
 function modalAbrirVenda(event) {
    let mainWindow = getJanelaPrincipal();
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/vendas/venda.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }

 }

module.exports = {
    criarJanelaModal,
    modalAbrirCliente,
    modalAbrirProduto,
    modalAbrirVenda

};