import React, { useState, useEffect } from 'react';
import './Categorias-logeado.css';
import laptop from '../multimedia/laptop.svg';
import airplay from '../multimedia/airplay.svg';
import checkIcon from '../multimedia/check.svg'; // Asegúrate de importar el ícono de afirmación
import axios from 'axios';

function Categoriaslogeado({ agregarAlCarrito }) {
  const [data, setData] = useState([]);
  const [addedProducts, setAddedProducts] = useState({}); // Estado para rastrear productos agregados

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/productos`);
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (producto) => {
    agregarAlCarrito(producto);
    setAddedProducts((prev) => ({
      ...prev,
      [producto.id]: true, // Marca el producto como agregado
    }));
  };

  return (
    <div>
      <main id="categorias_main">
        <section id="section_menu">
          <div id="barra_categorias">
            <img id="Imagen_menu" src={airplay} alt="" />
            <br />
            <br />
            <h2 id="titulo_menu">Categorias</h2>
            <a href="" className="links_menu">
              <h3>Link1</h3>
            </a>
            <a href="" className="links_menu">
              <h3>Link2</h3>
            </a>
            <a href="" className="links_menu">
              <h3>Link3</h3>
            </a>
          </div>

          <div id="Content">
            <h2>Productos</h2>
            {data.map((producto) => (
              <div className="div_img_menu" key={producto.id}>
                <img className="imgs_menu" src={laptop} alt="" />
                <h6>{producto.nombre}</h6>
                <h4 className="descripcion_prod">{producto.descripcion}</h4>
                <h5 className="precio">${producto.precio}</h5>
                {addedProducts[producto.id] ? (
                  <div className="Agregar">
                    <img src={checkIcon} alt="Added" style={{ width: '20px' }} />
                  </div>
                ) : (
                  <button
                    className="agregar_producto"
                    onClick={() => handleAddToCart(producto)}
                  >
                    <div className="Agregar">
                      <h5>Agregar</h5>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Categoriaslogeado;
