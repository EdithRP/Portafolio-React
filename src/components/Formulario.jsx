import React from 'react'
import {StyleDivForm} from '../styles/style.jsx' 

export default function Formulario() {
   
    return (
        <StyleDivForm>
            <div>
                <h2>Contacto</h2>
                <h4>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</h4>
                <input type="text" placeholder="Nombre completo"/>
                <input type="email" placeholder="Correo electronico"/>
                <input type="text" placeholder="Mensaje" />
                <button><strong>Enviar Mensaje</strong></button>
            </div>
        </StyleDivForm>
    )
}
