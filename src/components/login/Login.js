import { useState } from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { FaApple, FaGoogle } from "react-icons/fa";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!usuario || !contrasena) {
      setError("Ingrese correo y contraseña.");
    } else {
      setError("");
      console.log("Iniciar sesión con:", usuario, contrasena);
      // Aquí puedes manejar el login
    }
  };

  return (
    <div className="d-flex vh-100 login">
      <motion.div
        className="position-absolute end-0 top-0 vh-100 w-40 d-flex flex-column justify-content-center align-items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <img src="/lockin-logo.png" alt="Lock In Logo" className="logo mb-3" />
        <Form.Control
          type="text"
          placeholder="Usuario"
          className="mb-3 w-75"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <Form.Control
          type="password"
          placeholder="Contraseña"
          className="mb-3 w-75"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        {error && <p className="text-danger">{error}</p>}
        <Button variant="dark" className="w-75" onClick={handleSubmit}>
          Continuar
        </Button>
        <div className="d-flex justify-content-between w-75 mt-2">
          <a href="#">Recuperar cuenta</a>
          <a href="/Register">Registrarse</a>
        </div>
        <div className="d-flex w-75 gap-3 mt-3">
          <Button variant="outline-secondary" className="w-50">
            <FaApple /> Apple
          </Button>
          <Button variant="outline-secondary" className="w-50">
            <FaGoogle /> Google
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
