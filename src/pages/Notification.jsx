import React from "react";
import { CloseIcon, DeleteIcon, InfoIcon } from "../assets/svg";

function Notification() {
  return (
    <div className="px-14 py-5">
      <div className="flex items-center p-4 mb-4 border-t-8 border-green-500 bg-green-200 rounded-lg h-28">
        {InfoIcon()}
        <div className="ms-3 text-sm font-poppins">
          This is an example of a NOTIFICATION
        </div>
        <button className="ms-auto -mx-1.5 -my-1.5 bg-green-500 text-black rounded-md  hover:bg-green-700 inline-flex items-center justify-center h-10 w-10">
          {DeleteIcon()}
        </button>
      </div>
    </div>
  );
}

export default Notification;
