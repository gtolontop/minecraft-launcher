const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  launch: (options) => ipcRenderer.invoke('launch', options),
  getVersions: () => ipcRenderer.invoke('getVersions'),
});
