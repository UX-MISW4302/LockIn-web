import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css"; // Button styles are here

const localizer = momentLocalizer(moment);

// Events (including the two you mentioned)
const events = [
  { title: "Long Help", start: new Date(2025, 2, 4), end: new Date(2025, 2, 6), allDay: true },
  { title: "5:30am Help", start: new Date(2025, 2, 14, 5, 30), end: new Date(2025, 2, 14, 6, 30) },
];

// Function to customize event colors
const eventPropGetter = (event) => {
  const isLong = event.allDay || (event.end - event.start) > 2 * 60 * 60 * 1000; // Longer than 2 hours

  return {
    style: {
      backgroundColor: isLong ? "#A8E6CF" : "#FF5C5C",
      color: "black",
      borderRadius: "5px",
      padding: "2px",
    },
  };
};

// Custom Toolbar Component
const CustomToolbar = ({ label, onView, view, onNavigate }) => {
  return (
    <div className="custom-toolbar">
      {/* Navigation Buttons on the Right */}
      <div className="right-buttons">
        <button className="nav-button" onClick={() => onNavigate("PREV")}>{"<"}</button>
        <button className="nav-button" onClick={() => onNavigate("NEXT")}>{">"}</button>
        <button className="today-button" onClick={() => onNavigate("TODAY")}>Today</button>
      </div>

      {/* Month and Year in the Center */}
      <span className="toolbar-label">{label}</span>

      {/* View Buttons (Month, Week, Day) */}
      <div className="view-buttons">
        {["month", "week", "day"].map((v) => (
          <button
            key={v}
            className={`view-button ${view === v ? "selected" : ""}`}
            onClick={() => onView(v)}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

function CustomCalendar() {
  const [view, setView] = useState("month");

  return (
    <div style={{ height: "500px", padding: "20px", background: "white", borderRadius: "10px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        defaultView={view}
        onView={(newView) => setView(newView)}
        style={{ height: "100%" }}
        components={{ toolbar: (props) => <CustomToolbar {...props} view={view} onView={setView} /> }}
        eventPropGetter={eventPropGetter} // Apply custom event colors
      />
    </div>
  );
}

export default CustomCalendar;
