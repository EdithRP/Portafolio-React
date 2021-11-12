import React from 'react'
import { StyleProyects2, Projectgrid,Projectrows, Projecttitle } from '../styles/style.jsx'

export default function Imagenes() {
    return (
        <StyleProyects2>
            <Projectgrid>
            <Projectrows>
                <Projecttitle>
                    <a href="https://edithrp.github.io/FreeCodeCamp/Responsive/PaginaTributo/" class="project-tile" target="_blank">
                        <img src="https://i.postimg.cc/d3b9CtJ2/documentacion.png" alt="" srcset="" />
                        <span>  Página Tributo </span>

                    </a> </Projecttitle>
                <Projecttitle>
                    <a href="https://edithrp.github.io/FreeCodeCamp/Responsive/Formulario/" class="project-tile">
                        <img src="https://i.postimg.cc/Mp8C2z1f/formulario.png" alt="" srcset="" />

                        <span> Página Formulario</span>
                    </a> </Projecttitle></Projectrows>
                    <Projectrows>
                <Projecttitle>
                    <a href="https://edithrp.github.io/FreeCodeCamp/Responsive/Pagina%20Producto/" class="project-tile">
                        <img src="https://i.postimg.cc/fTdGrVSh/producto.png" alt="" srcset="" />
                        <span> Página Producto </span>

                    </a> </Projecttitle>
                    <Projecttitle>  <a href="https://edithrp.github.io/FreeCodeCamp/Responsive/Documentaci%C3%B3n%20Tecnica/" class="project-tile">
                    <img src="https://i.postimg.cc/kG6cDtPM/tributo.png" alt="" srcset="" />
                   
                        <span>Página Documentación </span>
                    </a> </Projecttitle>
                    </Projectrows>
            </Projectgrid>
        </StyleProyects2>
    )
}
