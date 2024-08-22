import React, { useState, useEffect } from 'react';
import './Categorias.css'
import laptop from '../multimedia/laptop.svg'
import airplay from '../multimedia/airplay.svg'
// import mock from '../Mock/mock.json';
import axios from 'axios'


function Categorias() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/productos');
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <main id="categorias_main">

        <section id="section_menu">
            <div id="barra_categorias">
                <img id="Imagen_menu" src={airplay} alt=""/>
                <br/><br/>
                <h2 id="titulo_menu">Categorias</h2>
                <a href="" class="links_menu"><h3>Link1</h3></a>
                <a href="" class="links_menu"><h3>Link2</h3></a>
                <a href="" class="links_menu"><h3>Link3</h3></a>
                <a href="" class="links_menu"><h3>Link1</h3></a>
                <a href="" class="links_menu"><h3>Link2</h3></a>
                <a href="" class="links_menu"><h3>Link3</h3></a>
            </div>

            <div id="Content">

                <h2>Productos</h2>
                {data.map((producto) => (
                <div class="div_img_menu" key={producto.id}>
                    <img class="imgs_menu" src={laptop} alt=""/>
                    <h6>{producto.nombre}</h6>
                    <h4 class="descripcion_prod">{producto.descripcion}</h4>
                    <h5 class="precio">${producto.precio}</h5>
                    {/* <button class="agregar_producto" onClick={() => agregarAlCarrito(producto)}><div class="Agregar"><h5>Agregar</h5></div></button>                  */}
                </div>
                ))}
            </div>



        </section>

        </main>


        </div>

        );
    }


export default Categorias;