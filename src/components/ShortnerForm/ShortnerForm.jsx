import React, { useEffect, useState } from 'react'
import { FiCopy } from "react-icons/fi";
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const ShortnerForm = () => {
  const [realUrl, setRealUrl] = useState('')
  const [data, setData] = useState([])
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark")

  const handleSendUrl = () => {
    if (realUrl === '') {
      toast.error('Please a give a url', {
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
    } else {
      axios.post('http://localhost:8000/url/urlShortner', {
        url: realUrl,
      })
        .then(response => {
          setData(prev => [...prev, response.data])
          setRealUrl('')
          toast.success('Shorten', {
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
        .catch(err => {
          console.log(err);
          toast.error(err.response.data, {
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

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.info('Copied to clipboard', {
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
    } catch (err) {
      console.error('Failed to copy:', err);
      toast.info('Failed to copy', {
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
    }
  };

  let ChangeTheme = () => {
    if (!localStorage.getItem('theme')) { localStorage.setItem("theme", "dark") }
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "light"
    );

    if (localStorage.getItem("theme") === "light") return localStorage.setItem("theme", "dark")
    if (localStorage.getItem("theme") === "dark") return localStorage.setItem("theme", "light")
  }

  useEffect(() => {
    setChecked(localStorage.getItem("theme") === "dark");
  }, []);

  const handleChange = () => {
    ChangeTheme();
    setChecked(localStorage.getItem("theme") === "dark");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 p-6">
      <label className="relative top-[1px] inline-flex items-center cursor-pointer w-14 h-8">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={handleChange}
        />
        <div className="w-full h-8 bg-gray-400 rounded-full peer-checked:bg-gray-500 dark:bg-gray-700 dark:peer-checked:bg-gray-600 transition-colors duration-300" />
        <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-6 dark:bg-gray-300 transition-transform duration-300" />
      </label>
      <div className="w-[576px] mx-auto flex flex-col gap-6">
        <div className="flex gap-2">
          <input
            value={realUrl}
            onChange={(e) => setRealUrl(e.target.value)}
            type="text"
            placeholder="Paste your URL here..."
            className="flex-1 p-3 rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          />
          <button
            onClick={() => handleSendUrl()}
            className="bg-violet-600 text-white px-4 rounded-xl hover:bg-violet-700 transition cursor-pointer"
          >
            Shorten
          </button>
        </div>
        {
          data.map((item) => (
            <div key={item.shortenUrl} className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <div>
                  <span className="text-[13px] text-slate-500 dark:text-slate-400">{item.url}</span><br />
                  <a href={item.shortenUrl} target={'_blank'} rel="noreferrer" className="font-semibold text-violet-600 dark:text-violet-400 hover:underline">{item.shortenUrl}</a>
                </div>
                <button onClick={() => copyToClipboard(item.shortenUrl)} title='Copy' className="hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer"><FiCopy /></button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ShortnerForm