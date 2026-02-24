export default function Navbar({ navItems, activeId, lang, onToggleLang, onScrollTo }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <button
          type="button"
          onClick={() => onScrollTo("home")}
          className="text-sm font-bold tracking-[0.08em] text-white"
        >
          CtrlNick<span className="text-cyan-300">Dev</span>
        </button>
        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => {
            const active = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onScrollTo(item.id)}
                className={`text-xs uppercase tracking-[0.25em] transition ${
                  active ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={onToggleLang}
          className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 hover:border-cyan-300"
        >
          {lang === "sv" ? "EN" : "SV"}
        </button>
      </nav>
    </header>
  );
}
