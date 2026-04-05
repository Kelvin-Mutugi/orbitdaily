export default function BreakingTicker({ TICKER }) {
  return (
    <div className="flex items-center overflow-hidden bg-red-800 py-1.5">
      <div className="shrink-0 bg-stone-950 text-amber-400 font-sans text-[10px] font-semibold tracking-[0.2em] uppercase px-4 py-1 mr-4 self-stretch flex items-center">
        Breaking
      </div>
      <span className="ticker-scroll font-sans text-[12px] text-white tracking-wide">{TICKER}{TICKER}</span>
    </div>
  );
}
