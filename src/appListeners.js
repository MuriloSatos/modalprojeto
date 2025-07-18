const { ipcMain } = require('electron')


const { validarLogin
} = require('./login/loginDb')


function registrarLoginHandler() {
    ipcMain.handle('validar-login', validarLogin);
}



const {
    buscarcliente,
    deletarCliente,
    atualizarCliente,
    adicionarCliente,
    buscarClienteDevs,
    somar2numeros
} = require('./cliente/clienteDb')

const {
    buscarProduto,
    deletarProduto,
    atualizarProduto,
    adicionarProduto,
    buscarProdutoNome
} = require('./produto/produtoDb')

const {
    buscarVenda,
    buscarVendaNome,
    deletarVenda,
    atualizarVenda,
    adicionarVenda,
    buscarVendaId
} = require('./vendas/vendaDb');

const {
    modalAbrirCliente,
    modalAbrirProduto,
    modalAbrirVenda
} = require('./janelaModal');


const { createMainWindow } = require('./janelaPrincipal');
const { createMainWindowCliente } = require('./janelaPrincipal');


function registrarCliente() {
    ipcMain.handle('buscar-cliente', buscarcliente);
    ipcMain.handle('deletar-cliente', deletarCliente);
    ipcMain.handle('atualizar-cliente', atualizarCliente);
    ipcMain.handle('adicionar-cliente', adicionarCliente);
    ipcMain.handle('buscar-cliente-devs', buscarClienteDevs);
    ipcMain.handle('somar-2-numeros', somar2numeros);
}

function registrarProduto() {
    ipcMain.handle('buscar-produto', buscarProduto);
    ipcMain.handle('deletar-produto', deletarProduto);
    ipcMain.handle('atualizar-produto', atualizarProduto);
    ipcMain.handle('adicionar-produto', adicionarProduto);
    ipcMain.handle('buscar-produto-nome', buscarProdutoNome);
}

function registrarVenda() {
    ipcMain.handle('buscar-venda', buscarVenda);
    ipcMain.handle('buscar-venda-id', buscarVendaId);
    ipcMain.handle('deletar-venda', deletarVenda);
    ipcMain.handle('atualizar-venda', atualizarVenda);
    ipcMain.handle('adicionar-venda', adicionarVenda);

}

function registrarJanelas() {
    ipcMain.on('abrir-cliente', modalAbrirCliente),
        ipcMain.on('abrir-produto', modalAbrirProduto),
        ipcMain.on('abrir-venda', modalAbrirVenda),
        ipcMain.on('abrir-menu', createMainWindow)
    ipcMain.on('abrir-menu-cliente', createMainWindowCliente)

}

function registrarTodos() {
    registrarCliente();
    registrarJanelas();
    registrarProduto();
    registrarLoginHandler();
    registrarVenda();
    
}
module.exports = {
    registrarTodos

}