// !NOTA para renderizar
// !NOTA main como primer punto de entrada principal
import React from 'react';
import ReactDOM from 'react-dom/client'
import FirstComponent from './components/FirstComponent';
import FirstTaskCreate from './components/FirstTaskCreate';




ReactDOM.createRoot( document.getElementById("root")).render(

    <React.StrictMode>
        <FirstComponent></FirstComponent>
        <FirstTaskCreate></FirstTaskCreate>
    </React.StrictMode>
)
