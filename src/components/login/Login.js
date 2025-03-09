import { useState } from "react";
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
      <div className="position-absolute end-0 top-0 vh-100 w-40 d-flex flex-column justify-content-center align-items-center">
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
          <a href="#">Registrarse</a>
        </div>
        <div className="d-flex w-75 gap-3 mt-3">
          <Button variant="outline-secondary" className="w-50">
            <FaApple /> Apple
          </Button>
          <Button variant="outline-secondary" className="w-50">
            <FaGoogle /> Google
          </Button>
        </div>
      </div>
    </div>
  );
}
