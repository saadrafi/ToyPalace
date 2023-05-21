import React from "react";
import logo from "../../assets/errorLogo.jpg";
import { Link } from "react-router-dom";
import setTitle from "../../titleHook/TitleHook";

const ErrorPage = () => {
  setTitle("Error")
  return (
    <div className="w-[90%] mx-auto h-screen flex justify-center items-center gap-6">
      <div>
        <img src={logo} alt="banner" className="h-1/2" />
      </div>
      <div className=" font-serif space-y-6">
        <h1 className="text-6xl font-extrabold w-2/3">OOPS!! PAGE NOT FOUND</h1>
        <p className="text-lg w-[90%]">
          You must have picked the wrong door because i haven't been able to lay my eye on the page
          you've been searching for.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
