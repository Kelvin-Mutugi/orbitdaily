import { useState } from "react";

export default function SubscribeBand() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8 bg-stone-950 py-8 px-8 my-7 items-center border-y-4 border-red-800">
      <div>
        <h3 className="font-serif text-[28px] font-black text-stone-100 leading-tight mb-2">
          Never Miss a <em className="text-red-400 not-italic">Dark</em> Chapter
        </h3>
        <p className="font-sans text-[13px] text-stone-400 leading-relaxed">
          Join over 120,000 readers who receive our weekly deep-dives into the world's most gripping unsolved cases, true crime investigations, and mystery analysis — delivered straight to your inbox.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {subscribed ? (
          <p className="font-serif text-xl italic text-amber-400">You're in. Watch your inbox. 🕯️</p>
        ) : (
          <>
            <input className="bg-stone-800 border border-stone-700 focus:border-amber-500 text-stone-200 font-sans text-[13px] px-4 py-2.5 outline-none placeholder:text-stone-600 transition-colors" type="text" placeholder="Your name" />
            <input className="bg-stone-800 border border-stone-700 focus:border-amber-500 text-stone-200 font-sans text-[13px] px-4 py-2.5 outline-none placeholder:text-stone-600 transition-colors" type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={subscribe} className="bg-red-800 hover:bg-red-700 text-white font-sans text-[11px] font-semibold tracking-[0.2em] uppercase py-3 transition-colors border-none cursor-pointer">
              Subscribe to CrimeTales →
            </button>
            <p className="font-sans text-[10px] text-stone-600 tracking-wide">No spam. Unsubscribe at any time.</p>
          </>
        )}
      </div>
    </div>
  );
}
