import React from "react";
import { NotificationIcon, RecentIcon } from "../assets/svg";

function Dashboard() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col flex-1 min-w-0  transition-all">
        <div className="mt-5 border-b border-gray-300">
          <div
            className={`
               flex h-screen sm:flex-col md:flex-row flex-cols overflow-y-scroll-hidden p-5 bg-white gap-4`}
          >
            <div className="w-full pb-4">
              <div className="h-auto lg:h-48 bg-gray-200 shadow-lg p-5 rounded-md ">
                <div className="relative">
                  <div className="flex-cols grid grid-cols-1 md:grid-cols-2 justify-between">
                    <div>
                      <span className="font-poppins text-gray-700">
                        Overall crops as of{" "}
                        <span className="font-poppins-bold text-black">
                          {currentDate}
                        </span>
                      </span>
                    </div>
                    <div className="float-right text-right"></div>
                  </div>
                  <div className="flex flex-row gap-10 sm:gap-x-5">
                    <div className="flex-cols grid grid-cols-2 lg:grid-cols-5 px-4 py-10 gap-y-6 md:gap-x-0">
                      <div className=" md:flex md:items-center md:justify-center">
                        <span className="cursor-pointer group bg-orange-orange rounded-full h-14 w-14 flex items-center justify-center">
                          <img
                            className="flex items-center"
                            src="/src/assets/images/crops.png"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center cursor-pointer gap-2">
                      <span className="flex flex-row text-4xl font-poppins-bold ">
                        5
                      </span>
                      <span className="font-poppins text-gray-600 text-sm">
                        UPCOMING
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center cursor-pointer gap-2">
                      <span className="flex flex-row text-4xl font-poppins-bold ">
                        15
                      </span>
                      <span className="font-poppins text-gray-600 text-sm">
                        COMPLETED
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center cursor-pointer gap-2">
                      <span className="flex flex-row text-4xl font-poppins-bold ">
                        25
                      </span>
                      <span className="font-poppins text-gray-600 text-sm">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-auto md:h-auto mt-10 bg-gray-200 shadow-lg p-5 rounded-md">
                <div className="relative">
                  <span className="font-poppins-bold text-gray-700">
                    Transactions this week
                  </span>
                  <div className="flex flex-cols w-full pb-4 justify-between">
                    <div className="text-gray-700 hidden md:flex flex-cols gap-2"></div>
                  </div>
                  <div className="text-gray-700 flex md:hidden flex-cols gap-2">
                    <div className="grid grid-cols-2 gap-2 ml-4"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="col-span-3 h-auto rounded-md w-full text-center mt-6 md:mt-0">
                      <span className="font-poppins">
                        No Transactions this Week!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 gap-y-4 h-auto w-2/6 sm:w-[100%]">
              <div className="bg-gray-200 h-auto shadow-lg rounded-md p-2 overflow-y-auto">
                <div className="relative">
                  <span className="flex flex-cols p-2 py-3 font-poppins-bold gap-4 border-b-2 border-gray-300 w-full">
                    {NotificationIcon()} Notifications
                  </span>
                  <div className="flex justify-center p-8 w-full font-poppins">
                    <span>No as of now hehe...</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-auto shadow-lg rounded-md p-2 overflow-y-auto">
                <div className="relative">
                  <span className="flex flex-cols p-2 py-3 font-poppins-bold gap-4 border-b-2 border-gray-300 w-full">
                    {RecentIcon()} Recent Transactions
                  </span>
                  <div className="flex justify-center p-8 w-full font-poppins">
                    <span>No Recent Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
