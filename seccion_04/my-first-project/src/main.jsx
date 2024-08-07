// !NOTA para renderizar
// !NOTA main como primer punto de entrada principal
import React from 'react';
import ReactDOM from 'react-dom/client'
import FirstComponent from './components/FirstComponent';
import FirstTaskCreate from './components/FirstTaskCreate';
import FirstVariables from './components/FirstVariables';
import FirstProps from './components/FirstProps';

import './styles.css'




ReactDOM.createRoot( document.getElementById("root")).render(

    <React.StrictMode>
        <FirstComponent></FirstComponent>
        <FirstTaskCreate></FirstTaskCreate>
        <FirstVariables></FirstVariables>
        <FirstProps title={"Hola soy una propiedad nueva"} segundaProp={2}></FirstProps>
    </React.StrictMode>
)
