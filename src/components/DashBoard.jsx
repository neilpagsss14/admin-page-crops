import React from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex font-poppins-bold justify-center text-center ">
        THIS IS THE DASHBOARD OF OUR THESIS
      </div>
      <div className="flex justify-center">
        <button
          onClick={navigateToLandingPage}
          className="bg-green-500 hover:bg-green-700 py-3 w-28 rounded-xl text-sm font-poppins-bold hover:text-white delay-1500 duration-100 ease-in-out"
        >
          Balik sa
        </button>
      </div>
    </div>
  );
}

export default DashBoard;
