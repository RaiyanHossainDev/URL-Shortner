import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'

const Layout = () => {
  return (
    <div className='bg-[#0f172a] h-screen'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout