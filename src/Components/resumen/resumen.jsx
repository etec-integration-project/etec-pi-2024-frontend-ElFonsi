
// import Carrito from '../Carrito/Carrito';
// import React ,{useState} from 'react';

// function Resumen(carrito, setCarrito){
//     const [resumenCompra, setResumenCompra] = useState([]);
    
//     const handleCompraExitosa = (resumen) => {
//     setResumenCompra(resumen);
//     setCarrito([]); // Limpiar el carrito después de la compra
//     };
//     return (
//         <div>
//         {/* Renderizar productos y manejar el estado del carrito */}
//         {/* ... */}
//         <Carrito carrito={carrito} onCompraExitosa={handleCompraExitosa} />
//         {/* Mostrar resumen de la compra */}
//         {resumenCompra.length > 0 && (
//             <div>
//             <h2>Resumen de la Compra</h2>
//             {resumenCompra.map((item) => (
//                 <div key={item.id}>
//                 <p>{item.nombre}</p>
//                 <p>Cantidad: {item.cantidad}</p>
//                 <p>Precio unitario: ${item.precio}</p>
//                 <p>Total: ${item.cantidad * item.precio}</p>
//                 </div>
//             ))}
//             </div>
//         )}
//         </div>
//     );

// };

// export default Resumen;