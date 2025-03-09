import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/MainView'
import Register from './components/register/MainView'

function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </Router>
    );
  }
  
  export default AppRoutes;