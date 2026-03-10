"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Hamburger menu icon button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded text-black dark:text-white"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* SidebarSlider component */}
      <SidebarSlider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <nav className="flex flex-col space-y-4 pt-10">
          {/* Standaard links */}
          <a href="/home" className="px-4 py-2 hover:underline text-zinc-600">Home</a>
          <a href="/about" className="px-4 py-2 hover:underline text-zinc-600">About</a>
          <a href="/contact" className="px-4 py-2 hover:underline text-zinc-600">Contact</a>
          
          <hr className="border-zinc-200 my-4" />

          {/* Speciale sectie voor Admin & User Profile */}
          <div className="flex flex-col space-y-2 pt-4">
            <p className="px-4 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Management
            </p>
            
            <a 
              href="/admin" 
              className="mx-4 px-4 py-3 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-700 transition shadow-md text-center"
            >
              Admin Dashboard
            </a>
            
            <a 
              href="/profile" 
              className="mx-4 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-500 transition shadow-md text-center"
            >
              User Profile
            </a>
          </div>

          <hr className="border-zinc-200 my-4" />

          {/* Overige links */}
          <a href="/project1" className="px-4 py-2 hover:underline text-zinc-500 text-sm">Project 1</a>
          <a href="/project2" className="px-4 py-2 hover:underline text-zinc-500 text-sm">Project 2</a>
          <a href="/project3" className="px-4 py-2 hover:underline text-zinc-500 text-sm">Project 3</a>

        </nav>
      </SidebarSlider>
    </>
  )
}