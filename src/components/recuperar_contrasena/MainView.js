import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./MainView.css";

export default function MainView() {
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!correo) {
      setError("Ingrese su correo.");
    } else {
      setError("");
      setShowModal(true);
      console.log("Recuperar contraseña para:", correo);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/New_Password");
  };

  return (
    <div className="d-flex vh-100 main-container">
      <img src="/lockin-logo.png" alt="Lock In Logo" className="logo mb-3" />
      <motion.div
        className="form-container d-flex flex-column justify-content-center align-items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <h2 className="text-dark">Recuperar contraseña</h2>
        <p className="text-secondary">
          Ingresa tu correo para restablecer tu contraseña.
        </p>
        <Form.Control
          type="text"
          placeholder="Correo"
          className="text-secondary"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        {error && <p className="text-danger">{error}</p>}
        <Button variant="dark" className="w-100" onClick={handleSubmit}>
          Enviar enlace de recuperación
        </Button>
        <div className="d-flex justify-content-between w-75 text-secondary">
          <a href="/">Volver al inicio</a>
          <a href="/Register">Registrarse</a>
        </div>
      </motion.div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Correo enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Revisa tu correo para restablecer tu contraseña.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
