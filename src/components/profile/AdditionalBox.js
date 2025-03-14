import React from "react";
import "./AdditionalBox.css"; // Make sure the CSS file is correctly linked

function AdditionalBox() {
  return (
    <div className="additional-box-container">
      <div className="additional-box">
        <div className="stats-row">
          <div className="stat-box">
            <h2 className="stat-title">Tareas Completadas</h2>
            <p className="stat-number">12</p> {/* Replace with dynamic data */}
          </div>
          <div className="stat-box">
            <h2 className="stat-title">Tareas Rendidas</h2>
            <p className="stat-number">5</p> {/* Replace with dynamic data */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalBox;
