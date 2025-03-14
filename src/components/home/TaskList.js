import React from "react";
import { FaTrash } from "react-icons/fa"; // Import trash icon
import "./TaskList.css";

const tasks = [
  { name: "Design UI", category: "Work", progress: 80, startDate: "2025-03-10", endDate: "2025-03-20" },
  { name: "Grocery Shopping", category: "Personal", progress: 20, startDate: "2025-03-12", endDate: "2025-03-12" },
  { name: "Develop API", category: "Work", progress: 50, startDate: "2025-03-15", endDate: "2025-04-01" },
  { name: "Read Book", category: "Leisure", progress: 60, startDate: "2025-03-05", endDate: "2025-03-25" },
  { name: "Exercise", category: "Health", progress: 40, startDate: "2025-03-08", endDate: "2025-03-30" },
];

function TaskList() {
  return (
    <div className="task-list">
      <div className="task-container">
        {tasks.map((task, index) => (
          <div key={index} className="task-box">
            {/* Task Details */}
            <div className="task-details">
              <div className="task-name">{task.name}</div>
              <div className="task-category">{task.category}</div>
              <div className="progress-wrapper">
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${task.progress}%` }}></div>
                </div>
                <span className="progress-text">{task.progress}%</span>
              </div>
              <div className="task-dates">{task.startDate} &emsp;&emsp; - &emsp;&emsp; {task.endDate}</div>


            </div>
            {/* Trash Icon */}
            <div className="task-delete">
              <img src="/Delete.svg" alt="Delete" className="delete-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;