const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
    backgroundColor: '#000000',
    show: false,
  });

  win.once('ready-to-show', () => win.show());
  win.loadFile(path.join(__dirname, 'renderer/public/index.html'));
}

app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

const launcher = require('./libs/launcher');

ipcMain.handle('login', async (event, credentials) => launcher.login(credentials));
ipcMain.handle('download', async (event, id) => launcher.downloadVersion(id));
ipcMain.handle('launch', async (event, opts) => launcher.launchGame(opts));

autoUpdater.on('update-downloaded', () => {
  dialog.showMessageBox({
    type: 'info',
    buttons: ['Restart'],
    title: 'Update ready',
    message: 'A new version has been downloaded. Restart now?'
  }).then(() => {
    autoUpdater.quitAndInstall();
  });
});
