import React, { useState } from "react";
import Button from "../../utils/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const login = async () => {
    if ([email, password].some((e) => e.trim() === "")) {
      setError("All fields are required");
    } else {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": " application/json" },
        body: JSON.stringify({ email, password }),
      });
      const temp = await response.json();
      setError(temp.message);

      if (response.status == 200) {
        navigator("/");
      }
    }
  };
  return (
    <section className="bg-red-300 w-full h-[calc(100vh-66px)]  ">
      <form
        action="#"
        className=" m-auto w-[300px] "
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
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
              className="outline-none w-full"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="absolute right-3 top-[50%] translate-y-[-50%]"
              onClick={(e) => {
                e.preventDefault();
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
        {error && <div>{error}</div>}
        <Button text={"Log In"} style={"w-full"} />
      </form>
    </section>
  );
};

export default Login;
