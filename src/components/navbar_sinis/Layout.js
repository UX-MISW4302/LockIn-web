import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Outlet /> {/* This will render the current page inside Layout */}
      </div>
    </div>
  );
};

export default Layout;
