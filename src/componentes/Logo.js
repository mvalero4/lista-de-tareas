import React from 'react';
import logo from '../imagenes/logo-verde.png';
import '../hojas-de-estilo/Logo.css';

const Logo = () => (
    <div className='logo-container'>
        <img
        src={logo}
        className='logo'
        alt='imagen del logo' />
      </div>
);

export default Logo;