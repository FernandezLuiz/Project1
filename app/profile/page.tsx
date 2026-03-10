'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [user, setUser] = useState({ username: "LuizF", firstname: "Luiz", lastname: "Fernandez" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen p-8 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      <div className="flex justify-between items-center border-b border-zinc-200 pb-8 mt-12 mb-20">
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">
          Settings / User Profile
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-[10px] uppercase tracking-widest font-bold underline underline-offset-8 decoration-1"
        >
          {isEditing ? "Finish Editing" : "Modify Details"}
        </button>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-16">
          {['username', 'firstname', 'lastname'].map((field) => (
            <div key={field} className="border-b border-zinc-100 pb-8 group">
              <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 mb-6 group-hover:text-indigo-600 transition-colors">
                {field}
              </label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={user[field as keyof typeof user]} 
                  onChange={(e) => setUser({...user, [field]: e.target.value})}
                  className="w-full text-4xl font-light tracking-tight bg-transparent outline-none border-b border-indigo-200 focus:border-indigo-600 transition-all py-2"
                />
              ) : (
                <p className="text-5xl font-light tracking-tighter">
                  {user[field as keyof typeof user]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-80 h-80 rounded-full border border-zinc-100 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-50 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
            <span className="text-8xl font-serif italic text-zinc-200 group-hover:text-indigo-600 transition-colors duration-500 relative z-10">
              {user.firstname[0]}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}