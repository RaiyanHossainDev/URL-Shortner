import React from 'react'
import { HiOutlineViewGrid } from 'react-icons/hi';

const Dashboard = () => {
    const data = [
        { id: 1, name: 'Google',longUrl:'https://www.google.com/',icon:'null', shortUrl: 'localhost:8000/ggl', visit: 1234 },
        { id: 2, name: 'YouTube',longUrl:'https://www.youtube.com/',icon:'null', shortUrl: 'localhost:8000/yt', visit: 982 },
        { id: 3, name: 'ChatGPT',longUrl:'https://chatgpt.com/',icon:'null', shortUrl: 'localhost:8000/oai', visit: 456 },
    ];
  return (
    <div className="p-6 rounded-xl shadow-md overflow-x-auto pt-[200px]">
    <div className="flex items-center justify-between mb-5 px-6 py-4 bg-[#0f172a] rounded-xl shadow-md">
      <div className="flex items-center gap-3">
        <HiOutlineViewGrid className="w-8 h-8 text-purple-500" />
        <h1 className="text-white text-4xl font-bold">Dashboard</h1>
      </div>

      {/* Optional: user avatar or profile button could go here */}
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
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-[#1e293b] transition">
              <td className="px-4 py-3">{item.id}</td>
              <td className="px-4 py-3 font-medium">{item.name}</td>
              <td className="px-4 py-3 text-purple-400 hover:underline cursor-pointer"><a href={item.longUrl} target="_blank" rel="noopener noreferrer">{item.longUrl}</a></td>
              <td className="px-4 py-3">{item.icon}</td>
              <td className="px-4 py-3 text-purple-400 hover:underline cursor-pointer"><a href={item.shortUrl} target="_blank" rel="noopener noreferrer">{item.shortUrl}</a></td>
              <td className="px-4 py-3">{item.visit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard