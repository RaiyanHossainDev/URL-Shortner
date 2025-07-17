import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const DashBoardPage = () => {
  const currentUser = useSelector(parameter => parameter.currentUser.value)

  return (
    <div>
      {
        currentUser?
          <Dashboard/> 
        :
          <div className='flex justify-center items-center h-screen'>
            <h1 className='text-2xl dark:text-white text-gray-500'>Please <Link to="/auth/login" className='font-bold px-[10px] rounded-2xl py-[5px] bg-gradient-to-r from-purple-600 to-indigo-600' >Login</Link> to access more feature.</h1>
          </div>
      }
    </div>
  )
}

export default DashBoardPage