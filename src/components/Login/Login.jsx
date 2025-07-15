import axios from 'axios'
import React, { useState } from 'react'
import { FaEnvelope, FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { Bounce, toast } from 'react-toastify'

const Login = () => {
    const navigator = useNavigate()
    const [form,setForm] = useState({email:'',password:''})
    const [showPassword, setShowPassword] = useState(false);

    let handleLogin = (e)=>{
        e.preventDefault()
        if(form.email==''||form.password == ''){
            toast.error('Fill the form!' , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }else{
            axios.post("http://localhost:8000/auth/login",{
                email:form.email,
                password:form.password,
            }).then(res=>{
                toast.success("Login Success!" , {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                navigator('/')
                console.log(res.data);
                
            }).catch(err=>{
                toast.error(err.response.data , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            })
        }
    }

    
    return (
        <main className="min-h-screen flex items-center justify-center transition-all duration-200 dark:bg-[#313442] bg-[#f1f5f9] p-4">
            <section className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
                <img className='mx-auto' src="/images/loginLogo.png" alt="" />
                <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">Welcome Back!</h2>
                <p className="text-sm text-center text-gray-500 mb-6">Let’s build something greate</p>

                <form className="space-y-4">

                <div className="relative">
                    <input
                    onChange={(e)=>setForm(prev=>({...prev,email:e.target.value}))}
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-2 border-[#c5c5c5] border-[1px] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <div className="relative">
                    <input
                    onChange={(e)=>setForm(prev=>({...prev,password:e.target.value}))}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full pl-4 pr-10 py-2 border-[#c5c5c5] border-[1px] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {showPassword ? (
                    <FaEyeSlash
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={() => setShowPassword(false)}
                    />
                    ) : (
                    <FaEye
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={() => setShowPassword(true)}
                    />
                    )}
                </div>

                <button
                    onClick={(e)=>handleLogin(e)}
                    type="submit"
                    className="w-full py-3 bg-indigo-500 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition"
                >
                    Login
                </button>

                <div className="flex justify-end items-center space-x-2 text-sm mt-2">
                    <Link to={'#'} className='text-[#8083A3]'>Forgot password?</Link>
                </div>

                <div className="flex gap-4 mt-4">
                    <button className="w-1/2 py-2 border rounded-lg flex items-center justify-center gap-2 text-sm">
                    <FaGoogle className="text-red-500" /> Google account
                    </button>
                    <button className="w-1/2 py-2 border rounded-lg flex items-center justify-center gap-2 text-sm">
                    <FaFacebookF className="text-blue-600" /> Facebook account
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <Link to="/auth/" className="text-indigo-600 hover:underline">
                    Register
                    </Link>
                </p>
                </form>
            </section>
        </main>
    )
}

export default Login