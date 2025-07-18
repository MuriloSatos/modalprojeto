
const { BrowserWindow } = require('electron')
const path = require('path')


let janelaPrincipalCliente;
let janelaLogin;
let janelaPrincipal;


function createMainWindow() {
    janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
          contextIsolation: true,
  nodeIntegration: false
    
    });

    janelaPrincipal.loadFile('./src/index.html');

    janelaPrincipal.on('closed', () => {
        janelaPrincipal = null;
    });

    return janelaPrincipal;
}

function createMainWindowCliente() {
    janelaPrincipalCliente = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    janelaPrincipalCliente.loadFile('./src/index.html');

    janelaPrincipalCliente.on('closed', () => {
        janelaPrincipalCliente = null;
    });

    return janelaPrincipalCliente;
}


function getJanelaPrincipal() {
    return janelaPrincipal;
}

function createLoginWindow() {
    janelaLogin = new BrowserWindow({
        width: 500,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }


    });

    janelaLogin.loadFile('./src/login/login.html')
}
 
function getJanelaLogin() {
    return janelaLogin;
}


module.exports = {
    createMainWindow,
    getJanelaPrincipal,

    createLoginWindow,
    getJanelaLogin,

    createMainWindowCliente
};