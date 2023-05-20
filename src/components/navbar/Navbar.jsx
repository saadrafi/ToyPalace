import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
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
                  {user && (
                    <>
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
                    </>
                  )}
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

            <Link className=" hidden md:flex items-center">
              <img src={logo} alt="" className=" h-16  rounded-lg" />
              <span className="text-2xl font-bold">Lego</span>
              <span className="text-2xl font-extrabold text-primary">Palace</span>
            </Link>
          </div>
          {/* navCenter */}
          <div>
            {/* Mobile LOGO */}
            <Link className=" flex items-center md:hidden">
              <img src={logo} alt="" className=" h-16  rounded-lg" />
              <span className="text-2xl font-bold">Lego</span>
              <span className="text-2xl font-extrabold text-primary">Palace</span>
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
              {user && (
                <>
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
                </>
              )}
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
              >
                Blog
              </NavLink>
            </div>
          </div>
          {/* navEnd */}
          <div className="flex items-center gap-2">
            {user && (
              <div className=" md:h-11 md:w-11 h-6 tooltip" data-tip={user?.displayName}>
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt=""
                    className="rounded-full h-full w-full object-cover"
                  />
                ) : (
                  <FaUser className="h-full w-full" />
                )}
              </div>
            )}
            {user ? (
              <Link onClick={logout} className="btn btn-primary">
                Log out
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary">
                LogIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
