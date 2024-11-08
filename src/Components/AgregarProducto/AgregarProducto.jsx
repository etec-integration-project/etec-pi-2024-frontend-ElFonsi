import React, { useState } from 'react';
import axios from 'axios';
import './AgregarProducto.css';

function AgregarProducto() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const producto = {
      nombre,
      descripcion,
      precio: parseInt(precio, 10),
      cantidad: 1
    };

    try {
      await axios.post("http://localhost:8080/nuevoProducto", producto);
      alert('Producto agregado exitosamente');
      setNombre('');
      setDescripcion('');
      setPrecio('');
    } catch (error) {
      alert('Error al agregar el producto');
      console.error('Error al enviar el producto:', error);
    }
  };

  const handlePrecioChange = (e) => {
    const value = e.target.value;
    // Permitir solo números
    if (/^\d*$/.test(value)) {
      setPrecio(value);
    }
  };

  return (
    <section id="section_body">
      <div className="formulario_producto">
        <h1 id="form_titulo">Agregar Nuevo Producto</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre del Producto:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />

          <label htmlFor="precio">Precio:</label>
          <input
            type="text"
            id="precio"
            value={precio}
            onChange={handlePrecioChange}
            required
          />

          <button type="submit" id="enviarproducto">Agregar Producto</button>
        </form>
      </div>
    </section>
  );
}

export default AgregarProducto;
