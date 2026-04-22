'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const projects = [
  { name: "CineCity Filmfestival", href: "/project1", num: "01" },
  { name: "YesYouCan IPA", href: "/project2", num: "02" },         
  { name: "Blender Atlantis", href: "/project3", num: "03" },      
  { name: "Nike Air Max", href: "/project4", num: "04" }
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
      {/* TRIGGER KNOP - Hogere Z-index dan de rest van de site */}
      <nav className="fixed top-6 right-6 md:top-8 md:right-8 z-[1000]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-4 focus:outline-none bg-white/80 backdrop-blur-md p-2 px-4 rounded-full border border-zinc-100 shadow-sm transition-all active:scale-95"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 group-hover:text-black transition-colors">
            {isOpen ? 'Close' : 'Explore'}
          </span>
          <div className="flex flex-col gap-1 items-end w-6">
            <motion.span animate={isOpen ? { rotate: 45, y: 5, backgroundColor: "#4f46e5" } : { rotate: 0, y: 0, backgroundColor: "#000" }} className="w-full h-[1.5px] block" />
            <motion.span animate={isOpen ? { rotate: -45, y: -5, backgroundColor: "#4f46e5" } : { rotate: 0, y: 0, backgroundColor: "#000" }} className="w-full h-[1.5px] block" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-[#fafafa] flex flex-col p-6 md:p-20 pt-24 md:pt-40 overflow-y-auto overflow-x-hidden"
          >
            {/* Achtergrond 'Orb' */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-indigo-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 w-full max-w-[1600px] mx-auto gap-10 md:gap-20">
              
              {/* KOLOM 1: MAIN NAV */}
              <div className="md:col-span-4 space-y-10">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-300 mb-6">Navigation</p>
                  <ul className="space-y-4">
                    {mainLinks.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          onClick={() => setIsOpen(false)} 
                          className="text-4xl md:text-6xl font-light tracking-tighter hover:text-indigo-600 transition-all duration-300 block origin-left hover:scale-105"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SYSTEM LINKS - Compact op mobile */}
                <div className="pt-8 border-t border-zinc-200">
                  <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-300 mb-4">Internal Systems</p>
                  <div className="flex flex-row md:flex-col flex-wrap gap-4 md:gap-4">
                    {systemLinks.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-indigo-600 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full border border-zinc-200 group-hover:bg-indigo-600 transition-all" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* KOLOM 2: PROJECTS */}
              <div className="md:col-span-8 md:border-l border-zinc-100 md:pl-20 pb-20 md:pb-0">
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-300 mb-6">Selected Works</p>
                <div className="flex flex-col gap-6 md:gap-4">
                  {projects.map((project) => (
                    <Link 
                      key={project.name} 
                      href={project.href} 
                      onClick={() => setIsOpen(false)}
                      className="group flex items-start gap-4 md:gap-6"
                    >
                      <span className="text-xs md:text-xl font-serif italic text-zinc-300 group-hover:text-indigo-600 transition-colors pt-2 md:pt-4">
                        {project.num}
                      </span>
                      <h3 className="text-[11vw] md:text-[6vw] font-light leading-[0.9] tracking-tighter group-hover:text-indigo-600 transition-all duration-500 break-words max-w-full">
                        {project.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ONDERSTE BALK - Responsieve layout */}
            <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end border-t border-zinc-100 pt-8 pb-10 md:pb-0 gap-8">
               <div className="hidden lg:block max-w-xs">
                 <p className="text-[10px] leading-relaxed text-zinc-400 font-medium italic">
                   Antwerp based portfolio / User Research & Visual Design.
                 </p>
               </div>

               <div className="flex flex-row gap-10 items-center w-full md:w-auto justify-between md:justify-end">
                 <div>
                   <p className="text-[8px] uppercase tracking-widest text-zinc-300 mb-2">Social</p>
                   <a href="https://instagram.com/luiz.frndz" target="_blank" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600">Instagram</a>
                 </div>

                 <div className="md:border-l border-zinc-100 md:pl-8">
                   <p className="text-[8px] uppercase tracking-widest text-zinc-300 mb-2">Inquiries</p>
                   <a href="mailto:easyluiz.f@gmail.com" className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600">Email Me</a>
                 </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}