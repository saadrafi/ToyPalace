import React from "react";
import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 my-4">
      <div className="w-full lg:w-[90%] mx-auto">
        <div className="flex justify-between items-center w-full">
            {/* navStart */}
          <div>
            {/* Nav Dropdown */}
            <div className="dropdown md:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/alltoys"
                    className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
                  >
                    All Toy
                  </NavLink>
                  <NavLink
                    to="/mytoys"
                    className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
                  >
                    My Toy
                  </NavLink>
                  <NavLink
                    to="/addtoy"
                    className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
                  >
                    Add a toy
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
                  >
                    Blogs
                  </NavLink>
                </div>
              </ul>
            </div>

            {/* LOGO lg */}

            <Link className=" hidden md:contents">
              <img src={logo} alt="" className=" h-16 w-40  rounded-lg" />
            </Link>
          </div>
            {/* navCenter */}
          <div>
            {/* Mobile LOGO */}
            <Link className=" contents md:hidden">
              <img src={logo} alt="" className=" h-16  rounded-lg" />
            </Link>

            {/* Routes */}
            <div className="hidden md:contents">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
              >
                Home
              </NavLink>
              <NavLink
                to="/alltoys"
                className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
              >
                All Toy
              </NavLink>
              <NavLink
                to="/mytoys"
                className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
              >
                My Toy
              </NavLink>
              <NavLink
                to="/addtoy"
                className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
              >
                Add a toy
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
              >
                Blogs
              </NavLink>
            </div>
          </div>
            {/* navEnd */}
          <div className="flex items-center gap-2">
            <div className=" h-11 w-11">
              <FaUser className="h-full w-full" />
            </div>
            <Link to="/login" className="btn btn-primary">
              LogIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
