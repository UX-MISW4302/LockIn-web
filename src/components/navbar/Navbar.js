import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Clickable Logo - Navigates to Home */}
      <img
        src="/lockin-logo.png"
        alt="Logo"
        className="navbar-logo"
        onClick={() => navigate("/home")}
        style={{ cursor: "pointer" }}
      />

      {/* Clickable Username and Avatar - Navigates to Profile */}
      <div className="navbar-user">
        <span 
          className="navbar-username" 
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >
          Daniel Pedroza
        </span>
        <img 
          src="/profilePic.png"
          alt="User" 
          className="navbar-avatar"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
}

export default NavBar;
