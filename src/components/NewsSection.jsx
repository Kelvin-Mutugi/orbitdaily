import SectionLabel from "./SectionLabel";

export default function NewsSection({ LATEST }) {
  return (
    <>
      <SectionLabel text="Latest News" />
      <div className="border border-stone-300 bg-stone-50 px-4 divide-y divide-stone-200">
        {LATEST.map((a) => (
          <div key={a.id} className="grid gap-3 py-3 cursor-pointer group items-start" style={{ gridTemplateColumns: "88px 1fr" }}>
            <div className="bg-stone-800 flex items-center justify-center text-2xl shrink-0" style={{ width: 88, height: 62 }}>{a.icon}</div>
            <div>
              <p className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-red-600 mb-1">{a.cat}</p>
              <p className="font-serif text-[14px] font-bold text-stone-900 group-hover:text-red-800 leading-snug transition-colors">{a.title}</p>
              <p className="font-sans text-[10px] text-stone-400 mt-0.5">{a.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
