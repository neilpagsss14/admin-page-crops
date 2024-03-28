import React, { useState } from "react";
import { EditIcon } from "../assets/svg";
import EditCropsModal from "../assets/modal/EditCropsModal";

function Deliveries() {
  const [showEditCropsModal, setShowEditCropsModal] = useState(false);

  const toggleEditCropsModal = () => {
    setShowEditCropsModal(!showEditCropsModal);
  };
  const currentDateshort = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="px-5 py-5 sm:px-2">
      <EditCropsModal
        showModal={showEditCropsModal}
        toggleModal={toggleEditCropsModal}
      />
      <div className="flex items-center max-w-screen-lg py-8 sm:px-8 justify-between">
        <div>
          <h2 className="font-poppins-bold text-gray-700">Order Tracker</h2>
          <span className="text-xs font-poppins text-gray-500">
            View orders of registered farmers.
          </span>
        </div>
        {/* <div className="flex items-center justify-between">
          <div className="ml-10 spacex-8 lg:ml-40">
            <button className="flex items-end gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-poppins-bold text-black hover:bg-green-700">
              {DownloadIcon()}CSV
            </button>
          </div>
        </div> */}
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-green-200 text-left text-sm font-poppins-bold uppercase tracking-widest text-black">
                <th className="px-5 py-3">Farmers Name</th>
                <th className="px-5 py-3">Date Booked</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="  bg-white px-5 py-5 text-sm">
                  <div className="font-poppins-bold flex items-center ">
                    Spencer D. So
                  </div>
                </td>
                <td className="  bg-white px-5 py-5 text-sm">
                  <div className="font-poppins flex">
                    {currentDateshort} - {currentDateshort}
                  </div>
                </td>
                <td className="  bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-green-900 font-poppins-bold">
                    Ongoing
                  </span>
                </td>
                <td className="  bg-white px-5 py-5 text-sm flex">
                  <span
                    onClick={toggleEditCropsModal}
                    className="cursor-pointer"
                  >
                    {EditIcon()}
                  </span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className=" bg-white px-5 py-5 text-sm">
                  <div className="font-poppins-bold flex items-center ">
                    Mariene Bernasor
                  </div>
                </td>
                <td className=" bg-white px-5 py-5 text-sm">
                  <div className="font-poppins flex">
                    {" "}
                    {currentDateshort} - {currentDateshort}
                  </div>
                </td>
                <td className=" bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900 font-poppins-bold">
                    Arrived
                  </span>
                </td>
                <td className=" bg-white px-5 py-5 text-sm flex">
                  <span className="cursor-pointer">{EditIcon()}</span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className=" bg-white px-5 py-5 text-sm">
                  <div className="font-poppins-bold flex items-center ">
                    Carl Angelo Suasola
                  </div>
                </td>
                <td className=" bg-white px-5 py-5 text-sm">
                  <div className="font-poppins flex">
                    {" "}
                    {currentDateshort} - {currentDateshort}
                  </div>
                </td>
                <td className=" bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-red-400 px-3 py-1 text-xs text-green-900 font-poppins-bold">
                    Delayed
                  </span>
                </td>
                <td className=" bg-white px-5 py-5 text-sm flex gap-5">
                  <span className="cursor-pointer">{EditIcon()}</span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="  bg-white px-5 py-5 text-sm">
                  <div className="font-poppins-bold flex items-center ">
                    Spencer D. So
                  </div>
                </td>
                <td className="  bg-white px-5 py-5 text-sm">
                  <div className="font-poppins flex">
                    {currentDateshort} - {currentDateshort}
                  </div>
                </td>
                <td className="  bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-green-900 font-poppins-bold">
                    Verified
                  </span>
                </td>
                <td className="  bg-white px-5 py-5 text-sm flex">
                  <span className=" cursor-pointer ">{EditIcon()}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Deliveries;
