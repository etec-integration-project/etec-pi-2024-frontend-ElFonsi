import './Header.css'
import airplay from '../multimedia/airplay.svg'
import search from '../multimedia/search.svg'
import shoppingcart from '../multimedia/shopping-cart.svg'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Header = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/productos");
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <><div>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Teko:wght@600&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@200&display=swap" rel="stylesheet" />
                <title>Computer shop</title>
            </head>
            <nav class="nav_main">
                <div class="div_logo_titulo">
                    <Link to="/" class="links_img"><img id="Logo" src={airplay} alt="Logo" /></Link>
                    <h1 id="title">Computer Shop</h1>
                </div>
                <div class="div_links">
                    <ul class="ul_nav_2">
                        <Link to='/Categorias' class="links" target=""><li class="li_nav">Categorias</li></Link>
                        <a class="links" href=""><li class="li_nav">Redes Sociales</li></a>
                    </ul>
                </div>
                <div class="navegador"> 
                    <img src={search} alt="" id="logo_buscar"/>
                    <input id="buscar" type="text" placeholder="Buscar..."/>
                </div>
                <div class="div_links">
                    <ul class="ul_nav">
                        <Link to="/Login" class="links" target=""><li class="li_nav">Ingresar</li></Link>
                        <Link to="/Singup" class="links" target=""><li class="li_nav">Registrarse</li></Link>
                    </ul>
                </div>
                {/* <div class="div_logo_tienda">
        <Link to="/Carrito" class="links_img"><img id="Tienda" src={shoppingcart} alt="Tienda"/></Link>
        <h4 id="Tienda_title">Carrito</h4>
    </div> */}
            </nav>

        </div></>
        
    );
};

// const top100films = [
//     { title: 'The Shawshank Redemption', year: 1994 },
//     { title: 'The Godfather', year: 1972 },
//     { title: 'The Godfather: Part II', year: 1974 },
//     { title: 'The Dark Knight', year: 2008 },
//     { title: '12 Angry Men', year: 1957 },
//     { title: "Schindler's List", year: 1993 },
//     { title: 'Pulp Fiction', year: 1994 },
//     {
//       title: 'The Lord of the Rings: The Return of the King',
//       year: 2003,
//     }
// ];

export default Header;