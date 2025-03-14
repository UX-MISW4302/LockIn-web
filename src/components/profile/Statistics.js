import React from "react";
import "./Statistics.css";

const achievements = [
  { name: "UI Design Mastery", description: "Completed advanced UI design course", points: 600 },
  { name: "Shopping Expert", description: "Purchased all necessary groceries", points: 200 },
  { name: "API Development", description: "Built a fully functional API", points: 500 },
  { name: "Avid Reader", description: "Read an entire book", points: 400 },
  { name: "Fitness Enthusiast", description: "Completed a month-long workout routine", points: 300 },
];

function Achievements() {
  return (
    <div className="achievement-list">
    <h1 className="calendar-text">Estadisticas</h1>
      <div className="achievement-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-box">
            {/* Achievement Details */}
            <div className="achievement-details">
              <div className="achievement-name">{achievement.name}</div>
              <div className="achievement-description">{achievement.description}</div>
            </div>
            {/* Points Display */}
            <div className="achievement-points">{achievement.points} puntos</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
