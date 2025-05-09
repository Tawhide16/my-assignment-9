import React from 'react';
import { NavLink } from 'react-router';
import imageNav from "../assets/images.jpg"

const Navbar = () => {

  const Link = <>
   <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-blue-500 font-semibold underline mr-4" : "mr-4 mb:pb-2"
  }
>
  Home
</NavLink>

<NavLink
  to="/profile"
  className={({ isActive }) =>
    isActive ? "text-blue-500 font-semibold underline" : ""
  }
>
  Profile
</NavLink>
  </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm lg:px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {Link}
      </ul>
    </div>
    <img className='w-12 h-12 rounded-full lg:mx-4 hidden lg:flex' src={imageNav} alt="" />
    <a className=" btn-ghost text-xl hidden lg:flex">Event-Explorer</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {Link}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <NavLink className="btn bg-black text-white" to="/login">Log In</NavLink>
    <NavLink className="btn bg-black text-white" to="/logout">Log Out</NavLink>
  </div>
</div>
        </div>
    );
};

export default Navbar;