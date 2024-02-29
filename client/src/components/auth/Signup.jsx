import React, { useState } from "react";
import Button from "../../utils/Button";
import { json } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": " application/json" },
      body: JSON.stringify({ email, password, name }),
    });
  };
  return (
    <section className="bg-red-300 w-full h-[calc(100vh-66px)]  ">
      <form
        action="#"
        className=" m-auto w-[300px] "
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            className="outline-none "
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            className="outline-none "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Password</label>
          <div className="relative w-full">
            <input
              type={`${showPassword ? `text` : "password"}`}
              name="password"
              id="password"
              value={password}
              className="outline-none w-full"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="absolute right-3 top-[50%] translate-y-[-50%]"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              <i
                className={`fa-solid ${
                  showPassword ? `fa-eye-slash` : `fa-eye`
                } text-gray-400`}
              ></i>
            </button>
          </div>
        </div>
        <Button text={"Sign Up"} style={"w-full"} />
      </form>
    </section>
  );
};

export default Signup;
