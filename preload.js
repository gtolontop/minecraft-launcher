const { contextBridge, ipcRenderer } = require('electron');

// Secure bridge exposing allowed IPC methods to the renderer
contextBridge.exposeInMainWorld('api', {
  login: (credentials) => ipcRenderer.invoke('login', credentials),
  downloadVersion: (id) => ipcRenderer.invoke('download', id),
  launch: (options) => ipcRenderer.invoke('launch', options)
});
