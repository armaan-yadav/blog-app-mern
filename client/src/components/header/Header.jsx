import React from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";

const Header = () => {
  return (
    <nav className="h-[66px] w-full  flex items-center justify-between px-3 sm:px-[5rem] shadow-lg bg-white ">
      <Link to={"/"}>
        <h1 className="text-2xl font-semibold">My Blog App</h1>
      </Link>
      <div className="flex gap-4  sm:gap-5">
        <Link to={"/login"}>
          <Button text="Login" />
        </Link>
        <Link to={"/signup"}>
          <Button text="Signup" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
