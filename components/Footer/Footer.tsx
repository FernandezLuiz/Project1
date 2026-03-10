export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-8 md:px-20 border-t border-zinc-100 mt-20">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* COPYRIGHT */}
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400">
          © {year} — LUIZ FERNANDEZ. ALL RIGHTS RESERVED.
        </div>

        {/* COOKIE LINK & STATUS */}
        <div className="flex gap-8 items-center">
          <a href="/cookie-settings" className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-black transition-colors">
            Cookie Preferences
          </a>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300">System Active</span>
          </div>
        </div>

      </div>
    </footer>
  );
}