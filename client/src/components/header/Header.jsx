import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../utils/Button";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { setUsername, username } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const response = fetch("http://localhost:5000/api/user/profile", {
      method: "GET",
      headers: { "Content-Type": " application/json" },
      credentials: "include",
    });
    response.then((response) => {
      response.json().then((userInfo) => {
        if (response.status == 200) {
          setUsername(userInfo.name);
        }
      });
    });
  }, []);

  function logout() {
    const response = fetch("http://localhost:5000/api/user/logout", {
      method: "POST",
      credentials: "include",
    });
    response.then((response) => {
      if (response.status == 200) setUsername(null);
    });
  }

  return (
    <nav className="h-[66px] w-full  flex items-center justify-between px-3 sm:px-[5rem] shadow-lg bg-white ">
      <Link to={"/"}>
        <h1 className="text-2xl font-semibold">My Blog App</h1>
      </Link>
      {!username ? (
        <div className="flex gap-4  sm:gap-5">
          <Link to={"/login"}>
            <Button text="Login" />
          </Link>
          <Link to={"/signup"}>
            <Button text="Signup" />
          </Link>
        </div>
      ) : (
        <div className="text-black flex items-center gap-2 ">
          <span className="text-lg font-bold"> {username}</span>
          <span
            className="text-lg font-semibold"
            onClick={() => {
              navigate("/create");
            }}
          >
            Create new blog
          </span>
          <div onClick={logout}>
            <Button text={"Log Out"} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
