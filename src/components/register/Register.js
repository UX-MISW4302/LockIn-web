import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!usuario || !correo || !telefono || !contrasena) {
      setError("Todos los campos son obligatorios.");
    } else {
      setError("");
      console.log("Registrando usuario:", { usuario, correo, telefono, contrasena });
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      navigate("/"); // Redirige a la página de inicio de sesión
    }, 500);
  };

  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
    className="d-flex flex-column align-items-center justify-content-center w-100 register"
    >

    <img src="/lockin-logo.png" alt="Lock In Logo" className="logo mb-3" />
      <div className="d-flex w-75 gap-3">
        <Form.Control
          type="text"
          placeholder="Usuario"
          className="mb-3 w-50"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <Form.Control
          type="email"
          placeholder="Correo"
          className="mb-3 w-50"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div className="d-flex w-75 gap-3">
        <Form.Control
          type="tel"
          placeholder="Teléfono"
          className="mb-3 w-50"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <Form.Control
          type="password"
          placeholder="Contraseña"
          className="mb-3 w-50"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <Button variant="dark" className="w-75" onClick={handleSubmit}>
        Registrarse
      </Button>
      <div className="d-flex justify-content-center w-75 mt-2">
        <a href="/" className="text-reset" onClick={handleLoginClick}>
          ¿Ya tienes una cuenta? <span className="text-primary">Inicia sesión</span>
        </a>
      </div>
    </motion.div>
  );
}
