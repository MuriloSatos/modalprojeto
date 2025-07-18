const {contextBridge,ipcRenderer} = require('electron')


function buscarCliente(){
    return ipcRenderer.invoke('buscar-cliente')
}

function excluirCliente(id){
    return ipcRenderer.invoke('deletar-cliente',id)
}

function atualizarCliente(id,nome,senha,email){
    return ipcRenderer.invoke('atualizar-cliente',id,nome,senha,email)
}

function adicionarCliente(nome,senha,email,cpf){
    return ipcRenderer.invoke('adicionar-cliente',nome,senha,email,cpf)
}
function somar2numeros(num1,num2){
    return ipcRenderer.invoke('somar-2-numeros',num1,num2)
}
function buscarProduto(){
    return ipcRenderer.invoke('buscar-produto')
}
function excluirProduto(id){
    return ipcRenderer.invoke('deletar-produto',id)
} 
function atualizarProduto(id,nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto){
    return ipcRenderer.invoke('atualizar-produto',id,nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto)
}
function adicionarProduto(nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto){
    return ipcRenderer.invoke('adicionar-produto',nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto,codigoproduto)
}

function buscarVenda(){
    return ipcRenderer.invoke('buscar-venda')
}
function excluirVenda(codigovenda){
    return ipcRenderer.invoke('deletar-venda',codigovenda)
}
function atualizarVenda(codigovendas,datavenda,codigoproduto,pecaquantidade,valortotal,statusvenda,idcliente){
    return ipcRenderer.invoke('atualizar-venda',codigovendas,datavenda,codigoproduto,pecaquantidade,valortotal,statusvenda,idcliente)
}
function adicionarVenda(codigovendas,datavenda,codigoproduto,pecaquantidade,valortotal,statusvenda,idcliente){
    return ipcRenderer.invoke('adicionar-venda',codigovendas,datavenda,codigoproduto,pecaquantidade,valortotal,statusvenda,idcliente)

}




function buscarProdutoNome(nomeproduto){
    return ipcRenderer.invoke('buscar-produto-nome',nomeproduto)
}

function buscarClienteDevs(email){
    return ipcRenderer.invoke('buscar-cliente-devs',email)
}
 function buscarVendaId(idcliente){
    return ipcRenderer.invoke('buscar-venda-id',idcliente)
}

contextBridge.exposeInMainWorld('todosAPI',
    {
        buscarCliente,
        excluirCliente,
        atualizarCliente,
        adicionarCliente,
        somar2numeros,

        buscarProduto,
        excluirProduto,
        atualizarProduto,
        adicionarProduto,

        buscarVenda,
        excluirVenda,
        atualizarVenda,
        adicionarVenda,

        buscarProdutoNome,
        buscarClienteDevs,
        buscarVendaId,

        validarLogin
    }
)
function validarLogin(nome,senha){
    return ipcRenderer.invoke('validar-login',nome,senha)
}


function abrirJanelaPrincipal(){
    ipcRenderer.send('abrir-menu')
}
function abrirMenuCliente(){
    ipcRenderer.send('abrir-menu-cliente')
}

function abrirCliente(){
    ipcRenderer.send('abrir-cliente')
}
function abrirProduto(){
    ipcRenderer.send('abrir-produto')
}
function abrirVenda(){
    ipcRenderer.send('abrir-venda')
}

contextBridge.exposeInMainWorld('janelaAPI',
   { 
    abrirCliente,
    abrirProduto,
    abrirJanelaPrincipal,
    abrirMenuCliente,
    abrirVenda

   }
)