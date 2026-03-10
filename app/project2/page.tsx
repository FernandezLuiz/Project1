'use client';

import { motion } from "framer-motion"

export default function Project2Page() {
  const tags = ["Branding", "Copywriting", "Concept"];

  const pdfs = [
    { src: "/fotos/brand/a2key-copy.pdf", title: "KeyVisual Design", label: "01 / Branding" },
    { src: "/fotos/brand/yesyoucan-copy.pdf", title: "YesYouCan Packaging", label: "02 / Case Study" }
  ];

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

      {/* PDF COMPACT VIEW SECTIE */}
{/* PDF SECTIE MET VERSCHILLENDE FORMATEN */}
<section className="space-y-40">
  {pdfs.map((pdf, index) => (
    <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
      
      {/* INFO LINKS (Sticky) */}
      <div className="md:col-span-4 sticky top-32">
        <span className="text-[10px] font-bold text-indigo-600 tracking-[0.3em] uppercase">{pdf.label}</span>
        <h2 className="text-4xl font-light tracking-tighter mt-4 mb-8 leading-tight">{pdf.title}</h2>
        <p className="text-zinc-400 text-sm font-light mb-10 leading-relaxed max-w-xs">
          Dit onderdeel van het project focust op de visuele vertaling van het merkconcept naar een tastbaar medium.
        </p>
        <a 
          href={pdf.src} 
          target="_blank"
          className="inline-block text-[10px] uppercase tracking-widest font-bold border border-zinc-200 px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-500"
        >
          View Full Size
        </a>
      </div>

      {/* PDF PREVIEW RECHTS */}
      <div className="md:col-span-8">
        <div 
          className={`w-full bg-white rounded-sm overflow-hidden border border-zinc-100 shadow-sm relative 
            ${index === 0 ? 'aspect-[1/1.4] h-auto' : 'aspect-[4/3] h-auto'}`}
        >
          {/* We gebruiken index === 0 om de KeyVisual (poster-formaat) hoog te maken */}
          <iframe 
            src={`${pdf.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
            className="absolute inset-0 w-full h-full border-none"
            style={{ pointerEvents: 'none' }} 
            title={pdf.title}
          />
          {/* Transparante overlay om scrollen IN de pdf te blokkeren, zodat je de PAGINA scrolt */}
          <div className="absolute inset-0 z-10 bg-transparent"></div> 
        </div>
      </div>

    </div>
  ))}
</section>

      {/* NAVIGATION ONDERAAN */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex justify-between items-center mb-12">
        <a href="/project1" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-black">
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
          Previous Case
        </a>
        <a href="/project3" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold">
          Next Project
          <span className="w-10 h-[1px] bg-zinc-300 group-hover:w-16 group-hover:bg-black transition-all"></span>
        </a>
      </footer>
    </div>
  )
}