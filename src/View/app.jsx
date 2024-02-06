import React from 'react';
import { createRoot } from 'react-dom/client';
import Comp from './Comp.jsx';

// //* ipcRenderer
// import { ipcRenderer } from 'electron';

createRoot(document.getElementById('root')).render(
    <Comp />,
);