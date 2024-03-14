import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Side from "./Side";
import { BurgerIcon } from "../assets/svg";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function DashBoard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* <Sidebar toggleOpen={isSidebarOpen} /> */}
      <NavBar />
      <Side />
      {/* <button
        onClick={toggleSidebar}
        className={`bg-transparent absolute py-5 px-5 w-12 h-16 transition-transform ${
          isSidebarOpen ? "left-[255px]" : "left-0"
        }`}
      >
        {BurgerIcon()}
      </button> */}
    </div>
  );
}

export default DashBoard;
