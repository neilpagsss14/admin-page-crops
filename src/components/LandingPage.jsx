import React from "react";

function LandingPage() {
  return (
    <div className="bg-green-100 flex flex-row items-center justify-around h-screen w-screen">
      <div className="fixed top-0 left-0">
        <a href="/">
          <img
            className="md:h-20 md:w-auto -my-auto scale-50 cursor-pointer"
            src="/src/assets/images/thesis.png"
          />
        </a>
      </div>
      <div>
        <img
          className=" sm:h-40 h-44 md:h-72 mt-30 md:mt-0 lg:mt-0 sm:mt-0"
          src="/src/assets/images/crops.png"
          // src="https://lms-sg-application-bucket.s3.ap-southeast-1.amazonaws.com/public/prd/LAF_Text.png"
        />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <input
              type="email"
              className="h-14 w-82 rounded-xl px-4 border-2 w-80 font-poppins"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="h-14 w-82 rounded-xl px-4 border-2 w-80 mt-5 font-poppins"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between mt-2 mb-2">
            <div className="flex">
              <input className="h-11 w-5 cursor-pointer" type="checkbox" />
              <span className="font-poppins font-light text-sm mt-3 ml-1">
                Keep me signed in
              </span>
            </div>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-700 py-3 px-10 rounded-xl text-sm font-poppins-bold hover:text-white w-full delay-1500 duration-100 ease-in-out">
              Log In
            </button>
            <span className="text-green-500 font-poppins text-sm mt-3 cursor-pointer">
              Forgot your password?
            </span>
          </div>
          <div className="flex mt-6 justify-center">
            <span className="font-poppins text-xs">Don't have an account?</span>
          </div>
          <div className="flex mt-3 flex-col gap-x-8 md:gap-y-2">
            <button className="bg-green-500 hover:bg-green-700 rounded-xl px-10 py-3 text-sm font-poppins-bold  hover:text-white delay-1500 duration-100 ease-in-out">
              Apply as Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
