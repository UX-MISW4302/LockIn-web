import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/MainView";
import Login from "./components/login/Login";
import Register from "./components/register/MainView";
import Restore from "./components/recuperar_contrasena/MainView";
import NewPassword from "./components/cambio_contrasena/MainView";
import Layout from "./components/navbar/Layout";
import Profile from "./components/profile/MainView";
import Admin from './components/admin/MainView'

function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Restore" element={<Restore/>} />
          <Route path="/New_Password" element={<NewPassword/>} />
          <Route path="/Admin" element={<Admin/>} />
             {/* Home should be inside Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        </Routes>
      </Router>
    );
  }
  
  export default AppRoutes;
