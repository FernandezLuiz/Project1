'use client';

import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";

export default function Project1Page() {
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
          Project 01 <br /> Case Study
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
              "AquaGroove — Een verkenning van vorm, licht en atmosfeer in een fictieve onderwaterwereld."
            </p>
            <p className="text-lg font-light text-zinc-400 leading-relaxed">
              Voor dit project ontwierp ik een onderwaterclub in de stad Atlantis. De focus lag op het creëren van een unieke sfeer 
              door middel van complexe belichting en organische vormen, passend bij een diepzee-omgeving.
            </p>
          </div>
        </div>

        {/* EXTRA INFO RECHTS */}
        <div className="md:col-span-5 pt-12 md:pt-48 border-l border-zinc-100 pl-12">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-4">Focus</p>
          <p className="text-xl font-light text-zinc-600 mb-12">
            Atmosferische rendering, volumetrische belichting en world-building.
          </p>
          <div className="w-12 h-[1px] bg-indigo-600"></div>
        </div>
      </main>

      {/* GALLERY SECTIE */}
      <section className="space-y-24">
        <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-black">Selected Renders</h2>
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

      {/* NAVIGATION ONDERAAN */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex justify-between items-center mb-12">
        <a href="/home" className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-black transition-colors">
          ← Back Home
        </a>
        <a href="/project2" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold">
          Next Project
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
        </a>
      </footer>
    </div>
  );
}