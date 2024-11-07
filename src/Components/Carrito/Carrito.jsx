import './Carrito.css'
import laptop from '../multimedia/laptop.svg'
// import airplay from '../multimedia/airplay.svg'
import minus from '../multimedia/minus.svg'
import plus from '../multimedia/plus.svg'
import xcircle from '../multimedia/xcircle.svg'
import axios from 'axios'
import {config} from "dotenv"
config()
function Carrito({carrito, eliminarDelCarrito, incrementarCant, decrementarCant, calcularSubtotal, calcularSubtotalTotal, vaciarCarrito}) {

const CarroFiltrado = Object.values(carrito).map(({ id, nombre, cantidad, precio }) => ({ id, nombre, cantidad, precio }));
  
  const cartJson = JSON.stringify(CarroFiltrado);
  const host = process.env.MYSQLDB_HOST
  

  const handleCarrito = async () => {

    const userId = localStorage.getItem('userId');

      if (cartJson !== "[]") {
          try {
              await axios.post(`http://${host}:8080/comprar`, {cartJson, userId});
              window.alert('Articulos comprados exitosamente');
              vaciarCarrito()
          } catch (err) {
              alert('Error al realizar la compra');
              console.log("Error al registrar carrito: ", err)
          }    
      } else {
          alert('Seleccionar articulos');
      }
  };

    return (

        <section id="section_body">
            <div className="carrito">
                <h1 id="cart_titulo">Carrito de compras</h1>
                <div id="clasificacion"> 
                <h4 className="clas">Imagen</h4><h4 className="clas">Nombre</h4><h4 className="clas">Precio</h4><h4 className="clas">Cantidad</h4><h4 className="clas">Subtotal</h4><h4 className="clas">Eiminar</h4>
                </div>
                <div className="carrito-dropdown">
                {carrito.map((producto, index) => (
                <div className="objetos_carrito" key={index}>
                    <div id='imgs_menu'><img className="imgs_carrito" src={laptop} alt=""/></div>
                    <h4 id="nombre_prod">{producto.nombre}</h4>
                    <h5 id="price">${producto.precio}</h5>
                    <div id='ct'>
                    <button className="botonCant" onClick={()=> incrementarCant(producto.id)}><div className="_producto"><img src={plus} alt=""/></div></button> 
                    <h5 id="price_total">{producto.cantidad}</h5> 
                    <button className="botonCant" onClick={()=> decrementarCant(producto.id)}><div className="_producto"><img src={minus} alt=""/></div></button>
                </div>
                  <div id="Subtotal">${calcularSubtotal(producto).toFixed(2)}</div>
                    <button id="botonElim" onClick={() => eliminarDelCarrito(producto)}><div id="eliminar"><img src={xcircle} alt=""/></div></button>

                  </div>
                ))}
                </div>
                <br />
              <form id="cont_carrito">

                <h3>El total de tu compra en el carrito de Computer Shop es: ${calcularSubtotalTotal().toFixed(2)} </h3>
               
                <button id="enviar" onClick={handleCarrito}>Comprar</button>

              </form>
                
            </div>

        </section>
    );
}

export default Carrito;