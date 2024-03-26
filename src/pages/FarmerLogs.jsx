import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { DownloadIcon } from "../assets/svg";

function FarmerLogs() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can perform additional actions here when the date is selected
  };
  return (
    <div className="px-5 py-5 sm:px-2">
      <div className="flex items-center max-w-screen-lg py-8 sm:px-8 justify-between">
        <div>
          <h2 className="font-poppins-bold text-gray-700">Farmers' Data</h2>
          <span className="text-xs font-poppins text-gray-500">
            View farmers of history Logs.
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-10 spacex-8 lg:ml-40">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              className="rounded-md bg-white px-4 py-2 text-sm font-poppins-bold text-black"
            />
            <button className="flex items-end gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-poppins-bold text-black hover:bg-green-700">
              {DownloadIcon()}Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerLogs;
