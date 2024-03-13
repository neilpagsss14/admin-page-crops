import React from "react";
import HomeIcon from "../assets/svg/HomeIcon";
import LogOutIcon from "../assets/svg/LogOutIcon";
import SettingsIcon from "../assets/svg/SettingsIcon";

function Sidebar({ toggleOpen }) {
  const links = [
    {
      name: "Dashboard",
      icon: <HomeIcon />,
      link: "#",
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,

      link: "#",
    },
    {
      name: "Logout",
      icon: <LogOutIcon />,

      link: "#",
    },
  ];
  return (
    <nav
      className={`bg-green-200 shadow-2xl ${
        toggleOpen ? "translate-x-0" : "-translate-x-full"
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
            {links.map((link, index) => {
              return (
                <>
                  <div key={index}>
                    <a href={`${link.link}`}>
                      <div class="py-2 pl-3 rounded-md cursor-pointer hover:bg-green-100 bg-green-500 delay-100 duration-300 ease-in-out">
                        <div class=" flex items-center">
                          <div class="flex items-center">{link.icon}</div>
                          <span class=" text-sm pl-2 font-bold text-black font-poppins">
                            {link.name}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class=" border-t-2 border-green-500 mb-3"></div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
