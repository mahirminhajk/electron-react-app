// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('basicInfo', {
    name: 'test-app',
    version: '1.0.0',
    author: 'km12',
    date: '2021-08-01',
    ping: () => ipcRenderer.invoke('ping'),
    createStudent: (studentData) => ipcRenderer.invoke('create-student', studentData),
});

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send: (channel, data) => {
            // Whitelist channels to ensure they only send valid messages
            const validChannels = ['create-student-success', 'create-student-error'];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        on: (channel, listener) => {
            // Whitelist channels to ensure they only receive valid messages
            const validChannels = ['create-student-success', 'create-student-error'];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => listener(event, ...args));
            }
        },
        removeAllListeners: (channel) => {
            ipcRenderer.removeAllListeners(channel);
        },
    },
});