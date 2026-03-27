'use client';

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-[1600px] mx-auto text-[#131313] bg-white">
      
      {/* SECTION 1: HERO IMPACT */}
      <section className="min-h-screen flex flex-col justify-between p-8 md:p-20 relative">
        
        {/* HEADER INFO */}
        <div className="flex justify-between items-start w-full border-b border-zinc-200 pb-8 mt-12">
          <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">
            Portfolio — 2026
          </div>
          <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-right">
            User Research — Antwerp <br /> Creative & Data Driven
          </div>
        </div>

        {/* MAIN TITLE */}
        <main className="flex-grow flex flex-col justify-center my-20">
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

        {/* BOTTOM SECTION WITH BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end border-t border-zinc-200 pt-16 pb-12">
          <div className="md:col-span-4">
            <p className="text-xl md:text-2xl text-zinc-500 leading-snug font-light max-w-sm">
              Ik transformeer ruwe data in betekenisvolle ervaringen. 
              Gedreven door <span className="text-zinc-900 font-normal underline decoration-1 underline-offset-4">nieuwsgierigheid</span>.
            </p>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <a href="/admin" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-black">
              <span className="w-8 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all duration-700"></span>
              Management Dashboard
            </a>
            <a href="/profile" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-indigo-600">
              <span className="w-8 h-[1px] bg-zinc-200 group-hover:w-16 group-hover:bg-indigo-600 transition-all duration-700"></span>
              User Profile Settings
            </a>
          </div>

          {/* DE OPVALLENDE SURVEY KNOP */}
          <div className="md:col-span-4">
            <motion.a 
              href="#ux-survey"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col gap-4 p-6 bg-indigo-600 rounded-2xl text-white shadow-xl shadow-indigo-100 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">Live Research</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              </div>
              <p className="text-lg font-medium leading-tight">Neem deel aan mijn <br /> UX Navigatie Survey →</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* SECTION 2: DE SURVEY BOX */}
      <section id="ux-survey" className="p-8 md:p-20 bg-zinc-50 border-t border-zinc-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <span className="text-indigo-600 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block italic font-serif">Survey Integration</span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter">
                Navigation <span className="italic font-serif text-indigo-600">Insights.</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-sm font-light max-w-xs border-l border-zinc-200 pl-6">
                Jouw input over de navigatie van dit portfolio helpt mij bij het optimaliseren van de user flow. Anoniem en binnen 1 minuut.
            </p>
          </div>

          {/* GOOGLE FORM CONTAINER MET JOUW LINK */}
          <div className="w-full bg-white rounded-[40px] shadow-2xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden min-h-[900px] mb-20 relative">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSc5pZRe0rOTRJBWHpRwftG-ZYL0DYcBgBmT4tfWsqIxFSR5jw/viewform?embedded=true" 
              width="100%" 
              height="1000" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
            >
              Laden…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}