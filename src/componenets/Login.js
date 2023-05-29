import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Login.css';
import cafe from './cafe.png';
const API_URL = 'http://localhost:3001';
const { useEffect, useState } = require("react");

function LoginWindow() {
    const [login, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("user:", login);
        console.log("Password:", password);
        putData();
        
    };
    const handleUserChange = (event) => {
        setUser(event.target.value);
        console.log(event.target.value)
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    useEffect(() => {
      const token = sessionStorage.getItem("token");
      if (token) {
        navigate("/cafes");
      }
    }, [navigate]);
      
      const putData = async () => {
        
        if (login !== "" && password !== "") {
      
          try {
      
            const datosEnviados = { login, password };
            console.log(JSON.stringify(datosEnviados))
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosEnviados)
                
            })

            console.log(response.status)
      
            if (!response.ok) {
      
              throw new Error("No hubo respuesta");
      
            }
      
            const rol = await response.json();
            sessionStorage.setItem('token', rol);
            navigate('/cafes');
      
          } catch (error) {
            console.error("Hubo un problema:", error);
            setErrors({ login: 'Error con el login' });
          }
        }
      }
      
      
    return (
      <div className="container">
       <div className="banner-text" style={{
                fontFamily: 'Indie Flower',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '36px',
                lineHeight: '53px',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
                flex: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                }}>
                El aroma mágico
            </div>
            <div className="mt-3"></div>
      <div className="banner-img">
        
        <img
          src={cafe}
          alt="Banner de café"
        />
        
      </div>
      <h2 className="box-heading">Inicio de sesión</h2>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" >Nombre de usuario:</label>
            <input type="text" style={{background: "#D9D9D9"}} className="form-control" id="username" onChange={handleUserChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" style={{background: "#D9D9D9"}}className="form-control" id="password" onChange={handlePasswordChange} />
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-success">Ingresar</button>
            <button type="button" className="btn btn-danger">Cancelar</button>
          </div>
          {errors.login && <div style={{ color: '#CD3232' }}>{errors.login}</div>}
        </form>
      </div>
    </div>
    );
  }
  
  export default LoginWindow;