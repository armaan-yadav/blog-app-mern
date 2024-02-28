import React from "react";

const Header = () => {
  return (
    <nav className="h-[66px] w-full  flex items-center justify-between px-3 sm:px-[5rem] shadow-lg bg-white mb-6">
      <h1 className="text-2xl font-semibold">My Blog App</h1>
      <div className="flex gap-4  sm:gap-5">
        <button className="text-md font-[400] px-3 sm:px-6 py-2 sm:py-2 rounded-lg hover:bg-black hover:text-white duration-200">
          Login
        </button>
        <button className="text-md font-[400] px-3 sm:px-6 py-2 sm:py-2 rounded-lg hover:bg-black hover:text-white duration-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Header;
