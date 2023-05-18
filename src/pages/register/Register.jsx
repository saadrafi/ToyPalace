import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdAlternateEmail, MdPerson, MdImage } from "react-icons/md";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">Welcome!!</h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Sign Up to explore the best
        </p>

        <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">Sign Up to create account</p>

          <div>
            <div className="relative">
              <input
                name="name"
                type="text"
                className="w-full rounded-lg input-primary p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter name"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <MdPerson></MdPerson>
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                name="email"
                type="email"
                className="w-full rounded-lg input-primary p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <MdAlternateEmail></MdAlternateEmail>
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                name="imgurl"
                type="url"
                className="w-full rounded-lg input-primary p-4 pe-12 text-sm shadow-sm"
                placeholder="Image URL"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <MdImage></MdImage>
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg input-primary p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)}></FaEyeSlash>
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)}></FaEye>
                )}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white hover:scale-105 duration-300"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link to="/login" className="underline btn-link">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
