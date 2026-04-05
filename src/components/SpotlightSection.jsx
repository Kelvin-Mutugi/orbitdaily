import SectionLabel from "./SectionLabel";

export default function SpotlightSection({ SPOTLIGHT }) {
  return (
    <>
      <SectionLabel text="Spotlight" />
      <div className="flex flex-col gap-px">
        {SPOTLIGHT.map((s) => (
          <div key={s.num} className="flex border border-stone-300 bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer">
            <div className="bg-stone-950 flex items-center justify-center font-serif text-4xl font-black text-stone-700 shrink-0" style={{ width: 96, padding: 12 }}>{s.num}</div>
            <div className="p-4">
              <p className="font-serif text-[15px] font-bold text-stone-900 leading-snug">{s.title}</p>
              <p className="font-sans text-[11px] text-stone-400 mt-1">By <span className="text-red-600 font-semibold">{s.author}</span></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
