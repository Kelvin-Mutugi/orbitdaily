export default function Header({ activeNav, setActiveNav, NAV_ITEMS }) {
  return (
    <header className="bg-stone-950 border-b-4 border-red-800">
      {/* Top utility bar */}
      <div className="flex items-center justify-between px-8 py-2 border-b border-stone-800">
        <span className="font-sans text-[10px] tracking-widest uppercase text-stone-500">
          Monday, April 6, 2026 &nbsp;|&nbsp; Nairobi, Kenya
        </span>
        <div className="flex gap-2">
          {["Facebook", "Twitter", "Instagram", "RSS"].map((s) => (
            <span key={s} className="font-sans bg-stone-800 hover:bg-red-800 text-stone-400 hover:text-white px-2 py-0.5 text-[10px] cursor-pointer transition-colors rounded-sm tracking-wide">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="text-center px-8 pt-10 pb-10">
        <h1 className="font-serif text-6xl font-black text-stone-100 tracking-tight leading-none mb-1">
          Orbit<span className="text-red-500">Daily</span>
        </h1>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
          Mysteries &bull; True Crime &bull; Unsolved Cases &bull; Dark History
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="flex-1 h-px bg-stone-800 max-w-[200px]" />
          <div className="w-2 h-2 bg-red-700 rotate-45 shrink-0" />
          <div className="flex-1 h-px bg-stone-800 max-w-[200px]" />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-center flex-wrap bg-stone-900 border-t border-stone-800">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => setActiveNav(item)}
            className={[
              "font-sans text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-3 transition-colors border-none cursor-pointer relative",
              activeNav === item ? "text-amber-400" : "text-stone-400 hover:text-amber-400",
            ].join(" ")}
            style={activeNav === item ? { borderBottom: "2px solid #dc2626" } : {}}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
