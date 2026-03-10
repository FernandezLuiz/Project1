'use client';

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner"; // Of jouw toast component

/* ---------------- SCHEMA ---------------- */
const contactSchema = z.object({
  name: z.string().min(2, "Naam is te kort"),
  email: z.string().email("Ongeldig e-mailadres"),
  subject: z.string().min(3, "Onderwerp is vereist"),
  message: z.string().min(10, "Bericht moet minimaal 10 tekens bevatten"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(data: ContactFormValues) {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    console.log("Contact Data:", data);
    alert("Bericht verzonden (Simulatie)");
    form.reset();
  }

  return (
    <div className="min-h-screen p-8 md:p-20 max-w-[1600px] mx-auto text-[#131313]">
      
      {/* HEADER */}
      <header className="flex justify-between items-start w-full border-b border-zinc-200 pb-8 mt-12 mb-20">
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">
          Inquiry — Contact
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 text-right font-serif italic">
          Let's collaborate <br /> on something great.
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* TITEL (LEFT) */}
        <div className="md:col-span-5">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[8vw] md:text-[6vw] font-light leading-[0.9] tracking-tighter mb-8"
          >
            Start a <br />
            <span className="italic font-serif text-indigo-600">Conversation.</span>
          </motion.h1>
          <p className="text-zinc-400 text-lg font-light max-w-xs">
            Heb je een vraag over mijn onderzoek of wil je samenwerken? Vul het formulier in of stuur een directe mail.
          </p>
        </div>

        {/* FORMULIER (RIGHT) */}
        <div className="md:col-span-7">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            
            {/* NAME FIELD */}
            <div className="group border-b border-zinc-200 focus-within:border-indigo-600 transition-colors duration-500 pb-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 group-focus-within:text-indigo-600 transition-colors">01 — Name</label>
              <input 
                {...form.register("name")}
                className="w-full bg-transparent text-2xl font-light py-4 outline-none placeholder:text-zinc-200"
                placeholder="Hoe heet je?"
              />
              {form.formState.errors.name && <p className="text-xs text-red-400 mt-2">{form.formState.errors.name.message}</p>}
            </div>

            {/* EMAIL & SUBJECT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group border-b border-zinc-200 focus-within:border-indigo-600 transition-colors duration-500 pb-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 group-focus-within:text-indigo-600 transition-colors">02 — Email</label>
                <input 
                  type="email"
                  {...form.register("email")}
                  className="w-full bg-transparent text-2xl font-light py-4 outline-none placeholder:text-zinc-200"
                  placeholder="jouw@email.com"
                />
              </div>
              <div className="group border-b border-zinc-200 focus-within:border-indigo-600 transition-colors duration-500 pb-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 group-focus-within:text-indigo-600 transition-colors">03 — Subject</label>
                <input 
                  {...form.register("subject")}
                  className="w-full bg-transparent text-2xl font-light py-4 outline-none placeholder:text-zinc-200"
                  placeholder="Waar gaat het over?"
                />
              </div>
            </div>

            {/* MESSAGE FIELD */}
            <div className="group border-b border-zinc-200 focus-within:border-indigo-600 transition-colors duration-500 pb-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300 group-focus-within:text-indigo-600 transition-colors">04 — Message</label>
              <textarea 
                rows={4}
                {...form.register("message")}
                className="w-full bg-transparent text-2xl font-light py-4 outline-none placeholder:text-zinc-200 resize-none"
                placeholder="Vertel me meer..."
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end">
              <button 
                type="submit" 
                disabled={loading}
                className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-zinc-200 hover:bg-black hover:text-white transition-all duration-700 overflow-hidden"
              >
                <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold">
                  {loading ? "..." : "Send"}
                </span>
                <div className="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full -z-0"></div>
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}