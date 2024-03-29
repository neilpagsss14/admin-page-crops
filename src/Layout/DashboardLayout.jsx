import React, { useState } from "react";
import Side from "../components/Side";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import { Outlet } from "react-router-dom";

function DashBoardLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false); // nav

  const [sidebarOpen, setSidebarOpen] = useState(true); // sidebar

  const toggleSideBar = () => {
    setIsNavOpen(!isNavOpen);
    setSidebarOpen(false);
  };

  const closeSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setIsNavOpen(false);
  };

  return (
    <>
      <div>
        <NavBar toggleSideBar={toggleSideBar} />
        <Side
          closeSidebar={closeSidebar}
          sidebarOpen={sidebarOpen}
          isNavOpen={isNavOpen}
        />
        <Modal />

        <main className={`${!sidebarOpen && "ml-64 sm:ml-0"}`}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default DashBoardLayout;
