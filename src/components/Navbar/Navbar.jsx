import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'
import { FiLink } from 'react-icons/fi'
import { HiOutlineUserCircle, HiOutlineViewGrid } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav id='nav'>
      <div className="navHolder">
        <div className="hoveringLine bg-[#2C2C35] dark:bg-[white]" />
        <div className="navbar">
          <Link to={'/'} className="flex justify-between items-center text-2xl font-bold">
            <span className="flex items-center gap-2 dark:text-white text-[#2C2C35]"><FiLink /> SimpleShort</span>
          </Link>
          <div className="authBar">
            <Link to={"/auth"} className="dark:text-white text-[#2C2C35] text-lg px-4 py-2 rounded dark:hover:bg-[#1e293b] transition duration-200 ">Register</Link>
            <Link to={"/auth/login"} className='dark:text-white text-[#2C2C35] text-lg px-4 py-2 rounded dark:hover:bg-[#1e293b] transition duration-200'>Login</Link>
          </div>
          <div className="dashBoard flex gap-2.5">
            <Link to={'/dashboard'} className="cursor-pointer inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none">
              <HiOutlineViewGrid className="w-5 h-5" />
              Dashboard
            </Link>
            <div className="profile inline-flex items-center gap-2 px-2 py-2 bg-gray-800 text-white font-semibold rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300 hover:scale-105 focus:outline-none">
              <Link to={'#'}>
                <HiOutlineUserCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar