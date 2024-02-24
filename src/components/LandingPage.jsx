import React from "react";

function LandingPage() {
  return (
    <div className="bg-green-100 flex flex-row items-center justify-around h-screen w-screen">
      <div>
        <a href="/">
          <img
            className="h-44 md:h-72 mt-30 md:mt-0 lg:mt-0 sm:mt-0"
            src="/src/assets/images/crops.png"
          />
        </a>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              className="h-12 w-82 rounded-lg px-4 border-2 border-seagull w-80"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="h-12 w-82 mt-5 rounded-lg px-4 border-2 border-seagull"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex cursor-pointer">
              <input
                name="keepSignedIn"
                className="h-11 w-5 accent-scooter"
                type="checkbox"
              />
              <span className="text-secondary font-light text-sm mt-3 ml-1">
                Keep me signed in
              </span>
            </div>
          </div>
          <div>
            <button className="bg-green-500 py-2 px-10 rounded-lg text-secondary font-bold hover:text-white w-full">
              Log In
            </button>
            <span className="text-secondary font-light text-sm mt-3 cursor-pointer">
              Forgot your password?
            </span>
          </div>
          <div className="flex mt-5 justify-center border-t-2 pt-3">
            <span className="text-secondary">Don't have an account?</span>
          </div>
          <div className="flex mt-3 flex-col gap-x-8 md:gap-y-2">
            <button className="bg-green-500 text-secondary hover:bg-scooter rounded-lg px-10 py-2 text-sm font-bold text-blue-darkBlue hover:text-white delay-5000 duration-300 ease-in-out">
              REGISTER AS STUDENT
            </button>
            <button className="bg-green-500 text-secondary hover:bg-scooter rounded-lg px-10 py-2 text-sm font-bold text-blue-darkBlue hover:text-white delay-5000 duration-300 ease-in-out">
              APPLY AS A TRAINER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
