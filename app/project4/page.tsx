'use client';

import { motion } from "framer-motion";

export default function Project4Page() {
  const tags = ["Video Production", "Motion Graphics", "Nike", "Sneakers"];

  return (
    <div className="min-h-screen p-6 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      
      {/* HEADER / TAGS */}
      <header className="flex flex-col md:flex-row justify-between items-start w-full border-b border-zinc-200 pb-8 mt-12 mb-12 md:mb-20 gap-4">
        <div className="flex flex-wrap gap-3">
          {tags.map((t) => (
            <span key={t} className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
              {t}
            </span>
          ))}
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 md:text-right font-serif italic">
          Project 04 <br /> Motion Promo
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-24">
        <div className="md:col-span-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[8vw] font-light leading-[0.85] tracking-tighter mb-8 md:mb-12"
          >
            Nike Air Max 1 <br />
            <span className="italic font-serif text-blue-600 font-medium">Royal Anniversary</span>
          </motion.h1>

          <div className="max-w-xl">
            <p className="text-xl md:text-2xl font-light leading-snug text-zinc-500 mb-6 md:mb-8 italic font-serif">
              "Een dynamische ode aan een icoon uit 1987 — de 2017 Anniversary Restock."
            </p>
            <p className="text-base md:text-lg font-light text-zinc-400 leading-relaxed">
              Voor deze sneaker promo focuste ik op de rijke geschiedenis en de iconische kleuren van de Air Max 1. 
              De video combineert snelle cuts met vloeiende bewegingen om de energie van de release vast te leggen.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 pt-8 md:pt-48 border-l border-zinc-100 pl-8 md:pl-12">
          <div className="space-y-8 md:space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-2 md:mb-4">Duration</p>
              <p className="text-lg md:text-xl font-light text-zinc-600">01:16 min</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-2 md:mb-4">Focus</p>
              <p className="text-lg md:text-xl font-light text-zinc-600">Visual Storytelling & Rhythm</p>
            </div>
          </div>
        </div>
      </main>

      {/* VIDEO SECTIE */}
      <section className="space-y-8 md:space-y-12 mb-40">
        <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">Full Promo Video</h2>
          <p className="text-[10px] italic text-zinc-300 animate-pulse">Sound on recommended</p>
        </div>

        <div className="w-full bg-black rounded-sm overflow-hidden shadow-2xl aspect-video relative group border border-zinc-100">
          <video 
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            {/* Pad aangepast: kijkt nu direct in public/videos/ */}
            <source src="/videos/nike_air_max_promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* FOOTER NAV */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex justify-between items-center mb-12">
        <a href="/project3" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-black transition-all">
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
          Previous Project
        </a>
        <a href="/contact" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-blue-600 transition-all">
          Get in touch
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-blue-600 transition-all"></span>
        </a>
      </footer>
    </div>
  );
}