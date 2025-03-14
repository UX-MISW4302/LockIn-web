import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./StatisticsView.css";

const data = [
  { name: "Ene", completadas: 65 },
  { name: "Feb", completadas: 50 },
  { name: "Mar", completadas: 70 },
  { name: "Abr", completadas: 80 },
  { name: "May", completadas: 60 },
  { name: "Jun", completadas: 75 },
  { name: "Jul", completadas: 68 },
  { name: "Ago", completadas: 85 },
  { name: "Sep", completadas: 72 },
  { name: "Oct", completadas: 78 },
  { name: "Nov", completadas: 90 },
  { name: "Dic", completadas: 66 },
];

const students = [
  { name: "Santiago Sinisterra", lastSeen: "5h" },
  { name: "Juan Orduz", lastSeen: "2h" },
  { name: "Daniel Pedroza", lastSeen: "10h" },
];

export default function StatisticsView() {
  return (
    <div className="statistics-container">
      <h2 className="title">Estadísticas Generales</h2>
      <div className="stats-content">
        <div className="user-list">
          <div className="user-list-scrollable">
            {students.map((student, index) => {
              const imageName = student.name.toLowerCase().replace(/ /g, "_") + ".jpg";
              return (
                <div key={index} className="user-info">
                  <img
                    src={`/${imageName}`}
                    alt="Usuario"
                    className="profile-pic"
                  />
                  <p className="username">{student.name}</p>
                  <span className="user-status">Última conexión: {student.lastSeen}</span>
                  <a href="/profile" className="view-profile">Ver perfil</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completadas" fill="#4A90E2" />
            </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
      <div className="stats-summary">
        <div className="stat-item">
          <h3>{students.length}</h3>
          <p>Usuarios activos</p>
        </div>
        <div className="stat-item">
          <h3>200</h3>
          <p>Tareas completadas</p>
        </div>
        <div className="stat-item">
          <h3>500</h3>
          <p>Tareas creadas</p>
        </div>
      </div>
    </div>
  );
}