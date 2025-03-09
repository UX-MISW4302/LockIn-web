import "./Descripcion.css";

export default function Descripcion() {
    return (
      <div className="w-100 d-flex flex-column justify-content-center">
        <img src="/lockin-logo.png" alt="Lock In Logo" className="logo mb-3" />
        <p className="text-dark">
          Bienvenido a Lock In: Enfócate y alcanza tus metas
          Lock In es la herramienta ideal para mejorar tu concentración y productividad. Utiliza cronómetros personalizados para sesiones de, bloquea el celular para evitar distracciones y organiza tus tareas y subtareas de manera estructurada.
        </p>
        <p className="text-dark">
          - Crea y gestiona tus tareas de forma sencilla  
          - Establece subtareas para dividir el trabajo en pasos concretos  
          - Conéctate con amigos para estudiar juntos y mantener la motivación  
          - Activa el modo de bloqueo para minimizar distracciones digitales  
          - Registra tu progreso y optimiza tu rutina de estudio  
        </p>
        <p className="text-dark fw-bold">
          Inicia sesión y lleva tu enfoque al siguiente nivel y empieza a obtener recompensas!
        </p>
        <img src="/rewards.png" alt="rewards" className="logo-rewards mb-3" />
      </div>
    );
  }
  