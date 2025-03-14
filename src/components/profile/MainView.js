import React from "react";
import "./MainView.css"; 
import Details from "./Details";
import Statistics from "./Statistics";
import AdditionalBox from "./AdditionalBox";

function MainView() {
  return (
    <div className="main-view">
      <div style={{ paddingTop: "14px", margin: "30px" }}>
        {/* Task Controls Section */}
        
        <div className="task-calendar-container">
          <Details />
          <div className="statistics-section">
            <h2 className="statistics-title">Estadísticas</h2>
            <Statistics />
            <AdditionalBox /> 
          </div>
        </div>

      </div>
    </div>
  );
}

export default MainView;
