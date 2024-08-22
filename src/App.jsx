import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/header/header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Categorias from './Components/Categorias/Categorias';
import MainSection from './Components/MainSection/MainSection';
import Login from './Components/Login/Login'
import Singup from './Components/Singup/Singup'
import Carrito from './Components/Carrito/Carrito'
// import Resumen from './Components/resumen/resumen.jsx'
import Headerlogeado from './Components/Header-logeado/Header-logeado'
import Categoriaslogeado from './Components/Categorias-logeado/Categorias-logeado'


function App() {

  const [carrito, setCarrito] = useState([]);
  // var [count, setCount] = useState(1);
  //       const incrementarCant = (producto) => {
  //         producto.count =producto.count + 1
  //      };
      
  //        const decrementarCant = (producto) => {
  //         producto.count =producto.count- 1

  //         if (producto.count<=1){
  //            producto.count=producto.count
  //        }
  //        };

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      window.alert("Este producto ya esta agregado al carrito")
      return;
    }

    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (producto) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== producto.id);
    setCarrito(nuevoCarrito);
  };


  const actualizarCantidad = (productoId, nuevaCantidad) => {
    const nuevoCarrito = carrito.map((item) =>
      item.id === productoId ? { ...item, cantidad: nuevaCantidad } : item
    );
    setCarrito(nuevoCarrito);
  };


  const incrementarCant = (id) => {
    const nuevoCarrito= carrito.map((producto) =>
    producto.id === id? {...producto, cantidad:producto.cantidad +1} : producto
)
setCarrito(nuevoCarrito);
};

const decrementarCant = (id) => {
  const nuevoCarrito= carrito.map((producto) =>
  producto.id === id && producto.cantidad > 1 ?
  {...producto, cantidad:producto.cantidad -1} : producto
)
setCarrito(nuevoCarrito);
};

const calcularSubtotal = (producto) => {
return producto.cantidad * producto.precio;
}

const calcularSubtotalTotal = () => {
return carrito.reduce((total, producto)=> total + calcularSubtotal(producto), 0)
}



  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<>
                <Header/>
                <MainSection/>
                <Footer/>
              </>}
              />

              <Route path='/Categorias' element={<>
                <Header/>
                <Categorias/>
                <Footer/>
              </>}
              />

              <Route path='/Login' element={<>
                <Header/>
                <Login/>
              </>}
              />

              <Route path='/Carrito' element={<>
                <Headerlogeado/>
                <Carrito carrito={carrito }
                eliminarDelCarrito={eliminarDelCarrito}
                actualizarCantidad={actualizarCantidad} 
                incrementarCant={incrementarCant} 
                decrementarCant={decrementarCant}
                calcularSubtotal={calcularSubtotal}
                calcularSubtotalTotal={calcularSubtotalTotal}
                vaciarCarrito={vaciarCarrito}/> 
              </>}
              />

              <Route path='/Singup' element={<>
                <Header/>
                <Singup/>
              </>}
              />

              <Route path='/usuario-logeado' element={<>
                <Headerlogeado/>
                <MainSection/>
                <Footer/>
              </>}
              />

            <Route path='/categorias-logeado' element={<>
                <Headerlogeado/>
                <Categoriaslogeado agregarAlCarrito={agregarAlCarrito}/>
                <Footer/>
              </>}
              />
              
              
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
