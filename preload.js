const { contextBridge, ipcRenderer } = require('electron');

// Expose a limited API to the renderer
contextBridge.exposeInMainWorld('api', {
  launch: (options) => ipcRenderer.invoke('launch', options),
});
