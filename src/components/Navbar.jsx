import React from 'react';
import {StyleDivNav, StyleNav} from '../styles/style.jsx'



export default function navbar() {
    return (<>
            <StyleNav>
                <StyleDivNav>
                <img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1630707155/LOGO_3_sdnif3.png" alt="" />
                <a href="#">Hola</a>
                <a href="#">Proyectos</a>
                <a href="#">Testimonios</a>
                <a href="#">Contacto</a>
                </StyleDivNav>
                <button><strong>Descargar Curriculum</strong></button>
            </StyleNav>

        </>)
}
