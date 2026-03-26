function Footer() {
  return (
    <footer className="bg-[#FBF9FE] text-slate-500 pt-6 pb-4 px-4 border-t border-slate-200/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
        <p className="font-light text-sm text-slate-500 max-w-xl">
          Designed and developed by Frederikke Ellen Johansen • Built with React, Tailwind CSS, and DaisyUI • Designed in Figma
        </p>
        <p className="font-light text-xs text-slate-400 italic">
          Actively maintained. Last updated: March 2026.
        </p>
        <div className="text-xs text-slate-400 pt-1">
          © {new Date().getFullYear()} Frederikke Ellen Johansen.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
