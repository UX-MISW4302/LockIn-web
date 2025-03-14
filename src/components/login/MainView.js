import Descripcion from "./Descripcion";
import Login from "./Login";
import "./MainView.css";

export default function MainView() {
  return (
    <div className="d-flex min-vh-100 p-5 main-container">
      <div className="d-flex flex-grow-1 align-items-center justify-content-between w-100">
        {/* Sección de registro a la izquierda */}
        <div className="w-50 d-flex justify-content-center">
          <Login />
        </div>
        {/* Sección de descripción a la derecha */}
        <div className="w-50 d-flex justify-content-center">
          <Descripcion />
        </div>
      </div>
    </div>
  );
}
