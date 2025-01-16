import React from "react";
import { GiFrontTeeth } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-white px-3 py-2 rounded"
              : "text-white px-3 py-2 rounded hover:bg-blue-800"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/treatments"
          className={({ isActive }) =>
            isActive
              ? " text-white px-3 py-2 rounded"
              : "text-white px-3 py-2 rounded hover:bg-blue-800"
          }
        >
          All Treatments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            isActive
              ? " text-white px-3 py-2 rounded"
              : "text-white px-3 py-2 rounded hover:bg-blue-800"
          }
        >
          My Appointments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? " px-3 py-2 rounded"
              : "text-white px-3 py-2 rounded hover:bg-blue-800"
          }
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-blue-950 text-white">
      <div className="w-11/12 mx-auto navbar bg-blue-950 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl text-white">
            <GiFrontTeeth />
            TEETH WIZARD
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Login</a>
        </div>
      </div>
    </div>
  );
}
