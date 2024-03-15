import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Side from "./Side";
import { BurgerIcon } from "../assets/svg";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function DashBoard() {
  const [isNavOpen, setIsNavOpen] = useState(false); // nav

  const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar

  const toggleSideBar = () => {
    setIsNavOpen(!isNavOpen);
    setSidebarOpen(false);
  };

  const closeSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setIsNavOpen(false);
  };

  return (
    <div>
      <NavBar toggleSideBar={toggleSideBar} />
      <Side
        closeSidebar={closeSidebar}
        sidebarOpen={sidebarOpen}
        isNavOpen={isNavOpen}
      />
    </div>
  );
}

export default DashBoard;
