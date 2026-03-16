'use client';

import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";

export default function Project3Page() {
  const tags = ["Visual Design", "Poster", "Typografie", "Antwerpen"];

  return (
    <div className="min-h-screen p-8 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      
      {/* HEADER / TAGS - NU ALS PROJECT 01 */}
      <header className="flex justify-between items-start w-full border-b border-zinc-200 pb-8 mt-12 mb-20">
        <div className="flex flex-wrap gap-4">
          {tags.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
              {t}
            </span>
          ))}
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-right font-serif italic">
          Project 01 <br /> CineCity Filmfestival
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
              Een volledige visuele identiteit waarbij de focus ligt op sfeer en typografische hiërarchie. 
              Ontwikkeld voor zowel fysieke uitingen als een interactieve digitale ervaring.
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
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-4">The Identity</p>
          <p className="text-xl font-light text-zinc-600 mb-12 italic font-serif">
            Noir-esthetiek en stedelijke ritmiek.
          </p>
        </div>
      </main>

      {/* VISUALS SECTIE */}
      <section className="space-y-40">
        
        {/* 01. OPENING TITLE & WEB PREVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-8 space-y-8">
            <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">01 / Opening Title (Motion)</h2>
            </div>
            <div className="bg-black aspect-video rounded-sm overflow-hidden shadow-2xl relative">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/fotos/visual/OpeningTitle.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="md:col-span-4 space-y-8">
            <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">Website Interface</h2>
            </div>
            <div className="bg-[#0a0a0a] p-4 rounded-sm shadow-xl">
              <ImageModal src="/fotos/visual/preview.png" alt="CineCity website preview" />
            </div>
          </div>
        </div>

        {/* 02. DE PDF MOCKUPS GRID */}
        <div className="space-y-32">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Brand Key Visual</p>
              <div className="aspect-[4/3] bg-white border border-zinc-100 shadow-md relative overflow-hidden">
                <iframe src="/fotos/visual/mockupKEY.pdf#toolbar=0&navpanes=0&scrollbar=0" className="absolute inset-0 w-full h-full border-none" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Festival Brochure</p>
              <div className="aspect-[4/3] bg-white border border-zinc-100 shadow-md relative overflow-hidden">
                <iframe src="/fotos/visual/mockupBROCH.pdf#toolbar=0&navpanes=0&scrollbar=0" className="absolute inset-0 w-full h-full border-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Campaign Posters</p>
              <div className="aspect-[4/3] bg-white border border-zinc-100 shadow-md relative overflow-hidden">
                <iframe src="/fotos/visual/mockupREEKS.pdf#toolbar=0&navpanes=0&scrollbar=0" className="absolute inset-0 w-full h-full border-none" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Outdoor Advertising (Bus)</p>
              <div className="aspect-[4/3] bg-white border border-zinc-100 shadow-md relative overflow-hidden">
                <iframe src="/fotos/visual/busmockup.pdf#toolbar=0&navpanes=0&scrollbar=0" className="absolute inset-0 w-full h-full border-none" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Digital Ecosystem Mockup</p>
              <div className="aspect-[21/9] bg-white border border-zinc-100 shadow-md relative overflow-hidden">
                <iframe src="/fotos/visual/mockupWEB.pdf#toolbar=0&navpanes=0&scrollbar=0" className="absolute inset-0 w-full h-full border-none" />
              </div>
          </div>
        </div>

      </section>

      {/* FOOTER NAV - LOGISCHE VOLGORDE */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex justify-between items-center mb-12">
        <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-200">
          First Project
        </div>
        <a href="/project1" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-indigo-600 transition-colors">
          Next: Blender Atlantis
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-indigo-600 transition-all"></span>
        </a>
      </footer>
    </div>
  );
}