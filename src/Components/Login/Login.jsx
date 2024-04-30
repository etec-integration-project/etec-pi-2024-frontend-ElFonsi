import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const Login = () => {

    const [usuario, setUsuario] = useState({
        email: '',
        contraseña: '',
      });
    
      const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:8080/login', usuario);
          console.log(response.data); 
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
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
                    <div class="login-container">
                        <h2>Iniciar Sesion</h2>
                <form action="http://localhost:3000/">
                    <div class="form-group">
                        <label for="username">Email:</label>
                        {/* <input type="text" id="username" name="username" required/> */}
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña:</label>
                        {/* <input type="password" id="password" name="password" required/> */}
                        <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} />
                    </div>
                    <button class="boton" onClick={handleLogin}>Iniciar sesión</button>
                </form>
            </div>
        </section>

        </div>

    );
};

export default Login;