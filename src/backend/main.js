const electron = require('electron');
const {app, BrowserWindow, ipcMain, dialog, shell} = electron;

let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#ffffff',
        icon: __dirname + '/dist/frontend/assets/logo-96x96.png',
    });

    win.loadURL('file://' + __dirname + '/../../dist/frontend/index.html');

    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
