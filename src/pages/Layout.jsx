import React, { useState } from "react";
import Side from "../components/Side";
import NavBar from "../components/NavBar";
import MainMenu from "./MainMenu";
import { Outlet } from "react-router-dom";

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
      <MainMenu />
    </div>
  );
}

export default DashBoard;
