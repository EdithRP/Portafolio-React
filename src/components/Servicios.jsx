import React from 'react'
import { StyleDivServicios, StyleGrid, BotonServicios } from '../styles/style.jsx'

export const Servicios = () => {

    return (
        <StyleDivServicios>
                <h1><strong>Servicios</strong></h1>
           
            <StyleGrid>
                <ul><li><strong>Diseño</strong></li>
                    <li>Experiencia de usuarios</li>
                    <li>Interfaz de usuario</li>
                    <li>Aplicaciones web</li>
                    <li>Prueba de concepto</li>
                    <li><BotonServicios>Ver servicios de diseño<i>{` -->`}</i></BotonServicios></li></ul>
                <ul>
                    <li><strong>Desarrollo</strong></li>
                    <li>Aplicaciones móviles</li>
                    <li>Sitio web</li>
                    <li>Aplicaciones web progresivas</li>
                    <li><BotonServicios>Ver servicios de desarrollo<i>{` -->`}</i></BotonServicios></li></ul>

                <ul>
                    <li><strong>Marca</strong></li>
                    <li>Identidad de la marca</li>
                    <li>Estrategia de marca</li>
                    <li><BotonServicios>Ver servicios de marca <i>{` -->`}</i></BotonServicios></li></ul>

            </StyleGrid>

        </StyleDivServicios>

    )
}