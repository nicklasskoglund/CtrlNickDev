import { useState } from "react";

export default function Navbar({
  navItems,
  activeId,
  lang,
  menuLabel,
  closeLabel,
  onToggleLang,
  onScrollTo
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    onScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
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
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.25em] transition ${
                  active ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={onToggleLang}
            className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 hover:border-cyan-300"
          >
            {lang === "sv" ? "EN" : "SV"}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 hover:border-cyan-300 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? closeLabel : menuLabel}
          >
            {menuOpen ? closeLabel : menuLabel}
          </button>
        </div>
      </nav>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-slate-950/90 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-xs uppercase tracking-[0.25em] transition ${
                    active ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
