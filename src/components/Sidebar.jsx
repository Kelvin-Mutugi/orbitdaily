import { useState } from "react";

export default function Sidebar({ TAGS, MOST_READ }) {
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = (t) => setActiveTags((p) => p.includes(t) ? p.filter((x) => x !== t) : [...p, t]);

  return (
    <div className="flex flex-col gap-4 pt-6">
      {/* Current Issue */}
      <div className="border border-stone-300">
        <div className="bg-stone-900 text-amber-300 font-sans text-[10px] font-semibold tracking-[0.22em] uppercase px-4 py-2">Current Issue</div>
        <div className="bg-stone-50 p-4">
          <div className="w-full bg-gradient-to-br from-stone-950 to-stone-800 border border-stone-700 flex flex-col items-center justify-center text-center p-4 mb-3" style={{ aspectRatio: "3/4" }}>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-amber-500 mb-2">Vol. XII · April 2026</p>
            <h3 className="font-serif text-2xl font-black text-stone-100 leading-tight">Crime<br />Tales</h3>
            <div className="w-10 h-0.5 bg-red-700 my-2" />
            <p className="font-serif text-sm italic text-stone-300 mb-1">The Cold Case Issue</p>
            <p className="font-sans text-[9px] text-stone-500 tracking-wide">Unsolved · Forgotten · Relentless</p>
          </div>
          <button className="w-full bg-red-800 hover:bg-red-700 text-white font-sans text-[11px] font-semibold tracking-[0.15em] uppercase py-2.5 transition-colors border-none cursor-pointer">
            Read This Issue
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="border border-stone-300">
        <div className="bg-stone-900 text-amber-300 font-sans text-[10px] font-semibold tracking-[0.22em] uppercase px-4 py-2">Explore Categories</div>
        <div className="bg-stone-50 p-4">
          <div className="flex flex-wrap gap-1.5">
            {TAGS.map((tag) => (
              <span
                key={tag}
                onClick={() => toggleTag(tag)}
                className={[
                  "font-sans text-[10px] font-semibold tracking-wide uppercase px-2 py-1 border cursor-pointer transition-all",
                  activeTags.includes(tag)
                    ? "bg-red-800 border-red-800 text-white"
                    : "border-stone-300 text-stone-500 hover:border-red-600 hover:text-red-600",
                ].join(" ")}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Most Read */}
      <div className="border border-stone-300">
        <div className="bg-stone-900 text-amber-300 font-sans text-[10px] font-semibold tracking-[0.22em] uppercase px-4 py-2">Most Read This Week</div>
        <div className="bg-stone-50 px-4 divide-y divide-stone-200">
          {MOST_READ.map((title, i) => (
            <div key={i} className="flex gap-3 py-2.5 cursor-pointer group items-start">
              <span className="font-serif text-xl font-black text-stone-300 shrink-0 leading-none mt-0.5">{i + 1}</span>
              <span className="font-serif text-[13px] text-stone-800 group-hover:text-red-800 leading-snug transition-colors">{title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Submit a Tip */}
      <div>
        <div className="bg-red-800 text-white font-sans text-[10px] font-semibold tracking-[0.22em] uppercase px-4 py-2">Submit a Tip</div>
        <div className="bg-stone-950 p-4">
          <p className="font-sans text-[12px] text-stone-400 leading-relaxed mb-3">
            Do you have information about an unsolved case? Our investigative team reviews all tips confidentially.
          </p>
          <button className="w-full bg-red-900 hover:bg-red-800 text-white font-sans text-[11px] font-semibold tracking-[0.15em] uppercase py-2.5 transition-colors border-none cursor-pointer">
            Submit Anonymously →
          </button>
        </div>
      </div>
    </div>
  );
}
