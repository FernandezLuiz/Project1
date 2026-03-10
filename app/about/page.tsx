'use client';

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      
      {/* HEADER SECTIE */}
      <header className="flex justify-between items-start w-full border-b border-zinc-200 pb-8 mt-12 mb-24">
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">
          About — The Vision
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-right">
          Human Centric <br /> Design Philosophy
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        {/* GROTE TITEL (LEFT) */}
        <div className="md:col-span-7">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[8vw] font-light leading-[0.9] tracking-tighter mb-12"
          >
            Thinking <br />
            <span className="italic font-serif text-indigo-600">Beyond</span> <br />
            The Interface.
          </motion.h1>

          <div className="max-w-lg space-y-8">
            <p className="text-2xl font-light leading-relaxed text-zinc-500">
              Mijn werk bevindt zich op het snijvlak van <span className="text-zinc-900 font-medium">empathie</span> en <span className="text-zinc-900 font-medium">data</span>. 
              Ik geloof dat de beste oplossingen niet alleen schaalbaar zijn, maar ook menselijk.
            </p>
            <p className="text-lg font-light text-zinc-400 leading-relaxed">
              Door gebruik te maken van innovatieve technologieën transformeer ik complexe 
              problemen in eenvoudige, intuïtieve ervaringen die de gebruiker centraal stellen.
            </p>
          </div>
        </div>

        {/* LIJST MET WAARDEN (RIGHT) */}
        <div className="md:col-span-5 pt-12 md:pt-32">
          <div className="space-y-12 border-l border-zinc-100 pl-12">
            {[
              { title: "Innovative Tech", desc: "Altijd op zoek naar de nieuwste tools om grenzen te verleggen." },
              { title: "Professional Team", desc: "Gedreven door passie en een oog voor detail in elk project." },
              { title: "User Satisfaction", desc: "Het succes van een product wordt gemeten door de glimlach van de gebruiker." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className="group"
              >
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 group-hover:text-indigo-600 transition-colors mb-2">
                  0{index + 1} — {item.title}
                </h3>
                <p className="text-xl font-light text-zinc-600 italic font-serif leading-snug">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER-ACHTIGE CTA */}
      <footer className="mt-40 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <p className="text-zinc-400 text-sm font-light">Laten we samen iets bouwen.</p>
        <a href="/contact" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold">
          Get in touch
          <span className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
            →
          </span>
        </a>
      </footer>
    </div>
  );
}