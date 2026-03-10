'use client';

import { motion } from "framer-motion";

export default function Project4Page() {
  const tags = ["Video Production", "Motion Graphics", "Nike", "Sneakers"];

  return (
    <div className="min-h-screen p-8 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      
      {/* HEADER / TAGS */}
      <header className="flex justify-between items-start w-full border-b border-zinc-200 pb-8 mt-12 mb-20">
        <div className="flex flex-wrap gap-4">
          {tags.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
              {t}
            </span>
          ))}
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-right font-serif italic">
          Project 04 <br /> Motion Promo
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
        {/* TITEL & BESCHRIJVING */}
        <div className="md:col-span-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[8vw] font-light leading-[0.85] tracking-tighter mb-12"
          >
            Nike Air Max 1 <br />
            <span className="italic font-serif text-blue-600 font-medium">Royal Anniversary</span>
          </motion.h1>

          <div className="max-w-xl">
            <p className="text-2xl font-light leading-snug text-zinc-500 mb-8 italic font-serif">
              "Een dynamische ode aan een icoon uit 1987 — de 2017 Anniversary Restock."
            </p>
            <p className="text-lg font-light text-zinc-400 leading-relaxed">
              Voor deze sneaker promo focuste ik op de rijke geschiedenis en de iconische kleuren van de Air Max 1. 
              De video combineert snelle cuts met vloeiende bewegingen om de energie van de Anniversary Royal release vast te leggen.
            </p>
          </div>
        </div>

        {/* DETAILS RECHTS */}
        <div className="md:col-span-4 pt-12 md:pt-48 border-l border-zinc-100 pl-12">
          <div className="space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-4">Duration</p>
              <p className="text-xl font-light text-zinc-600">01:16 min</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-4">Focus</p>
              <p className="text-xl font-light text-zinc-600">Visual Storytelling & Rhythm</p>
            </div>
          </div>
        </div>
      </main>

      {/* VIDEO SECTIE */}
      <section className="space-y-12 mb-40">
        <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">Full Promo Video</h2>
          <p className="text-[10px] italic text-zinc-300">Sound on recommended</p>
        </div>

        {/* DE VIDEO PLAYER */}
        <div className="w-full bg-black rounded-sm overflow-hidden shadow-2xl aspect-video relative group">
          <video 
            className="w-full h-full object-cover"
            controls
            poster="/fotos/nike/poster.jpg" // Optioneel: zet een screenshot als thumbnail
          >
            <source src="/videos/nike/nike_air_max_promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* FOOTER NAV */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex justify-between items-center mb-12">
        <a href="/project3" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400">
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
          Previous Project
        </a>
        <a href="/contact" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold">
          Get in touch
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
        </a>
      </footer>
    </div>
  );
}