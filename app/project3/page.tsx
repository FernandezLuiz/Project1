'use client';

import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";

// NAAM IS NU PROJECT 3 PAGE (zodat het matcht met de map)
export default function Project3Page() {
  const tags = ["Blender", "3D", "Lighting", "Worldbuilding"];

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
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-right">
          Project 03 <br /> Blender Atlantis
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
        {/* TITEL & BESCHRIJVING */}
        <div className="md:col-span-7">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[8vw] font-light leading-[0.85] tracking-tighter mb-12"
          >
            Blender <br />
            <span className="italic font-serif text-indigo-600">Atlantis</span>
          </motion.h1>

          <div className="max-w-xl">
            <p className="text-2xl font-light leading-snug text-zinc-500 mb-8 italic font-serif">
              "AquaGroove — Een verkenning van vorm, licht smokes en atmosfeer in een fictieve onderwaterwereld."
            </p>
            <p className="text-lg font-light text-zinc-400 leading-relaxed">
              Voor dit project ontwierp ik een onderwaterclub in de stad Atlantis. De focus lag op het creëren van een unieke sfeer 
              door middel van complexe belichting en organische vormen, passend bij een diepzee-omgeving.
            </p>
          </div>
        </div>

        {/* EXTRA INFO RECHTS: Nu met de opvallende Next Project knop onder de tekst */}
        <div className="md:col-span-5 pt-12 md:pt-16 border-t md:border-t-0 md:border-l border-zinc-100 pl-12 flex flex-col justify-start items-start">
          
          {/* INTRO TEKST */}
          <div className="w-full text-left mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-4">Focus</p>
            <p className="text-xl font-light text-zinc-600">
              Atmosferische rendering, volumetrische belichting en world-building.
            </p>
          </div>

          {/* DE KNOP: Opvallend indigo met witte tekst, verandert naar wit bij hover */}
          <div className="mt-4">
            <a 
              href="/project4" 
              className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white bg-indigo-600 border border-indigo-700 px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 hover:border-indigo-100 transition-all duration-500 shadow-sm"
            >
              Go to next project
              <span className="w-6 h-[1px] bg-white group-hover:w-10 group-hover:bg-indigo-300 transition-all"></span>
            </a>
          </div>
        </div>
      </main>

      {/* GALLERY SECTIE */}
      <section className="space-y-24">
        <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">Selected Renders</h2>
          <p className="text-[10px] italic text-zinc-300">Click to expand</p>
        </div>

        {/* ASYMMETRISCHE GRID VOOR RENDERS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-8 group overflow-hidden bg-zinc-50 rounded-sm">
             <ImageModal src="/fotos/blender/3D_img1_luiz.png" alt="Atlantis render 1" />
          </div>
          <div className="md:col-span-4 mt-0 md:mt-24 group overflow-hidden bg-zinc-50 rounded-sm">
             <ImageModal src="/fotos/blender/3D_img2_luiz.png" alt="Atlantis render 2" />
          </div>
          <div className="md:col-span-4 group overflow-hidden bg-zinc-50 rounded-sm">
             <ImageModal src="/fotos/blender/3D_img3_luiz.png" alt="Atlantis render 3" />
          </div>
          <div className="md:col-span-8 group overflow-hidden bg-zinc-50 rounded-sm">
             <ImageModal src="/fotos/blender/3D_img4_luiz.png" alt="Atlantis render 4" />
          </div>
        </div>
      </section>

      {/* PROPERE CLEAN FOOTER */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-300">
          Portfolio 2026 — Luiz Fernandez
        </div>
      </footer>
    </div>
  );
}