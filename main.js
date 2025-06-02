const { app, BrowserWindow } = require('electron');
const path = require('path');
const { createMainWindow } = require('./src/janelaPrincipal');
const { registrarTodos } = require('./src/appListeners');

app.whenReady().then(function () {


    createMainWindow();
    registrarTodos();
 
    app.on('activate', function () {
        if (BrowserWindow.getAWindows().length === 0) {
            createMainWindow();
        }
    });

}
);


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});