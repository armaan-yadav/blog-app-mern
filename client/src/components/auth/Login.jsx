import React, { useState } from "react";
import Button from "../../utils/Button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="bg-red-300 w-full h-[calc(100vh-66px)]  ">
      <form
        action="#"
        className=" m-auto w-[300px] "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="outline-none "
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Password</label>
          <div className="relative w-full">
            <input
              type={`${showPassword ? `text` : "password"}`}
              name="password"
              id="password"
              className="outline-none w-full"
            />
            <button
              className="absolute right-3 top-[50%] translate-y-[-50%]"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {" "}
              <i
                class={`fa-solid ${
                  showPassword ? `fa-eye-slash` : `fa-eye`
                } text-gray-400`}
              ></i>
            </button>
          </div>
        </div>
        <Button text={"Log In"} style={"w-full"} />
      </form>
    </section>
  );
};

export default Login;
