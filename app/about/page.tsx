'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutPage() {
  // Standaard data als er nog niets in de Admin is opgeslagen
  const [content, setContent] = useState({
    title: "Thinking Beyond The Interface.",
    subtitle: "Mijn werk bevindt zich op het snijvlak van empathie en data.",
    description: "Door gebruik te maken van innovatieve technologieën transformeer ik complexe problemen."
  });

  useEffect(() => {
    // We halen de grote "siteData" op die de Admin heeft gemaakt
    const saved = localStorage.getItem('siteData');
    if (saved) {
      const allData = JSON.parse(saved);
      // We pakken enkel het 'about' gedeelte eruit
      if (allData.about) {
        setContent(allData.about);
      }
    }
  }, []);

  return (
    <div className="min-h-screen p-8 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      <header className="flex justify-between items-start w-full border-b border-zinc-200 pb-8 mt-12 mb-24">
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">About — The Vision</div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-right">Human Centric <br /> Design Philosophy</div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* LINKER KOLOM */}
        <div className="md:col-span-7">
          <motion.h1 
            key={content.title} // Zorgt voor nieuwe animatie als je de titel aanpast
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[10vw] md:text-[8vw] font-light leading-[0.9] tracking-tighter mb-12"
          >
            {/* HIER GEBEURT DE MAGIE VOOR HET BLAUWE WOORD */}
            {content.title.split(' ').map((word, index) => (
              <span key={index}>
                {index === 0 ? (
                  <span className="italic font-serif text-indigo-600">{word} </span>
                ) : (
                  <span>{word} </span>
                )}
                {index === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <div className="max-w-lg space-y-8">
            <p className="text-2xl font-light leading-relaxed text-zinc-500 italic">
              {content.subtitle}
            </p>
            <p className="text-lg font-light text-zinc-400 leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>

        {/* RECHTER KOLOM (Deze laten we nu even statisch voor de waarden) */}
        <div className="md:col-span-5 pt-12 md:pt-32">
          <div className="space-y-12 border-l border-zinc-100 pl-12">
            <div className="group">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 group-hover:text-indigo-600 transition-colors mb-2">
                  01 — Innovative Tech
                </h3>
                <p className="text-xl font-light text-zinc-600 italic font-serif leading-snug">
                  Altijd op zoek naar de nieuwste tools om grenzen te verleggen.
                </p>
            </div>
            <div className="group">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 group-hover:text-indigo-600 transition-colors mb-2">
                  02 — Professional Team
                </h3>
                <p className="text-xl font-light text-zinc-600 italic font-serif leading-snug">
                  Gedreven door passie en een oog voor detail in elk project.
                </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}