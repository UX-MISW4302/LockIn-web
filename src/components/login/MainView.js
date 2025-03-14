import Descripcion from "./Descripcion";
import Login from "./Login";
import "./MainView.css";

export default function MainView() {
  return (
    <div className="d-flex min-vh-100 p-5 main-container">
      <div className="d-flex flex-grow-1 justify-content-between">
        {/* Sección de descripción */}
        <div className="w-40 d-flex align-items-center justify-content-start descripcion">
          <Descripcion />
        </div>

        {/* Logo del celular en el centro */}
        <div>
          <img src="/celular.png" alt="Lock In Logo" className="logo-celular" />
        </div>

        {/* Sección de login */}
        <div className="w-40 d-flex align-items-center justify-content-end login">
          <Login />
        </div>
      </div>
    </div>
  );
}