import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Burger from "./Burger";
import Notifications from "../assets/svg/Notifications";
import SettingsIcon from "../assets/svg/SettingsIcon";
import LogOutIcon from "../assets/svg/LogOutIcon";

function DashBoard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigateToLandingPage = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-green-100 relative">
      <Burger isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <nav
        className={`bg-green-200 shadow-2xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-64 lg:fixed lg:left-0 h-screen lg:h-full w-full flex flex-col px-2`}
      >
        <div className="hidden md:flex flex-col justify-between">
          <div className="z-50">
            {/* <span className="absolute scale-[0.35] origin-top flex-row justify-center"> */}
            <div className="flex pt-1 pl-4">
              <img width={60} src="/src/assets/images/crops.png" />
              {/* <img src="/src/"> */}
            </div>
            {/* </span> */}

            <div className="border-t-2 border-green-500 mb-3 mt-32"></div>
            <div className="flex flex-col gap-3">
              <a href="/dashboard">
                <div class="py-2 pl-3 rounded-md cursor-pointer hover:bg-green-100 bg-green-500 delay-100 duration-300 ease-in-out">
                  <div class=" flex items-center">
                    <div class="flex items-center">
                      <Notifications />
                    </div>
                    <span class=" text-sm pl-2 font-bold text-black font-poppins">
                      Dashboard
                    </span>
                  </div>
                </div>
              </a>
              <div class=" border-t-2 border-green-500 mb-3"></div>
              <a href="/dashboard">
                <div class="py-2 pl-3 rounded-md cursor-pointer hover:bg-green-100 bg-green-500 delay-100 duration-300 ease-in-out">
                  <div class=" flex items-center">
                    <div class="flex items-center">
                      <SettingsIcon />
                    </div>
                    <span class=" text-sm pl-2 font-bold text-black font-poppins">
                      Settings
                    </span>
                  </div>
                </div>
              </a>
              <div class=" border-t-2 border-green-500 mb-3"></div>
              <a href="/">
                <div class="py-2 pl-3 rounded-md cursor-pointer hover:bg-green-100 bg-green-500 delay-100 duration-300 ease-in-out">
                  <div class=" flex items-center">
                    <div class="flex items-center">
                      <LogOutIcon />
                    </div>
                    <span class=" text-sm pl-2 font-bold text-black font-poppins">
                      Log out
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <button
        onClick={toggleSidebar}
        className={`bg-transparent absolute py-5 px-5 w-12 h-16 transition-transform ${
          isSidebarOpen ? "left-[255px]" : "left-0"
        }`}
      >
        <svg
          width="40"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.125 8.333V6.25h18.75v2.083H3.125zm0 5.209h18.75v-2.084H3.125v2.084zm0 5.208h18.75v-2.083H3.125v2.083z"
            fill="#00448C"
          ></path>
        </svg>
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
            <button className="bg-green-500 hover:bg-green-100 px-5 items-center rounded-md h-10 text-sm font-poppins-bold flex">
              Track Here
            </button>
          </div>
        </div>
      </nav>
      <div className="py-5 flex font-poppins-bold justify-center text-center">
        THIS IS THE DASHBOARD
      </div>
      <div className="flex justify-center h-screen">
        <button
          onClick={navigateToLandingPage}
          className="bg-green-500 hover:bg-green-700 px-5 items-center rounded-md h-10 text-sm font-poppins flex"
        >
          Balik sa
        </button>
      </div>
    </div>
  );
}

export default DashBoard;
