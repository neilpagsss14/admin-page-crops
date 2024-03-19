import { React, useState } from "react";
import { BurgerIcon, MessageIcon, NotificationIcon } from "../assets/svg";

function NavBar({ toggleSideBar }) {
  const navigateToLandingPage = () => {
    navigate("/");
  };
  return (
    <div className="bg-green-200 w-full shadow-lg flex flex-row items-center justify-between px-20 h-16 ">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSideBar}
        className="flex items-center justify-start text-sm text-gray-500 rounded-lg float-left"
      >
        {BurgerIcon()}
      </button>
      <div className="flex justify-around md:float-right">
        <div className="flex flex-row gap-5">
          <div className="cursor-pointer hover:shadow-xl">
            <button className="bg-transparent px-2 py-2 rounded-md">
              {MessageIcon()}
            </button>
          </div>
          <div className="cursor-pointer hover:shadow-xl">
            <button className="bg-transparent px-2 py-2 rounded-md">
              {NotificationIcon()}
            </button>
          </div>
          <button
            onClick={navigateToLandingPage}
            className="bg-green-500 hover:bg-[#F3ED59] px-5 items-center rounded-md h-10 text-sm font-poppins-bold flex"
          >
            Track Here
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
