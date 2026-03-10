'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function AdminPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Creative Research");
  const [description, setDescription] = useState("Ik transformeer ruwe gebruikersdata in betekenisvolle digitale ervaringen.");

  return (
    <div className="min-h-screen p-8 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      <div className="flex justify-between items-center border-b border-zinc-200 pb-8 mt-12 mb-20">
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">
          Management / Dashboard
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`px-6 py-2 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all duration-500 ${isEditing ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-zinc-300 hover:border-black'}`}
        >
          {isEditing ? "Save Changes" : "Edit Content"}
        </button>
      </div>

      <main className="space-y-12">
        <div className="group">
          <p className="text-[10px] uppercase tracking-widest text-zinc-300 mb-4 font-bold">Headline Title</p>
          {isEditing ? (
            <input 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-[8vw] font-light tracking-tighter leading-none bg-zinc-50 border-b border-indigo-500 outline-none"
            />
          ) : (
            <h1 className="text-[8vw] font-light tracking-tighter leading-none group-hover:italic transition-all duration-700">{title}</h1>
          )}
        </div>

        <div className="max-w-2xl pt-12 border-t border-zinc-100">
          <p className="text-[10px] uppercase tracking-widest text-zinc-300 mb-4 font-bold">Biography / Description</p>
          {isEditing ? (
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              className="w-full text-2xl font-light leading-snug bg-zinc-50 border-2 border-indigo-100 p-4 rounded-xl outline-none h-40"
            />
          ) : (
            <p className="text-2xl md:text-3xl text-zinc-500 leading-snug font-light italic font-serif">
              "{description}"
            </p>
          )}
        </div>
      </main>
    </div>
  );
}