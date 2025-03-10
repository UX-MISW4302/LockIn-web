import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./MainView.css";

export default function MainView() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      setError("Por favor, complete ambos campos.");
    } else if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
    } else {
      setError("");
      setShowModal(true);
      console.log("Nueva contraseña establecida.");
    }
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/");
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
        <h2 className="mb-3">Restablecer contraseña</h2>
        <p className="text-center text-muted mb-3">
          Escribe tu nueva contraseña y confírmala.
        </p>
        <Form.Control
          type="password"
          placeholder="Nueva contraseña"
          className="mb-3 w-75"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control
          type="password"
          placeholder="Confirmar contraseña"
          className="mb-3 w-75"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="text-danger">{error}</p>}
        <Button variant="dark" className="w-75" onClick={handleSubmit}>
          Restablecer contraseña
        </Button>
        <div className="d-flex justify-content-between w-75 mt-2">
          <a href="/">Volver al inicio</a>
          <a href="/Register">Registrarse</a>
        </div>
      </motion.div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contraseña restablecida</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tu contraseña ha sido actualizada correctamente.</p>
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
