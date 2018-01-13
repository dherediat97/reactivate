import React from 'react';
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import { bubble as MenuResponsivo } from 'react-burger-menu';
import './App.css';

class PaginaPrincipal extends React.Component {

  render() {
  return (
    <div className="app">
    <MenuResponsivo>
    <a id="home" className="menu-item" href="/"> <FontAwesome className='super-crazy-colors' name='home' size='1x'/> Inicio
    </a>
    <a id="about" className="menu-item" href="/contacto"><FontAwesome className='super-crazy-colors' name='github' size='1x'/> Sobre Mí
    </a>
    <a id="contact" className="menu-item" href="/proyectos"><FontAwesome className='super-crazy-colors' name='code' size='1x'/> Mis Proyectos
    </a>
      </MenuResponsivo>
        <div className="cabecera">
          <h1 className="titulazo">Reactívate</h1>
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
    );
  }
}



export default PaginaPrincipal;
