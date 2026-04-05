export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t-4 border-red-900 pt-8 pb-5 px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-4 gap-8 mb-6">
        <div>
          <p className="font-serif text-[22px] font-black text-stone-100 mb-1">Crime<span className="text-red-500">Tales</span></p>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone-500 mb-3">Mysteries · True Crime · Unsolved Cases</p>
          <p className="font-sans text-[12px] text-stone-500 leading-relaxed">CrimeTales is an independent publication dedicated to rigorous investigative storytelling. We believe every victim deserves a voice and every truth deserves to be told.</p>
        </div>
        {[
          { head: "Sections", links: ["True Crime", "Cold Cases", "Mysteries", "Forensics", "Podcasts", "Missing Persons"] },
          { head: "About", links: ["About Us", "Our Team", "Editorial Policy", "Corrections", "Press Kit", "Contact"] },
        ].map((col) => (
          <div key={col.head}>
            <p className="font-sans text-[9px] font-semibold tracking-[0.25em] uppercase text-amber-500 pb-2 border-b border-stone-800 mb-3">{col.head}</p>
            <div className="flex flex-col gap-1.5">
              {col.links.map((l) => <span key={l} className="font-sans text-[12px] text-stone-500 hover:text-stone-200 cursor-pointer transition-colors">{l}</span>)}
            </div>
          </div>
        ))}
        <div>
          <p className="font-sans text-[9px] font-semibold tracking-[0.25em] uppercase text-amber-500 pb-2 border-b border-stone-800 mb-3">Contact</p>
          <div className="font-sans text-[12px] text-stone-500 leading-loose">
            <p>tips@crimetales.co.ke</p>
            <p>editorial@crimetales.co.ke</p>
            <p className="text-stone-600 text-[11px] tracking-wide mt-2">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto border-t border-stone-800 pt-4 flex items-center justify-between font-sans text-[10px] text-stone-600 tracking-wide">
        <span className="font-serif text-sm font-bold text-stone-300">Crime<span className="text-red-500">Tales</span></span>
        <span>© 2026 CrimeTales. All rights reserved.</span>
        <div className="flex gap-4">
          {["Privacy Policy", "Terms of Use", "Advertise"].map((l) => (
            <span key={l} className="hover:text-stone-300 cursor-pointer transition-colors">{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
