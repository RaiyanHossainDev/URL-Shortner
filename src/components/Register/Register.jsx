import axios from "axios";
import React, { useState } from "react";
import {FaUser,FaEnvelope,FaPhoneAlt,FaEye,FaEyeSlash,FaGoogle,FaFacebookF} from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";


const Register = () => {
    const navigator = useNavigate()
    const [form,setForm] = useState({fName:'',lName:'',email:'',password:'',confirmPassword:''})
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    
    let handleRegister =  (e)=>{
        e.preventDefault()
        if(form.fName==''||form.lName==''||form.email==''||form.password == ''||form.confirmPassword == ''){
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
        }else if(form.password != form.confirmPassword){
            toast.error("password didn't match" , {
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
            axios.post("http://localhost:8000/auth/register",{
                userName:form.fName+" "+form.lName,
                email:form.email,
                password:form.password,
            }).then(res=>{
                toast.success(res.data , {
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
                navigator('/auth/login')
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
        <main className="min-h-screen flex items-center justify-center bg-[#f1f5f9] p-4">
        <section className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">Create an account</h2>
            <p className="text-sm text-center text-gray-500 mb-6">You are welcome!</p>

            <form className="space-y-4">
            <div className="flex gap-4">
                <div className="relative w-1/2">
                <input
                    onChange={(e)=>setForm(prev=>({...prev,fName:e.target.value}))}
                    type="text"
                    placeholder="First name"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative w-1/2">
                <input
                    onChange={(e)=>setForm(prev=>({...prev,lName:e.target.value}))}
                    type="text"
                    placeholder="Last name"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            <div className="relative">
                <input
                onChange={(e)=>setForm(prev=>({...prev,email:e.target.value}))}
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
                <input
                onChange={(e)=>setForm(prev=>({...prev,password:e.target.value}))}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

            <div className="relative">
                <input
                onChange={(e)=>setForm(prev=>({...prev,confirmPassword:e.target.value}))}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {showConfirmPassword ? (
                <FaEyeSlash
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowConfirmPassword(false)}
                />
                ) : (
                <FaEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowConfirmPassword(true)}
                />
                )}
            </div>

            <button
                onClick={(e)=>handleRegister(e)}
                type="submit"
                className="w-full py-3 bg-indigo-500 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition"
            >
                Sign up
            </button>

            <div className="flex items-center space-x-2 text-sm mt-2">
                <input type="checkbox" id="terms" className="accent-indigo-500" />
                <label htmlFor="terms" className="text-gray-600">
                I agree with <span className="text-indigo-500">terms & conditions</span>
                </label>
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
                <Link to="/auth/login" className="text-indigo-600 hover:underline">
                Sign in
                </Link>
            </p>
            </form>
        </section>
        </main>
    );
}

export default Register