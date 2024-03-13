import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BurgerIcon from "../assets/svg/BurgerIcon";

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
    <div className="bg-green-100 relative">
      <div>
        <Sidebar toggleOpen={isSidebarOpen} />
        <button
          onClick={toggleSidebar}
          className={`bg-transparent absolute py-5 px-5 w-12 h-16 transition-transform ${
            isSidebarOpen ? "left-[255px]" : "left-0"
          }`}
        >
          <BurgerIcon />
        </button>
        <nav className="bg-green-200 shadow-lg flex flex-row h-20 items-center justify-between px-14">
          <div>
            <img
              className={`md:h-20 md:w-auto -my-auto scale-75 items-center flex ${
                isSidebarOpen ? "opacity-0" : "opacity-100"
              }`}
              // src="/src/assets/images/ustp logo blue.PNG"
            />
          </div>
          <div>
            <div className="flex flex-row items-center gap-7">
              <img
                className="md:h-20 md:w-auto scale-[.2] cursor-pointer items-center"
                // src="/src/assets/images/thesis.png"
              />
              <div className="cursor-pointer hover:shadow-xl">
                <button className="bg-transparent px-2 py-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="cursor-pointer hover:shadow-xl">
                <button className="bg-transparent px-2 py-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={navigateToLandingPage}
                className="bg-green-500 hover:bg-green-100 px-5 items-center rounded-md h-10 text-sm font-poppins-bold flex"
              >
                Track Here
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="px-20 -z-10 h-screen py-20">
        <div className="bg-green-200 w-60 h-60 py-4 shadow-2xl text-center font-poppins-bold justify-center rounded-lg"></div>
      </div>
    </div>
  );
}

export default DashBoard;
