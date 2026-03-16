'use client';

import { motion } from "framer-motion"
import ImageModal from "../../components/ImageModal";

export default function Project2Page() {
  const tags = ["Branding", "Copywriting", "Concept"];

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
          Project 02 <br /> Brand Identity
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
        <div className="md:col-span-7">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10vw] md:text-[8vw] font-light leading-[0.85] tracking-tighter mb-12"
          >
            YesYou<span className="italic font-serif text-indigo-600">Can</span>
          </motion.h1>

          <div className="max-w-xl">
            <p className="text-2xl font-light leading-snug text-zinc-500 mb-8 italic font-serif">
              "Een IPA 0.0% concept dat de focus legt op lifestyle en smaak zonder compromissen."
            </p>
          </div>
        </div>
      </main>

      {/* VISUALS SECTIE */}
      <section className="space-y-32">
        
        {/* 01. KEY VISUAL (A2) - Kleiner gemaakt in een grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 space-y-6">
                <span className="text-[10px] font-bold text-indigo-600 tracking-[0.3em] uppercase font-sans">01 / Visual Identity</span>
                <h2 className="text-4xl font-light tracking-tighter leading-tight">Brand Key Visual</h2>
                <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xs">
                    De visuele vertaling van het merkconcept. Krachtig, modern en fris.
                </p>
            </div>
            {/* Hier is de A2 visual kleiner (col-span-7 ipv volledige breedte) */}
            <div className="md:col-span-7">
                <div className="aspect-[1/1.4] w-full max-w-md mx-auto bg-white shadow-2xl border border-zinc-100 relative overflow-hidden">
                    <iframe 
                        src="/fotos/brand/a2key-copy.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
                        className="absolute inset-0 w-full h-full border-none"
                    />
                </div>
            </div>
        </div>

        {/* 02. NIEUWE MOCKUPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-zinc-300 font-sans">Product Mockup</p>
                <div className="aspect-square bg-zinc-50 flex items-center justify-center overflow-hidden border border-zinc-100">
                    <ImageModal src="/fotos/brand/mocjkup.jpg" alt="YesYouCan Mockup" />
                </div>
            </div>
            <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-zinc-300 font-sans">Social Media Style</p>
                <div className="aspect-square bg-zinc-50 flex items-center justify-center overflow-hidden border border-zinc-100">
                    <ImageModal src="/fotos/brand/instamockup.png" alt="Instagram Mockup" />
                </div>
            </div>
        </div>

        {/* 03. BRAND MOCKUP PDF (Full width) */}
        <div className="space-y-8">
            <div className="border-b border-zinc-100 pb-4">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">02 / Branding Assets</h2>
            </div>
            <div className="aspect-video w-full bg-white shadow-lg border border-zinc-100 relative overflow-hidden">
                <iframe 
                    src="/fotos/brand/mockup.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
                    className="absolute inset-0 w-full h-full border-none"
                />
            </div>
        </div>

        {/* 04. CASE STUDY PDF (Helemaal onderaan) */}
        <div className="space-y-8 pt-20">
            <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">03 / Full Case Study</h2>
                <a href="/fotos/brand/yesyoucan-copy.pdf" target="_blank" className="text-[10px] font-bold underline">Download PDF</a>
            </div>
            <div className="aspect-[4/3] w-full bg-white shadow-sm border border-zinc-100 relative overflow-hidden">
                <iframe 
                    src="/fotos/brand/yesyoucan-copy.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
                    className="absolute inset-0 w-full h-full border-none"
                />
            </div>
        </div>

      </section>

      {/* NAVIGATION ONDERAAN */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex justify-between items-center mb-12">
        <a href="/project3" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-black">
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
          Previous: CineCity
        </a>
        <a href="/project1" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-indigo-600">
          Next: Blender Atlantis
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-indigo-600 transition-all"></span>
        </a>
      </footer>
    </div>
  )
}