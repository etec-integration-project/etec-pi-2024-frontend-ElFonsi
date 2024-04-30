
import React, { useState } from 'react';
import './Singup.css'
import axios from 'axios';

const Singin = () => {
    const [usuario, setUsuario] = useState({
      nombre: '',
      email: '',
      contraseña: '',
      confirmPassword: '',
    });
  
    const handleRegister = async () => {
      try {
        const response = await axios.post('http://localhost:8080/registrarse', usuario);
        console.log(response.data); // Puedes manejar la respuesta según tus necesidades
        window.alert('Usuario registrado correctamente')
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        window.alert('Las contraseñas no coinciden')
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
    };


    return (
        <div>
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Teko:wght@600&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@200&display=swap" rel="stylesheet"/>
                <title>Computer shop</title>
            </head>
    <section id="section_body">
            <div class="signup-container">
        <h2>Registrarse</h2>
        <form action="http://localhost:3000/Login">
            <div class="form-group">
                <label for="username">Usuario:</label>
                {/* <input type="text" id="username" name="username" required/> */}
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
            </div>
            <div class="form-group">
                <label for="email">Correo electrónico:</label>
                {/* <input type="email" id="email" name="email" required/> */}
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                {/* <input type="password" id="password" name="password" required/> */}
                <input required type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} />
            </div>
            <div class="form-group">
                <label for="password">Contraseña repetida:</label>
                {/* <input type="password" id="password" name="password" required/> */}
                <input required type="password" name="confirmPassword" placeholder="Confirmar Contraseña" onChange={handleChange} />
            </div>
            <button class="boton" onClick={handleRegister}>Registrarse</button>
        </form>
    </div>

    </section>        
        </div>
    );

}
export default Singin;