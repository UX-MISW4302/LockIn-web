import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="gradient-bg">
      <div style={{ width: "100%", height: "100%" }}>
        <AppRoutes />
      </div>
    </div>
  );
}


export default App;