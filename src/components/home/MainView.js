import React from "react";
import "./MainView.css"; 
import TaskControls from "./TaskControls";
import TaskList from "./TaskList";
import Calendar from "./Calendar";

function MainView() {
  return (
    <div className="main-view">
    <div style={{ paddingTop: "14px", margin: "30px" }}>
      {/* Task Controls Section */}
      <TaskControls />

      <div className="task-calendar-row">
      <h1 className="tareas">Tareas</h1>

        <div className="spacer"></div>
        <h1 className="calendar-text">Calendario</h1>
      </div>

      <div className="task-calendar-container">
        <TaskList />
        <Calendar />
      </div>


      
</div>
    </div>
  );
}

export default MainView;
