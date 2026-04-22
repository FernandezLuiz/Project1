'use client';

import { motion } from "framer-motion"
import ImageModal from "../../components/ImageModal";

export default function Project2Page() {
  const tags = ["Branding", "Copywriting", "Concept"];

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
          Project 02 <br /> YesYouCan IPA
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-32">
        <div className="md:col-span-7">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[14vw] md:text-[8vw] font-light leading-[0.85] tracking-tighter mb-8 md:mb-12"
          >
            YesYou<span className="italic font-serif text-indigo-600">Can</span>
          </motion.h1>

          <div className="max-w-xl">
            <p className="text-xl md:text-2xl font-light leading-snug text-zinc-500 mb-6 md:mb-8 italic font-serif">
              "Een IPA 0.0% concept dat de focus legt op lifestyle en smaak zonder compromissen."
            </p>
          </div>
        </div>
      </main>

      {/* VISUALS SECTIE */}
      <section className="space-y-24 md:space-y-40">
        
        {/* 01. KEY VISUAL (A2) - Kader sluit nu aan op afbeelding */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5 space-y-6">
                <span className="text-[10px] font-bold text-indigo-600 tracking-[0.3em] uppercase font-sans">01 / Visual Identity</span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight">Brand Key Visual</h2>
                <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xs">
                    De visuele vertaling van het merkconcept. Krachtig, modern en fris.
                </p>
            </div>
            <div className="md:col-span-7">
                {/* h-fit en w-fit zorgen dat het kader exact om de visual sluit */}
                <div className="w-fit md:max-w-md mx-auto shadow-2xl rounded-sm overflow-hidden border border-zinc-100 max-h-[65vh] md:max-h-none flex items-center justify-center bg-white [&_img]:max-h-[65vh] md:[&_img]:max-h-none [&_img]:w-auto [&_img]:h-auto">
                    <ImageModal 
                        src="/fotos/brand/a2key-copy.jpg" 
                        alt="YesYouCan Key Visual" 
                    />
                </div>
            </div>
        </div>

        {/* 02. MOCKUPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-zinc-300 font-sans">Product Mockup</p>
                <div className="shadow-md rounded-sm overflow-hidden bg-zinc-50 border border-zinc-100">
                    <ImageModal src="/fotos/brand/mocjkup.jpg" alt="YesYouCan Mockup" />
                </div>
            </div>
            <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-zinc-300 font-sans">Social Media Style</p>
                <div className="shadow-md rounded-sm overflow-hidden bg-zinc-50 border border-zinc-100">
                    <ImageModal src="/fotos/brand/instamockup.png" alt="Instagram Mockup" />
                </div>
            </div>
        </div>

        {/* 03. BRAND MOCKUP */}
        <div className="space-y-8">
            <div className="border-b border-zinc-100 pb-4">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">02 / Branding Assets</h2>
            </div>
            <div className="w-full shadow-2xl rounded-sm overflow-hidden bg-white [&_img]:w-full [&_img]:h-auto border border-zinc-100">
                <ImageModal src="/fotos/brand/mockup.jpg" alt="Branding Assets" />
            </div>
        </div>

       {/* 04. CASE STUDY / WRAP PDF - Volledig zichtbaar en 'frozen' */}
        <div className="space-y-8 pt-12 md:pt-20 pb-10">
            <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">03 / Case Study & Wrap</h2>
                <a href="/fotos/brand/yesyoucan-copy.pdf" target="_blank" rel="noreferrer" className="text-[10px] font-bold underline hover:text-indigo-600 transition-colors">
                  Download PDF ↗
                </a>
            </div>
            
            {/* h-[260px] is hoog genoeg om de hele wrap op mobile te tonen zonder interne scrollruimte */}
            <div className="w-full shadow-2xl rounded-sm overflow-hidden bg-white border border-zinc-100 h-[320px] md:h-auto md:aspect-[1.4/1] relative pointer-events-none">
                <iframe 
                    src="/fotos/brand/yesyoucan-copy.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
                    className="absolute inset-0 w-full h-full border-none bg-white"
                    title="YesYouCan Wrap"
                />
            </div>
            <p className="text-[9px] text-zinc-400 italic md:hidden">Tik op 'Download PDF' voor het originele bestand.</p>
        </div>

      </section>
      {/* NAVIGATION ONDERAAN */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
        <a href="/project1" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-black transition-all">
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
          Previous: CineCity
        </a>
        <a href="/project3" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-indigo-600 transition-all">
          Next: Blender Atlantis
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-indigo-600 transition-all"></span>
        </a>
      </footer>
    </div>
  )
}