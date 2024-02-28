import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Burger from "./Burger";

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
        className={`bg-green-200 shadow-2xl  ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-64 lg:fixed lg:left-0 h-screen lg:h-full w-full flex flex-col justify-between px-14`}
      >
        <div className="hidden md:flex flex-col justify-between">
          <div className="z-50">
            <div className=" scale-[0.5]">
              <img src="/src/assets/images/udalogo black.png" />
            </div>
            <div class=" border-t-2 border-green-500 mb-3"></div>
            <div className="flex flex-col gap-3">
              <a href="/dashboard">
                <div class=" hover:bg-red-100  rounded-md mx-2 mt-2 mb-2 delay-100 duration-300 ease-in-out">
                  <div class="py-2 pl-3 mt-1 cursor-pointer bg-green-500 rounded-md">
                    <div class=" flex items-center">
                      <div class="flex items-center">
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
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </div>
                      <span class=" text-sm pl-2 font-bold text-black font-poppins">
                        Dashboard
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <div class=" border-t-2 border-green-500 mb-3"></div>
              <a href="/dashboard">
                <div class=" hover:bg-red-100  rounded-md mx-2 mt-2 mb-2 delay-100 duration-300 ease-in-out">
                  <div class="py-2 pl-3 mt-1 cursor-pointer bg-green-500 rounded-md">
                    <div class=" flex items-center">
                      <div class="flex items-center">
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
                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </div>
                      <span class=" text-sm pl-2 font-bold text-black font-poppins">
                        Settings
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <div class=" border-t-2 border-green-500 mb-3"></div>
              <a href="/">
                <div class=" hover:bg-red-100  rounded-md mx-2 mt-2 mb-2 delay-100 duration-300 ease-in-out">
                  <div class="py-2 pl-3 mt-1 cursor-pointer bg-green-500 rounded-md">
                    <div class=" flex items-center">
                      <div class="flex items-center">
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
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                          />
                        </svg>
                      </div>
                      <span class=" text-sm pl-2 font-bold text-black font-poppins">
                        Log out
                      </span>
                    </div>
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
            src="/src/assets/images/ustp logo blue.PNG"
          />
        </div>
        <div>
          <div className="flex flex-row items-center gap-5">
            <img
              className="md:h-20 md:w-auto scale-[.2] cursor-pointer items-center"
              src="/src/assets/images/thesis.png"
            />
            <div className="cursor-pointer">
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
            </div>
            <button className="bg-green-500 hover:bg-green-700 px-5 items-center rounded-md h-10 text-sm font-poppins-bold flex">
              Track Here
            </button>
          </div>
        </div>
      </nav>
      <div className="py-5 flex font-poppins-bold justify-center text-center">
        THIS IS THE DASHBOARD OF OUR THESIS
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
