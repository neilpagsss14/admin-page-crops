import React, { useState } from "react";
import Side from "./Side";
import NavBar from "./NavBar";
import MainMenu from "./MainMenu";

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
