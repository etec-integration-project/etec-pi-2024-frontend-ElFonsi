import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import { useNavigate } from 'react-router-dom';
// import {config} from "dotenv";
// config()

const Login = () => {
  // const host = process.env.MYSQLDB_HOST
    const navegar = useNavigate();
    const [usuario, setUsuario] = useState({
        email: '',
        contraseña: '',
      });
    
      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`http://localhost:8080/login`, usuario);
          localStorage.setItem('userId', response.data.userId)
          console.log(response.data); 
          alert('Has iniciado sesion')
          navegar('/usuario-logeado');
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          alert('Error al inicio de sesion')
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
                  <form>
                    <div class="form-group">
                        <label for="username">Email:</label>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña:</label>
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