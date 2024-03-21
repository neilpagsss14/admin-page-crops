import React from "react";
import { DisabledIcon, DownloadIcon, EditIcon } from "../assets/svg";

function Farmer() {
  return (
    <div className="px-5 py-5 sm:px-2">
      <div className="flex items-center max-w-screen-lg py-8 sm:px-8 justify-between">
        <div>
          <h2 class="font-poppins-bold text-gray-700">Farmer Accounts</h2>
          <span class="text-xs font-poppins text-gray-500">
            View farmers of registered farmers.
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-10 spacex-8 lg:ml-40">
            <button class="flex items-end gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-poppins-bold text-black focus:outline-none focus:ring hover:bg-green-700">
              {DownloadIcon()}CSV
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr class="bg-green-200 text-left text-sm font-poppins-bold uppercase tracking-widest text-black">
                <th class="px-5">
                  <input type="checkbox"></input>
                </th>
                <th class="px-5 py-3">No.</th>
                <th class="px-5 py-3">Farmers Name</th>
                <th class="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5">
                  <input type="checkbox"></input>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm flex-row flex gap-2">
                  <p class="font-poppins">99</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="font-poppins-bold flex items-center ">
                    Spencer D. So
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900 font-poppins-bold">
                    Active
                  </span>
                  <span className="float-end px-2 cursor-pointer">
                    {DisabledIcon()}
                  </span>
                  <span className="float-end cursor-pointer">{EditIcon()}</span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="px-5">
                  <input type="checkbox"></input>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="font-poppins">99</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="font-poppins-bold flex items-center ">
                    Mariene Bernasor
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900 font-poppins-bold">
                    Active
                  </span>
                  <span className="float-end px-2 cursor-pointer">
                    {DisabledIcon()}
                  </span>
                  <span className="float-end cursor-pointer">{EditIcon()}</span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="px-5">
                  <input type="checkbox"></input>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="font-poppins">99</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="font-poppins-bold flex items-center ">
                    Carl Angelo Suasola
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span class="rounded-full bg-red-400 px-3 py-1 text-xs text-green-900 font-poppins-bold">
                    Deactivated
                  </span>
                  <span className="float-end px-2 cursor-pointer" onClick={"#"}>
                    {DisabledIcon()}
                  </span>
                  <span className="float-end cursor-pointer">{EditIcon()}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Farmer;
