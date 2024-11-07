import React, { useState, useEffect } from 'react';
import './Categorias.css';
import laptop from '../multimedia/laptop.svg';
import airplay from '../multimedia/airplay.svg';
import axios from 'axios';
import {config} from "dotenv"
config()


function Categorias() {
    const [data, setData] = useState([]);
    const host = process.env.MYSQLDB_HOST
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://${host}:8080/productos`);
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
                        <img id="Imagen_menu" src={airplay} alt="" />
                        <br /><br />
                        <h2 id="titulo_menu">Categorías</h2>
                        <a href="" className="links_menu"><h3>Link1</h3></a>
                        <a href="" className="links_menu"><h3>Link2</h3></a>
                        <a href="" className="links_menu"><h3>Link3</h3></a>
                    </div>

                    <div id="Content">
                        <h2>Productos</h2>
                        {data.map((producto) => (
                            <div className="div_img_menu" key={producto.id}>
                                <img className="imgs_menu" src={laptop} alt="" />
                                <h6>{producto.nombre}</h6>
                                <h4 className="descripcion_prod">{producto.descripcion}</h4>
                                <h5 className="precio">${producto.precio}</h5>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Categorias;
