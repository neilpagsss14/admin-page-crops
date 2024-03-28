import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon, DownloadIcon } from "../assets/svg";

function FarmerLogs() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
          <div className="items-center spacex-8 lg:ml-40 flex gap-3">
            <div className="cursor-pointer">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                className="bg-transparent px-2 py-2 rounded-md border border-gray-300 font-poppins"
                popperClassName="datepicker-popper"
                placeholderText="Select Date"
              />
            </div>
            <button className="flex items-end gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-poppins-bold text-black hover:bg-green-700">
              Search
            </button>
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
