'use client';

import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";

export default function Project3Page() {
  const tags = ["Visual Design", "Poster", "Typografie", "Antwerpen"];

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
          Project 03 <br /> CineCity Festival
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
        {/* TITEL & BESCHRIJVING */}
        <div className="md:col-span-7">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10vw] md:text-[8vw] font-light leading-[0.85] tracking-tighter mb-12"
          >
            Cine<span className="italic font-serif text-indigo-600">City</span> <br />
            Antwerpen.
          </motion.h1>

          <div className="max-w-xl">
            <p className="text-2xl font-light leading-snug text-zinc-500 mb-8 italic font-serif">
              "Een nachtelijk filmfestival dat de architectuur van de stad gebruikt als canvas."
            </p>
            <p className="text-lg font-light text-zinc-400 leading-relaxed mb-8">
              Focus op sfeer, hoog contrast en gedurfde typografie. Dit project omvat een volledige visuele identiteit, 
              van fysieke posters tot een interactieve web-experience.
            </p>
            
            <a
              href="https://luizfernandez-code.github.io/CineCity/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold border border-zinc-200 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-500"
            >
              Launch Live Website ↗
            </a>
          </div>
        </div>

        {/* EXTRA INFO RECHTS */}
        <div className="md:col-span-5 pt-12 md:pt-48 border-l border-zinc-100 pl-12">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-4">The Vibe</p>
          <p className="text-xl font-light text-zinc-600 mb-12">
            Noir-esthetiek, stedelijke sfeer en typografische hiërarchie.
          </p>
        </div>
      </main>

      {/* VISUALS SECTIE */}
      <section className="space-y-40">
        
        {/* WEBSITE PREVIEW */}
        <div className="space-y-8">
          <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">01 / Digital Interface</h2>
          </div>
          <div className="bg-[#0a0a0a] p-4 md:p-12 rounded-sm shadow-2xl">
            <ImageModal src="/fotos/visual/preview.png" alt="CineCity website preview" />
          </div>
        </div>

        {/* POSTER & PDF GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* POSTER (Groot en staand) */}
          <div className="md:col-span-6 space-y-8">
            <div className="border-b border-zinc-100 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">02 / Official Poster</h2>
            </div>
            <div className="shadow-lg border border-zinc-100">
              <ImageModal src="/fotos/visual/poster.png" alt="CineCity poster" />
            </div>
          </div>

          {/* EXTRA VISUALS PDF */}
          <div className="md:col-span-6 space-y-8">
            <div className="border-b border-zinc-100 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">03 / Visual Assets (PDF)</h2>
            </div>
            <div className="aspect-[1/1.4] w-full bg-white rounded-sm overflow-hidden border border-zinc-100 shadow-sm relative group">
              <iframe 
                src="/fotos/visual/visuals.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
                className="absolute inset-0 w-full h-full border-none"
                style={{ pointerEvents: 'none' }} 
                title="Extra Visuals"
              />
              <div className="absolute inset-0 z-10 bg-transparent"></div> 
            </div>
            <div className="flex justify-end">
                <a href="/fotos/visual/visuals.pdf" target="_blank" className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-4">Open PDF Details</a>
            </div>
          </div>
        </div>

      </section>

      {/* NAVIGATION ONDERAAN */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex justify-between items-center mb-12">
        <a href="/project2" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-black">
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
          Previous Case
        </a>
        <a href="/contact" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold">
          Start a project
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
        </a>
      </footer>
    </div>
  );
}