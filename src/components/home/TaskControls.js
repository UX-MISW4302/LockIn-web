import React from "react";
import "./TaskControls.css"; // Make sure to have this CSS file


function TaskControls() {
  return (
    <div className="task-controls">
      {/* Categories and Search in a row */}
      <div className="task-row">
        <div className="task-search">
          <select className="category-dropdown">
            <option>Categorías</option>
          </select>
          <input type="text" placeholder="Buscar tarea" className="search-input" />
          <button className="search-button">
          <img src="/Search.svg" alt="Buscar" className="search-icon" />
          </button>
        </div>
        
        
        <select className="order-dropdown">
          <option>Ordenar por:</option>
        </select>
      </div>

      {/* Progress and Filter in a row */}
      <div className="task-row">
        {/* Progress Bar */}
        <div className="task-progress">
        <span className="progress-label">Progreso</span>
        <div className="progress-container">
            <progress value="50" max="100"></progress>
        </div>
        <span className="progress-range">0 - 100%</span>
        </div>



        <select className="filter-dropdown">
          <option>Filtrar por:</option>
        </select>
      </div>
    </div>
  );
}

export default TaskControls;
