import SectionLabel from "./SectionLabel";

export default function CaseFilesSection({ CASE_FILES }) {
  return (
    <>
      <SectionLabel text="Case Files & Multimedia" />
      <div className="grid grid-cols-3 gap-px bg-stone-300 border border-stone-300 mb-6">
        {CASE_FILES.map((c, i) => (
          <div key={i} className="bg-stone-950 hover:bg-stone-900 transition-colors cursor-pointer relative flex flex-col justify-end p-5 min-h-[200px]">
            <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-15 select-none pointer-events-none">{c.icon}</div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 w-11 h-11 border-2 border-white/40 rounded-full flex items-center justify-center text-white/60 text-sm">▶</div>
            <p className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-red-400 mb-1 relative z-10">{c.type}</p>
            <p className="font-serif text-[15px] font-bold text-stone-200 leading-snug relative z-10">{c.title}</p>
            <p className="font-sans text-[10px] text-stone-500 mt-1 relative z-10">{c.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
}
