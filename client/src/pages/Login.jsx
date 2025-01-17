import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Oath from "../components/Oath.jsx";

const Login = () => {
  const [formData, SetFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoading(false);
    SetFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.email) {
      return setErrorMessage("*All fields are required");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="max-container flex flex-wrap items-center  mt-8 h-screen ">
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
      <form
        className="flex-grow  px-10 py-[90px] shadow-custom  bg-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl text-center w-full mb-8 font-Poppins ">
          Sign Up
        </h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-lg font-Poppins">Your username</span>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="border py-1 text-xl bg-slate-100 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-Poppins">Your email</span>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border py-1 text-xl bg-slate-100 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-Poppins">Your password</span>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border py-1 text-xl bg-slate-100 rounded-md"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-coral-blue text-coral-white py-1 text-xl rounded-md"
            disabled={loading}
          >
            {loading ? <span>Loading...</span> : "Sign Up"}
          </button>
          <div className="flex justify-center items-center  bg-coral-blue text-white py-1 text-xl rounded-md">
            <Oath />
          </div>
          <span className="text-lg">
            Already Have an Account?
            <Link to="/signin" className="text-xl font-semibold text-blue-500">
              {" "}
              Sign in
            </Link>
          </span>
          {errorMessage && (
            <span className="text-coral-red font-semibold text-center mt-5 text-md bg-red-100 py-2 rounded-md">
              {errorMessage}
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
