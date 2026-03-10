'use client';

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      
      {/* BOVENKANT: SUBTIELE HEADER INFO */}
      <div className="flex justify-between items-start w-full border-b border-zinc-200 pb-8 mt-12">
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">
          Portfolio — 2026
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-right">
          User Research — Antwerp <br /> Creative & Data Driven
        </div>
      </div>

      {/* MIDDEN: DE ENORME TITEL (De 'Impact' van de sites die je stuurde) */}
      <main className="flex-grow flex flex-col justify-center my-24">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] md:text-[11vw] font-light leading-[0.8] tracking-tighter"
        >
          Creative <br />
          <span className="italic font-serif text-indigo-600">Research</span> <br />
          & Digital Data.
        </motion.h1>
      </main>

      {/* ONDERKANT: BESCHRIJVING & ACTIE KNOPPEN */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end border-t border-zinc-200 pt-16 mb-8">
        <div className="md:col-span-5">
          <p className="text-xl md:text-2xl text-zinc-500 leading-snug font-light max-w-sm">
            Ik transformeer ruwe gebruikersdata in betekenisvolle digitale ervaringen. 
            Gedreven door <span className="text-zinc-900 font-normal underline decoration-1 underline-offset-4">nieuwsgierigheid</span> en menselijk gedrag.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <a href="/admin" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold">
            <span className="w-8 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all duration-700"></span>
            Management Dashboard
          </a>
          <a href="/profile" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-indigo-600">
            <span className="w-8 h-[1px] bg-indigo-200 group-hover:w-16 group-hover:bg-indigo-600 transition-all duration-700"></span>
            User Profile Settings
          </a>
        </div>

        <div className="md:col-span-3 text-right hidden md:block text-zinc-300 text-[10px] uppercase tracking-widest font-medium italic">
          Scroll to explore <br /> my trajectory
        </div>
      </div>
    </div>
  );
}