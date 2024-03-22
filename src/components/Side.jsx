import React, { useEffect, useState } from "react";
import {
  AnalyticsIcon,
  CloseIcon,
  CheckpointIcon,
  DeliveriesIcon,
  FarmersIcon,
  HomeIcon,
  NotificationIcon,
  ShutdownIcon,
} from "../assets/svg/Icons";
import { useNavigate } from "react-router-dom";

function Side({ closeSidebar, sidebarOpen, isNavOpen }) {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };
  const navigateToDashboard = () => {
    navigate("/dashboard");
    closeSidebar();
  };
  const navigateToFarmers = () => {
    navigate("/farmers");
    closeSidebar();
  };
  const navigateToCheckpoint = () => {
    navigate("/checkpoint");
    closeSidebar();
  };
  const navigateToDeliveries = () => {
    navigate("/deliveries");
    closeSidebar();
  };
  const navigateToAnalytics = () => {
    navigate("/analytics");
    closeSidebar();
  };
  const navigateToNotification = () => {
    navigate("/notification");
    closeSidebar();
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className={` transition-all fixed top-0 left-0 z-40 w-64 h-screen sm:translate-x-0 ${
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
            <li onClick={navigateToFarmers}>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {FarmersIcon()}Farmers
              </span>
            </li>
            <li onClick={navigateToCheckpoint}>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-md font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group ">
                {CheckpointIcon()}
                Checkpoint Personnel
              </span>
            </li>
            <li onClick={navigateToDeliveries}>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {DeliveriesIcon()}
                Deliveries
              </span>
            </li>
            <li onClick={navigateToAnalytics}>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {AnalyticsIcon()}
                Analytics
              </span>
            </li>

            <li onClick={navigateToNotification}>
              <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                {NotificationIcon()}
                Notifications
              </span>
            </li>
          </ul>
          <div className="pt-24">
            <ul>
              <li onClick={navigateToLandingPage}>
                <span className=" cursor-pointer gap-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-green-700 group">
                  {ShutdownIcon()}
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Side;
