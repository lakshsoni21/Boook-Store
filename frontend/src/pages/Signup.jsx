import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    const data = {
      name: name,
      username: username,
      password: password,
    };

    if (password === confirmPassword) {
      axios
        .post("https://boook-store-4lip.onrender.com/users/signup", data)
        .then((res) => {
          alert("Success");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Password fields didn't match");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <div className="h-full w-full flex justify-center items-center gradient-custom">
        <div
          className="flex flex-col w-[38%] h-[75%] laptop:h-auto laptop:w-auto mobile:w-auto mobile:h-auto rounded-2xl p-10 bg-[#292424] shadow-xl shadow-gray-700
    mobile-sm:h-[80%]"
        >
          <div>
            <h1 className="text-3xl font-semibold text-center p-4 text-white mobile-sm:text-2xl">
              Signup Form
            </h1>
            <h1 className="text-xl font-semibold text-center text-gray-400 mobile-sm:text-lg">
              Please Enter your username and password
            </h1>
          </div>
          <div className="p-4 flex items-center flex-col gap-7 my-10 mobile-sm:my-6 mobile-sm:gap-3">
            <div className="flex gap-4 w-full h-11 justify-center ">
              <input
                type="text"
                name="name"
                id="name"
                className="border w-full rounded-sm p-3 text-md text-white bg-[#292424] border-white placeholder:text-white"
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
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
            <div className="flex gap-4 w-full justify-center h-11">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="border border-white w-full rounded-sm p-3 text-md text-white bg-[#292424] placeholder:text-white"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
              />
            </div>
            <div>
              <button
                className="py-2 px-10 rounded-md text-center border-2 border-white text-white hover:cursor-pointer hover:bg-white hover:text-black"
                onClick={() => {
                  handleSignUp();
                }}
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center flex-wrap text-xl text-white gap-3 mobile-sm:text-md">
              <h1 className="text-center">Already have an account?</h1>
              <Link to={"/login"}>
                {" "}
                <h1 className="hover:underline">Login</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
