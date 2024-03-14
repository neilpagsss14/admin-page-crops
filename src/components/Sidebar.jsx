import React from "react";
import {
  HomeIcon,
  FarmersIcon,
  LogOutIcon,
  CheckpointIcon,
  DeliveriesIcon,
  NotificationIcon,
  AnalyticsIcon,
} from "../assets/svg";

function Sidebar({ toggleOpen }) {
  const links = [
    {
      name: "Dashboard",
      icon: HomeIcon(),
      link: "#",
    },
    {
      name: "Farmers",
      icon: FarmersIcon(),

      link: "#",
    },
    {
      name: "Checkpoint Personnel",
      icon: CheckpointIcon(),

      link: "#",
    },
    {
      name: "Deliveries",
      icon: DeliveriesIcon(),
      link: "#",
    },
    {
      name: "Analytics",
      icon: AnalyticsIcon(),
      link: "#",
    },
    {
      name: "Notifications",
      icon: NotificationIcon(),
      link: "#",
    },
    {
      name: "Log Out",
      icon: LogOutIcon(),
      link: "#",
    },
  ];
  return (
    <nav
      className={`bg-green-200 shadow-2xl ${
        toggleOpen ? "translate-x-0" : "-translate-x-full"
      }lg:w-64 lg:fixed lg:h-full w-full flex flex-col px-2 sm:fixed sm:h-full sm:w-64  ${
        toggleOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="md:flex flex-col justify-between">
        <div>
          <div className="flex pt-1 gap-4">
            <img width={60} src="/src/assets/images/crops.png" />
            <div className="flex font-poppins-bold items-center text-2xl">
              BERNA CROP
            </div>
          </div>
          <div className="border-t-2 border-green-500 mb-1 mt-16"></div>
          <div className="flex flex-col gap-3">
            {links.map((link, index) => {
              return (
                <div key={index}>
                  <>
                    <a href={`${link.link}`}>
                      <div class="py-2 pl-1 rounded-md cursor-pointer hover:bg-[#F3ED59] bg-transparent delay-100 duration-100 ease-in-out">
                        <div class=" flex items-center">
                          <div class="flex items-center">{link.icon}</div>
                          <span class=" text-sm pl-2 font-bold text-black font-poppins">
                            {link.name}
                          </span>
                        </div>
                      </div>
                    </a>
                  </>
                  {/* <div class=" border-t-2 border-green-500 mt-2"></div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
