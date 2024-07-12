import React from "react";

import Oath from "../components/Oath.jsx";

const Login = () => {
  return (
    <div className="max-container flex items-center  mt-8 h-screen ">
      <div className="flex-grow ">
        <h1 className="bg-orange-500 text-white p-4 rounded-lg w-max text-5xl">
          ThePulse
        </h1>
        <h1 className="mt-8 text-5xl  text-coral-red font-semibold font-Montserrat">
          Your Daily Dose of Headlines
        </h1>
        <h1 className="text-5xl mt-4 font-semibold font-Montserrat">
          Begins Here
        </h1>
      </div>
      <div className="flex-grow  px-10 py-[90px] shadow-custom  bg-white rounded-lg">
        <h1 className="text-4xl text-center w-full mb-8 font-Poppins ">
          Sign Up
        </h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-lg font-Poppins">Your username</span>
            <input
              type="text"
              placeholder="Username"
              className="border py-1 text-xl bg-slate-100 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-Poppins">Your email</span>
            <input
              type="email"
              placeholder="Email"
              className="border py-1 text-xl bg-slate-100 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-Poppins">Your password</span>
            <input
              type="password"
              placeholder="Password"
              className="border py-1 text-xl bg-slate-100 rounded-md"
            />
          </div>
          <button className="bg-coral-blue text-coral-white py-1 text-xl rounded-md">
            Sign Up
          </button>
          <button className="flex justify-center items-center  bg-coral-blue text-white py-1 text-xl rounded-md">
            <Oath />
          </button>
          <span className="text-lg">Already Have an Account? Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
