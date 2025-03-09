import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { FaApple, FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="d-flex vh-100 login">
      <div className="position-absolute end-0 top-0 vh-100 w-40 d-flex flex-column justify-content-center align-items-center">
        <Form.Control type="text" placeholder="Usuario" className="mb-3 w-75" />
        <Form.Control type="password" placeholder="Contraseña" className="mb-3 w-75" />
        <Button variant="dark" className="w-75">Continuar</Button>
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
