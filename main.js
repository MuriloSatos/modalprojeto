const { app, BrowserWindow } = require('electron');
const path = require('path');
const { createLoginWindow } = require('./src/janelaPrincipal');
const { registrarTodos } = require('./src/appListeners');

app.whenReady().then(function () {


    createLoginWindow();
    registrarTodos();

 





    app.on('activate', function () {
        if (BrowserWindow.getAWindows().length === 0) {
            createLoginWindow();
            
        }
    });

}
);



app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});