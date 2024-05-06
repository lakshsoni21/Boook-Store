import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:5555/users/login", data)
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("token", response.data.token);
          navigate("/users/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <>
      <div className="h-full w-full flex justify-center items-center gradient-custom">
        <div
          className="flex flex-col w-[38%] h-[75%] laptop:h-auto laptop:w-auto mobile:w-auto mobile:h-auto rounded-2xl p-10 bg-[#292424] shadow-xl shadow-gray-700
      mobile-sm:h-[80%]"
        >
          <div>
            <h1 className="text-2xl font-semibold text-center p-4 text-white">
              LOGIN
            </h1>
            <h1 className="text-xl font-semibold text-center text-gray-400 mobile-sm:text-lg">
              Please Enter your login and password
            </h1>
          </div>
          <div className="p-4 flex items-center flex-col gap-7 my-10 mobile-sm:my-6 mobile-sm:gap-6">
            <div className="flex gap-4 w-full h-11 justify-center ">
              <input
                type="text"
                name="username"
                id="username"
                className="border w-full rounded-sm p-3 text-md text-white bg-[#292424] border-white placeholder:text-white"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              />
            </div>
            <div className="flex gap-4 w-full justify-center h-11">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border border-white w-full rounded-sm p-3 text-md text-white bg-[#292424] placeholder:text-white"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <div>
              <button
                className="py-2 px-10 rounded-md text-center border-2 border-white text-white hover:cursor-pointer"
                onClick={() => {
                  handleLogin();
                }}
              >
                LOGIN
              </button>
            </div>
            <div className="flex gap-2 my-3 flex-wrap justify-center mobile-sm:my-0">
              <h1 className="text-xl text-white mobile:text-lg">
                Don't have an account?
              </h1>
              <Link to={"/signup"}>
                <h2 className="text-xl hover:underline text-gray-400 mobile:text-lg">
                  Signup
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
