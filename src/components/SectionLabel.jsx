export default function SectionLabel({ text, onViewAll }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <span className="bg-red-900 text-amber-300 text-[10px] font-semibold tracking-[0.22em] uppercase px-3 py-1 whitespace-nowrap font-sans shrink-0">
        {text}
      </span>
      <div className="flex-1 h-px bg-stone-300" />
      <button onClick={onViewAll} className="text-red-700 text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap font-sans hover:underline hover:text-red-900 transition-colors bg-transparent border-none cursor-pointer shrink-0">
        View All
      </button>
    </div>
  );
}
