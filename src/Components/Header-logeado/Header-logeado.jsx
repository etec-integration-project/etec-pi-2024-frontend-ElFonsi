import React from 'react';
import './Header_logeado.css';
import airplay from '../multimedia/airplay.svg';
import search from '../multimedia/search.svg';
import shoppingcart from '../multimedia/shopping-cart.svg';
import { Link } from 'react-router-dom';
import xcircle from '../multimedia/xcircle.svg';

const Headerlogeado = () => {
    const userId = localStorage.getItem('userId');

    return (
        <div>
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Teko:wght@600&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@200&display=swap" rel="stylesheet"/>
                <title>Computer Shop</title>
            </head>
            <nav className="nav_main">
                <div className="div_logo_titulo">
                    <Link to="/usuario-logeado" className="links_img">
                        <img id="Logo" src={airplay} alt="Logo"/>
                    </Link>
                    <h1 id="title">Computer Shop</h1>
                </div>
                <div className="div_links">
                    <ul className="ul_nav_2">
                        <Link to='/categorias-logeado' className="links"><li className="li_nav">Categorias</li></Link>
                        {userId === '3' ? (
                            <Link to='/nuevoProducto' className="links"><li className="li_nav">Agregar Producto</li></Link>
                        ) : (
                            <a class="links"href=""><li class="li_nav">Redes Sociales</li></a>
                        )}
                    </ul>
                </div>
                <div className="navegador"> 
                    <img src={search} alt="" id="logo_buscar"/>
                    <input id="buscar" type="text" placeholder="Buscar..."/>
                </div>
                <div className="div_links">
                    <ul className="ul_nav">
                        <Link to="/Login" className="links"><li className="li_nav">Cambiar Cuenta</li></Link>
                    </ul>
                </div>
                <div className="div_logo_tienda">
                    <Link to="/Carrito" className="links_img">
                        <img id="Tienda" src={shoppingcart} alt="Tienda"/>
                    </Link>
                    <h4 id="Tienda_title">Carrito</h4>
                </div>
            </nav>
        </div>
    );
};

export default Headerlogeado;
