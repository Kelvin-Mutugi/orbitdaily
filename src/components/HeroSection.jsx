export default function HeroSection({ HERO_SIDES }) {
  return (
    <div className="grid grid-cols-3 border border-stone-300">
      {/* Hero main */}
      <div className="col-span-2 relative bg-stone-950 min-h-[440px] flex flex-col justify-end p-7 overflow-hidden cursor-pointer group">
        <span className="absolute top-5 right-6 text-[80px] leading-none opacity-10 select-none pointer-events-none">🕯️</span>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-block bg-red-700 text-white font-sans text-[9px] font-semibold tracking-[0.2em] uppercase px-2 py-1 mb-3">
            Editor's Pick &nbsp;·&nbsp; Cold Case
          </span>
          <h2 className="font-serif text-[36px] font-black text-stone-100 leading-[1.1] mb-3 group-hover:text-amber-100 transition-colors">
            The <em className="text-amber-400 not-italic">Vanishing</em> of Clara Whitmore:<br />A Town's 37-Year Secret
          </h2>
          <p className="font-sans text-sm text-stone-400 leading-relaxed mb-4 max-w-xl">
            A schoolteacher beloved by her community disappears without a trace one November night in 1987. New DNA evidence, a deathbed confession, and a retired detective who never gave up may finally crack this haunting case open.
          </p>
          <button className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-amber-400 hover:text-amber-300 transition-colors bg-transparent border-none cursor-pointer flex items-center gap-2">
            Read the Full Investigation <span>→</span>
          </button>
        </div>
      </div>

      {/* Hero side stack */}
      <div className="border-l border-stone-300 flex flex-col divide-y divide-stone-700">
        {HERO_SIDES.map((s, i) => (
          <div key={i} className="flex-1 bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer p-4 flex flex-col justify-end">
            <p className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-red-400 mb-1">{s.cat}</p>
            <h3 className="font-serif text-[15px] font-bold text-stone-200 leading-snug">{s.title}</h3>
            <p className="font-sans text-[12px] text-stone-500 mt-1 leading-snug">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
