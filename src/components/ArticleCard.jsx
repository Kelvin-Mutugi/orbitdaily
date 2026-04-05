export default function ArticleCard({ a }) {
  return (
    <div className="bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer flex flex-col p-4">
      <div className="w-full aspect-video bg-stone-800 flex items-center justify-center text-4xl mb-3 shrink-0">{a.icon}</div>
      <p className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-red-700 mb-1">{a.cat}</p>
      <h3 className="font-serif text-[17px] font-bold text-stone-900 leading-snug mb-2">{a.title}</h3>
      <p className="font-sans text-[13px] text-stone-500 leading-relaxed flex-1">{a.excerpt}</p>
      <div className="flex items-center flex-wrap gap-1.5 mt-3 font-sans text-[11px] text-stone-400">
        <span>By {a.author}</span>
        <span className="text-red-500">•</span>
        <span>{a.date}</span>
        <span className="text-red-500">•</span>
        <span>{a.read} read</span>
      </div>
    </div>
  );
}
