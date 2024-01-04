// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('basicInfo', {
    name: 'test-app',
    version: '1.0.0',
    author: 'km12',
    date: '2021-08-01',
    ping: () => ipcRenderer.invoke('ping')
});