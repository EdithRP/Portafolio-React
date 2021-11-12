import React from 'react';
import Formulario from './components/Formulario'
// import Footer from './components/Footer'
import Navbar from './components/Navbar.jsx'
import Presentacion from './components/Presentation'
import Imagenes from './components/Imagenes'
import {Proyectos, Proyectositems} from './components/Proyectos'
import {Testimonios} from './components/Testimonios'
import {Servicios} from './components/Servicios'
import {Areaimagen} from './components/Areaimagen';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment>
        <Navbar/>
        <Presentacion/>
        <Proyectos/> 
        <Imagenes/> 
        
        <Servicios/> 
        <Testimonios/>
        <Areaimagen/>
        <Formulario />
        <Footer/>
        </React.Fragment>
);
}

export default App;
