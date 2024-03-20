import React, { useEffect, useState } from "react";
import {
  AnalyticsIcon,
  CloseIcon,
  CheckpointIcon,
  DeliveriesIcon,
  FarmersIcon,
  HomeIcon,
  LogOutIcon,
  NotificationIcon,
} from "../assets/svg/Icons";
import { useNavigate } from "react-router-dom";

function Side({ closeSidebar, sidebarOpen, isNavOpen }) {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  // useEffect(() => {

  // }, [showSidebar]);

  return (
    <>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0    ${
          sidebarOpen && "hidden"
        } ${!isNavOpen && "sm:-translate-x-full "}`}
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-green-200 border-r border-gray-300  shadow-2xl">
          <ul className="space-y-4">
            <span onClick={closeSidebar} className="cursor-pointer float-end">
              {CloseIcon()}
            </span>
            <div className="flex pt-1 gap-4 mb-16">
              <img width={65} src="/src/assets/images/crops.png" />
              <div className="flex font-poppins-bold items-center text-md">
                BERNA CROP
              </div>
            </div>
            <li onClick={navigateToDashboard}>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {HomeIcon()}
                DashBoard
              </span>
            </li>

            <li>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {FarmersIcon()}
                Farmers
              </span>
            </li>
            <li>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-md font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {CheckpointIcon()}
                Checkpoint Personnel
              </span>
            </li>
            <li>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {DeliveriesIcon()}
                Deliveries
              </span>
            </li>
            <li>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {AnalyticsIcon()}
                Analytics
              </span>
            </li>

            <li>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {NotificationIcon()}
                Notifications
              </span>
            </li>
            <li onClick={navigateToLandingPage}>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {LogOutIcon()}
                Logout
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Side;
