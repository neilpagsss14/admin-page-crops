import React from "react";
import { useNavigate } from "react-router-dom";
import { notif } from "../assets/svg";

function DashBoard() {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };
  return (
    <div className="bg-green-100">
      <nav className="bg-green-200 shadow-lg flex flex-row h-20 items-center justify-between px-14">
        <div>
          <img
            className="md:h-20 md:w-auto -my-auto scale-75 cursor-pointer items-center flex"
            src="/src/assets/images/ustp logo blue.PNG"
          />
        </div>
        <div>
          <div className="flex flex-row items-center gap-5">
            <img
              className="md:h-20 md:w-auto scale-50 cursor-pointer items-center flex"
              src="/src/assets/images/thesis.png"
            />
            <div className="cursor-pointer">
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
            <button className="bg-green-500 hover:bg-green-700 px-5 items-center rounded-md h-10 text-sm font-poppins-bold flex">
              Track Here
            </button>
          </div>
        </div>
      </nav>
      <div className="py-5 flex font-poppins-bold justify-center text-center ">
        THIS IS THE DASHBOARD OF OUR THESIS
      </div>
      <div className="flex justify-center h-screen">
        <button
          onClick={navigateToLandingPage}
          className="bg-green-500 hover:bg-green-700 px-5 items-center rounded-md h-10 text-lg font-poppins flex"
        >
          Balik sa
        </button>
      </div>
    </div>
  );
}

export default DashBoard;
