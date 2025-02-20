import React from "react";
import "./dashlayout.css";
import Sidebar from "../components/common/sidebar/sidebar";

const Dashlayout = ({ children }) => {
  return (
    <div className="dash-layout-top-container">
      <div className="dash-layout-sidebar-container">
        <Sidebar />
      </div>
      <div className="dash-layout-content-container">
        Navbar
        {children}
      </div>
    </div>
  );
};

export default Dashlayout;
