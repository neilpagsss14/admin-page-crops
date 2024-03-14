import React from "react";
import {
  AnalyticsIcon,
  BurgerIcon,
  CheckpointIcon,
  DeliveriesIcon,
  FarmersIcon,
  HomeIcon,
  LogOutIcon,
  NotificationIcon,
} from "../assets/svg/Icons";
import { useNavigate } from "react-router-dom";

function Side({ toggleOpen }) {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className={`bg-green-200 shadow-2xl ${
          toggleOpen ? "translate-x-0" : "-translate-x-full"
        }lg:w-64 lg:fixed lg:h-full w-full flex flex-col px-2 sm:fixed sm:h-full sm:w-64  ${
          toggleOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        {BurgerIcon()}
      </button>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-green-200 border-r border-gray-300  shadow-2xl">
          <ul className="space-y-4">
            <div className="flex pt-1 gap-4 mb-16">
              <img width={65} src="/src/assets/images/crops.png" />
              <div className="flex font-poppins-bold items-center text-md">
                BERNA CROP
              </div>
            </div>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-[#F3ED59] group"
              >
                {HomeIcon()}
                <span class="ml-3">DashBoard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-[#F3ED59] group"
              >
                {FarmersIcon()}
                <span class="ml-3">Farmers</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-md font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-[#F3ED59] group"
              >
                {CheckpointIcon()}
                <span class="ml-3">Checkpoint Personnel</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-[#F3ED59] group"
              >
                {DeliveriesIcon()}
                <span class="ml-3">Deliveries</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-[#F3ED59] group"
              >
                {AnalyticsIcon()}
                <span class="ml-3">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-[#F3ED59] group"
              >
                {NotificationIcon()}
                <span class="ml-3">Notifications</span>
              </a>
            </li>
            <li onClick={navigateToLandingPage}>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black font-poppins-bold hover:bg-[#F3ED59] group"
              >
                {LogOutIcon()}
                <span class="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Side;
