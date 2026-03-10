'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const projects = [
  { name: "Blender Atlantis", href: "/project1", num: "01" },
  { name: "YesYouCan IPA", href: "/project2", num: "02" },
  { name: "CineCity Visuals", href: "/project3", num: "03" }
];

const mainLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

const systemLinks = [
  { name: "Admin Dashboard", href: "/admin" },
  { name: "User Profile", href: "/profile" }
];

export default function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TRIGGER KNOP */}
      <nav className="fixed top-8 right-8 z-[100]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-4 focus:outline-none bg-white/50 backdrop-blur-md p-2 px-4 rounded-full border border-zinc-100 shadow-sm"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 group-hover:text-black transition-colors">
            {isOpen ? 'Close' : 'Explore'}
          </span>
          <div className="flex flex-col gap-1 items-end w-6">
            <motion.span animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-full h-[1.5px] bg-black block" />
            <motion.span animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-full h-[1.5px] bg-black block" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-[#fafafa] flex flex-col justify-center p-8 md:p-20 overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[100vh] bg-indigo-50 rounded-full blur-[150px] opacity-60 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 w-full max-w-[1600px] mx-auto gap-20">
              
              {/* KOLOM 1: MAIN NAV (Zonder italic hover) */}
              <div className="md:col-span-4 space-y-12">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-300 mb-8">Navigation</p>
                  <ul className="space-y-4">
                    {mainLinks.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          onClick={() => setIsOpen(false)} 
                          className="text-5xl md:text-6xl font-light tracking-tighter hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SYSTEM LINKS */}
                <div className="pt-12 border-t border-zinc-200 inline-block w-full">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-300 mb-6">Internal Systems</p>
                  <div className="flex flex-col gap-4">
                    {systemLinks.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-indigo-600 flex items-center gap-3 group"
                      >
                        <span className="w-2 h-2 rounded-full border border-zinc-200 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* KOLOM 2: PROJECTS */}
              <div className="md:col-span-8 border-l border-zinc-100 md:pl-20">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-300 mb-8">Selected Works</p>
                <div className="flex flex-col gap-6 md:gap-2">
                  {projects.map((project) => (
                    <Link 
                      key={project.name} 
                      href={project.href} 
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-6"
                    >
                      <span className="text-xl font-serif italic text-zinc-200 group-hover:text-indigo-600 transition-colors">
                        {project.num}
                      </span>
                      <h3 className="text-[8vw] md:text-[6vw] font-light leading-none tracking-tighter group-hover:pl-4 transition-all duration-500">
                        {project.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* ONDERSTE BALK */}
            <div className="absolute bottom-12 left-8 md:left-20 right-8 md:right-20 flex justify-between items-end border-t border-zinc-100 pt-8">
               <div className="max-w-xs">
                 <p className="text-[10px] leading-relaxed text-zinc-400 font-medium italic">
                   Antwerp based portfolio / User Research & Visual Design.
                 </p>
               </div>
               <div className="text-right">
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500 flex items-center justify-end gap-2">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Available 2026
                 </p>
               </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}