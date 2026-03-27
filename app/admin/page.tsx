'use client';

import React, { useState, useEffect } from 'react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // 1. DE CORRECTE VOLGORDE DATA (CineCity, YesYouCan, Blender, Nike)
  const defaultData = {
    about: {
      title: "Thinking Beyond The Interface.",
      subtitle: "Mijn werk bevindt zich op het snijvlak van empathie en data.",
      description: "Door gebruik te maken van innovatieve technologieën transformeer ik complexe problemen."
    },
    projects: {
      project1: { title: "CineCity Filmfestival", sub: "Filmfestival op een stedelijk canvas.", desc: "Een nachtelijk filmfestival dat de architectuur van de stad gebruikt als canvas. Focus op sfeer en typografie." },
      project2: { title: "YesYouCan IPA", sub: "Lifestyle focus voor 0.0% bier.", desc: "Een IPA 0.0% concept dat de focus legt op lifestyle en smaak zonder compromissen." },
      project3: { title: "Blender Atlantis", sub: "AquaGroove — Onderwaterwereld verkenning.", desc: "Een verkenning van vorm, licht en atmosfeer in een fictieve onderwaterwereld in de stad Atlantis." },
      project4: { title: "Nike Air Max", sub: "Ode aan een icoon uit 1987.", desc: "Een dynamische ode aan een icoon uit 1987 — de 2017 Anniversary Restock." }
    }
  };

  const [content, setContent] = useState(defaultData);

  useEffect(() => {
    const saved = localStorage.getItem('siteData');
    if (saved) setContent(JSON.parse(saved));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'antwerpen2026') setIsAuthenticated(true);
    else alert('Fout wachtwoord!');
  };

  const saveAll = () => {
    localStorage.setItem('siteData', JSON.stringify(content));
    setIsEditing(false);
    alert("De hele site is nu bijgewerkt!");
  };

  const resetEverything = () => {
    if (confirm("Ben je zeker? Dit zet de About pagina en ALLE projecten terug naar de originele staat.")) {
      localStorage.removeItem('siteData');
      setContent(defaultData);
      window.location.reload();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 font-sans">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-[40px] shadow-sm border border-zinc-100 max-w-sm w-full text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400 mb-6">Secure Access</p>
          <input type="password" placeholder="Wachtwoord" className="w-full border-b py-3 outline-none mb-8 text-center" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full bg-black text-white py-4 rounded-full text-[10px] uppercase font-bold tracking-widest">Unlock Site</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 md:p-20 max-w-[1400px] mx-auto text-[#131313] font-sans">
      <header className="flex justify-between items-end border-b pb-10 mb-16">
        <div>
          <h1 className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 mb-2">Portfolio Management</h1>
          <button onClick={resetEverything} className="text-[10px] text-red-500 font-bold uppercase mt-2 hover:underline">Terug naar fabrieksinstellingen</button>
        </div>
        <button onClick={isEditing ? saveAll : () => setIsEditing(true)} className="px-8 py-3 rounded-full bg-black text-white text-[10px] uppercase font-bold tracking-widest transition-all hover:bg-zinc-800">
          {isEditing ? "Opslaan & Publiceren" : "Pagina's Bewerken"}
        </button>
      </header>

      <main className="space-y-24">
        {/* ABOUT SECTIE */}
        <section className="space-y-8 bg-zinc-50 p-10 rounded-[40px]">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-zinc-200 pb-4">00 — About Pagina</h2>
          <div>
            <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-2">Hero Title</label>
            {isEditing ? <input className="w-full text-3xl font-light border-b bg-transparent outline-none py-2" value={content.about.title} onChange={(e) => setContent({...content, about: {...content.about, title: e.target.value}})} /> : <p className="text-3xl font-light">{content.about.title}</p>}
          </div>
        </section>

        {/* PROJECTEN SECTIE */}
        <section className="space-y-12">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-zinc-200 pb-4">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(content.projects).map((key, index) => (
              <div key={key} className="bg-white p-8 rounded-[30px] border border-zinc-100 shadow-sm relative overflow-hidden">
                <span className="absolute top-6 right-8 text-[40px] font-black text-zinc-50 opacity-10">0{index + 1}</span>
                <p className="text-[10px] font-bold text-indigo-600 mb-6 tracking-widest uppercase">Project 0{index + 1}</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] text-zinc-300 uppercase font-bold block mb-1">Naam</label>
                    {isEditing ? (
                      <input className="w-full font-bold text-xl border-b py-1 outline-none focus:border-indigo-500" value={(content.projects as any)[key].title} onChange={(e) => setContent({...content, projects: {...content.projects, [key]: {...(content.projects as any)[key], title: e.target.value}}})} />
                    ) : (
                      <p className="text-xl font-bold">{(content.projects as any)[key].title}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-300 uppercase font-bold block mb-1">Subtitel</label>
                    {isEditing ? (
                      <textarea className="w-full border border-zinc-100 p-3 text-sm rounded-xl outline-none" value={(content.projects as any)[key].sub} onChange={(e) => setContent({...content, projects: {...content.projects, [key]: {...(content.projects as any)[key], sub: e.target.value}}})} />
                    ) : (
                      <p className="text-sm text-zinc-500 italic">{(content.projects as any)[key].sub}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-300 uppercase font-bold block mb-1">Beschrijving</label>
                    {isEditing ? (
                      <textarea className="w-full border border-zinc-100 p-3 text-sm rounded-xl outline-none h-24" value={(content.projects as any)[key].desc} onChange={(e) => setContent({...content, projects: {...content.projects, [key]: {...(content.projects as any)[key], desc: e.target.value}}})} />
                    ) : (
                      <p className="text-sm text-zinc-400 leading-relaxed">{(content.projects as any)[key].desc}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {isEditing && (
        <div className="fixed bottom-10 right-10 bg-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl animate-pulse z-50">
          <p className="text-[10px] uppercase tracking-widest font-bold">Concept modus: Klik op opslaan om live te gaan</p>
        </div>
      )}
    </div>
  );
}