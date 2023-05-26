import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
const API_URL = 'http://localhost:3001';
const { useEffect, useState } = require("react");
function LoginWindow() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("user:", user);
        console.log("Password:", password);
        putData();
        
    };
    const handleUserChange = (event) => {
        setUser(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    useEffect(() => {
      const token = sessionStorage.getItem("token");
      if (token) {
        console.log("Ya hay un usuario logueado")
        navigate("/cafes");
      }
    }, []);
      
      const putData = async () => {
        
        if (user !== "" && password !== "") {
      
          try {
      
            const datosEnviados = { user, password };
            console.log(JSON.stringify(datosEnviados))
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosEnviados)
            })

            console.log(response)
      
            if (!response.ok) {
      
              throw new Error("No hubo respuesta");
      
            }
      
            const rol = await response.json();
            sessionStorage.setItem('token', rol);
            navigate('/cafes');
      
          } catch (error) {
            console.error("Hubo en problema:", error);
          }
        }
      }
      
      
    return (
        <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-center p-3 w-100" onSubmit={handleSubmit}>
          <img
            className="mb-4 bootstrap-logo"
            src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-coffee-fresh-brown-poster-banner-background-image_133007.jpg"
            alt="Cafe"
          />
          <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
          <Form.Group controlId="sign-in-user-address">
            <Form.Control
              onChange={handleUserChange}
              type="user"
              size="lg"
              placeholder="User address"
              autoComplete="username"
              className="position-relative"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-password">
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              size="lg"
              placeholder="Password"
              autoComplete="current-password"
              className="position-relative"
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
            <Form.Check label="Remember me" />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" size="lg" type="submit">
              Sign in
            </Button>
          </div>
          <p className="mt-5 text-muted">&copy; 2021-2022</p>
        </Form>
      </Container>
    );
  }
  
  export default LoginWindow;