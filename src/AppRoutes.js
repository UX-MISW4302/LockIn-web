import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/MainView'
import Register from './components/register/MainView'
import Restore from './components/recuperar_contrasena/MainView'
import NewPassword from './components/cambio_contrasena/MainView'
function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Restore" element={<Restore/>} />
          <Route path="/New_Password" element={<NewPassword/>} />
        </Routes>
      </Router>
    );
  }
  
  export default AppRoutes;