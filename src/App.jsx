import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router'
import { Bounce, ToastContainer } from 'react-toastify' 
import Layout from './layout/Layout'
import HomePage from './pages/homePage'
import DashBoardPage from './pages/DashBoardPage'
import LayoutAuth from './layout/LayoutAuth'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

function App() {
  const router = createBrowserRouter(createRoutesFromChildren(
    <Route>
      <Route path='/' element={<Layout/>} >
        <Route index element={<HomePage/>} />
        <Route path='/dashboard' element={<DashBoardPage/>} />
      </Route>
      <Route path='/auth' element={<LayoutAuth/>} >
        <Route index element={<Register/>} />
        <Route path='/auth/login' element={<Login/>} />
      </Route>
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  )
}

export default App
