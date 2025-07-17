import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiRefreshCw } from 'react-icons/fi';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const currentUser = useSelector(data => data.currentUser.value)
  const [data,setData] = useState([])

  useEffect(()=>{
      axios.post("http://localhost:8000/url/dashboard",{
        userId: currentUser?.user._id
      }).then(res => {
        const data = res.data
        let arr = []
  
        data.map(item => {
          const domain = new URL(item.realURL).origin;
          const favicon =  domain + "/favicon.ico";
          const { hostname } = new URL(item.realURL);
          let parts = hostname.replace(/^www\./, "").split(".")
          const name = parts.length > 1 ? parts[parts.length - 2] : parts[0]
          const webName = name.charAt(0).toUpperCase() + name.slice(1)        
          arr.push({
            name:webName,
            favicon,
            code:item.code,
            longUrl:item.realURL,
            visit:item.visit,
          })
        })
        setData(arr)
      })
      .catch(err=>console.log(err))
  },[])

  let handleReset = ()=>{
    axios.post("http://localhost:8000/url/dashboard",{
        userId: currentUser?.user._id
      }).then(res => {
        const data = res.data
        let arr = []
  
        data.map(item => {
          const domain = new URL(item.realURL).origin;
          const favicon =  domain + "/favicon.ico";
          const { hostname } = new URL(item.realURL);
          let parts = hostname.replace(/^www\./, "").split(".")
          const name = parts.length > 1 ? parts[parts.length - 2] : parts[0]
          const webName = name.charAt(0).toUpperCase() + name.slice(1)        
          arr.push({
            name:webName,
            favicon,
            code:item.code,
            longUrl:item.realURL,
            visit:item.visit,
          })
        })
        setData(arr)
      })
      .catch(err=>console.log(err))
  }


  return (
    <div className="p-6 rounded-xl shadow-md overflow-x-auto pt-[200px]">
    <div className="flex items-center justify-between mb-5 px-6 py-4 bg-[#0f172a] rounded-xl shadow-md">
      <div className="flex w-full justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <HiOutlineViewGrid className="w-8 h-8 text-purple-500" />
          <h1 className="text-white text-4xl font-bold">Dashboard</h1>
        </div>
        <button
          onClick={()=>handleReset()}
          className="flex cursor-pointer items-center gap-2 px-3 py-1 bg-[#1f1f2e] text-purple-400 border border-purple-500 hover:bg-purple-600 hover:text-white rounded-xl transition duration-200 shadow-lg hover:shadow-purple-700/50"
        >
          <FiRefreshCw className="text-lg" />
          <span className="font-medium">Reset</span>
        </button>
      </div>

    </div>
      <table className="min-w-full text-sm text-left text-white">
        <thead className="bg-[#1e293b] text-gray-300 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Long URL</th>
            <th className="px-4 py-3">Icon</th>
            <th className="px-4 py-3">Short URL</th>
            <th className="px-4 py-3">Visit</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {data.map((item,index) => (
            <tr key={index} className="hover:bg-[#1e293b] transition">
              <td className="px-4 py-3">{index+1}</td>
              <td className="px-4 py-3 font-medium">{item.name}</td>
              <td className="px-4 py-3 text-purple-400 hover:underline cursor-pointer"><a href={item.longUrl} target="_blank" rel="noopener noreferrer">{item.longUrl}</a></td>
              <td className="px-4 py-3"><img width={'18px'} src={item.favicon} alt="" /></td>
              <td className="px-4 py-3 text-purple-400 hover:underline cursor-pointer"><a href={`localhost:8000/url/${item.code}`} target="_blank" rel="noopener noreferrer">{`localhost:8000/url/${item.code}`}</a></td>
              <td className="px-4 py-3">{item.visit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard