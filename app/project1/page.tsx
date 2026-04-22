'use client';

import { motion } from "framer-motion";
import ImageModal from "../../components/ImageModal";

export default function Project1Page() {
  const tags = ["Visual Design", "Poster", "Typografie", "Antwerpen"];

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
          Project 01 <br /> CineCity Filmfestival
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-32">
        <div className="md:col-span-7">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[14vw] md:text-[8vw] font-light leading-[0.85] tracking-tighter mb-8 md:mb-12"
          >
            Cine<span className="italic font-serif text-indigo-600">City</span> <br />
            Antwerpen.
          </motion.h1>

          <div className="max-w-xl">
            <p className="text-xl md:text-2xl font-light leading-snug text-zinc-500 mb-6 md:mb-8 italic font-serif">
              "Een nachtelijk filmfestival dat de stad als canvas gebruikt."
            </p>
            <p className="text-base md:text-lg font-light text-zinc-400 leading-relaxed mb-8">
              Een volledige visuele identiteit waarbij de focus ligt op sfeer en typografische hiërarchie. 
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

        <div className="md:col-span-5 pt-8 md:pt-48 border-t md:border-t-0 md:border-l border-zinc-100 md:pl-12">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-300 mb-4">The Identity</p>
          <p className="text-lg md:text-xl font-light text-zinc-600 mb-6 md:mb-12 italic font-serif">
            Noir-esthetiek en stedelijke ritmiek.
          </p>
        </div>
      </main>

      {/* VISUALS SECTIE */}
      <section className="space-y-24 md:space-y-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-8 space-y-6 md:space-y-8">
            <div className="border-b border-zinc-100 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">01 / Opening Title (Motion)</h2>
            </div>
            <div className="bg-black aspect-video rounded-sm overflow-hidden shadow-xl relative">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/fotos/visual/OpeningTitle.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="md:col-span-4 space-y-6 md:space-y-8">
            <div className="border-b border-zinc-100 pb-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">Website Interface</h2>
            </div>
            <div className="bg-[#0a0a0a] p-4 rounded-sm shadow-xl">
              <ImageModal src="/fotos/visual/preview.png" alt="CineCity website preview" />
            </div>
          </div>
        </div>

        <div className="space-y-20 md:space-y-32">
          {/* GRID 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Brand Key Visual</p>
              <div className="shadow-md rounded-sm overflow-hidden">
                <ImageModal src="/fotos/visual/mockupKEY.jpg" alt="Brand Key Visual" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Festival Brochure</p>
              <div className="shadow-md rounded-sm overflow-hidden">
                <ImageModal src="/fotos/visual/mockupBROCH.jpg" alt="Festival Brochure" />
              </div>
            </div>
          </div>

          {/* GRID 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Campaign Posters</p>
              <div className="shadow-md rounded-sm overflow-hidden">
                <ImageModal src="/fotos/visual/mockupREEKS.jpg" alt="Campaign Posters" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-300">Outdoor Advertising (Bus)</p>
              <div className="shadow-md rounded-sm overflow-hidden">
                <ImageModal src="/fotos/visual/busmockup.jpg" alt="Outdoor Advertising" />
              </div>
            </div>
          </div>

          {/* FULL WIDTH MOCKUP - Gefixed met brute force CSS breedte */}
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-zinc-300">Digital Ecosystem Mockup</p>
            <div className="w-full shadow-2xl rounded-sm overflow-hidden bg-white [&_img]:w-full [&_img]:h-auto">
              <ImageModal src="/fotos/visual/mockupWEB.jpg" alt="Digital Ecosystem" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-200">First Project</div>
        <a href="/project2" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-indigo-600 transition-colors">
          Next: YesYouCan
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-indigo-600 transition-all"></span>
        </a>
      </footer>
    </div>
  );
}