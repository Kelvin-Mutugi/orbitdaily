import { useState } from 'react'
import Header from './components/Header'
import BreakingTicker from './components/BreakingTicker'
import HeroSection from './components/HeroSection'
import SectionLabel from './components/SectionLabel'
import MainContent from './components/MainContent'
import CaseFilesSection from './components/CaseFilesSection'
import SubscribeBand from './components/SubscribeBand'
import Footer from './components/Footer'

/* ─── DATA ─────────────────────────────────────────────────── */
const NAV_ITEMS = ["Home", "True Crime", "Cold Cases", "Mysteries", "Forensics", "Podcasts", "Missing Persons", "Submit a Tip"];

const HERO_SIDES = [
  { cat: "Forensics", title: "When Fingerprints Lie: The Wrongful Conviction Era", desc: "How flawed forensic science sent innocent people to prison." },
  { cat: "Missing Persons", title: "The Blackwood Twins: Gone Without a Trace", desc: "Two brothers vanish during a camping trip. No bodies, no suspects." },
  { cat: "True Crime", title: "The Cipher Killer's Final Letter Decoded", desc: "A cryptographer cracks a 40-year-old message from a serial killer." },
];

const MAIN_ARTICLES = [
  { id: 1, cat: "Cold Case", icon: "🕯️", title: "The Vanishing of Clara Whitmore", excerpt: "A beloved schoolteacher disappears on a foggy November evening in 1987. Thirty-seven years on, new DNA evidence may finally break the silence.", author: "Margaret Osei", date: "April 4, 2026", read: "12 min" },
  { id: 2, cat: "Unsolved", icon: "🔐", title: "The Cipher Killer's Final Letter", excerpt: "A cryptographer reveals what decades of code-breakers missed hidden inside the Riverside Killer's taunting correspondence.", author: "David Nakamura", date: "April 2, 2026", read: "9 min" },
  { id: 3, cat: "Investigation", icon: "🏨", title: "Death at the Grand Pelham Hotel", excerpt: "A locked-room mystery in a luxury hotel baffles detectives. Three suspects, zero witnesses, and a victim with twelve enemies.", author: "Sarah Okonkwo", date: "March 30, 2026", read: "15 min" },
];

const LATEST = [
  { id: 4, cat: "Missing Persons", icon: "👥", title: "Gone Without a Trace: The Blackwood Twins", date: "Apr 5, 2026" },
  { id: 5, cat: "Forensics", icon: "🔬", title: "When the Evidence Lies: Wrongful Conviction Scandals", date: "Apr 4, 2026" },
  { id: 6, cat: "True Crime", icon: "🗺️", title: "The Butcher of Belgravia: London's Forgotten Serial Killer", date: "Apr 3, 2026" },
  { id: 7, cat: "Paranormal", icon: "👻", title: "The Haunting That Turned Into a Homicide", date: "Apr 1, 2026" },
];

const SPOTLIGHT = [
  { num: "01", title: "Inside the Mind of a Con Artist: Six Identities, One Man", author: "Felix Drummond" },
  { num: "02", title: "The Girl Who Survived the Bayou Strangler", author: "Anika Patel" },
  { num: "03", title: "Blood Money: How Inheritance Turns Families Into Suspects", author: "Carlos Reyes" },
];

const MOST_READ = [
  "The Night the Butcher Came to Belgravia",
  "Inside the Doomsday Cult That Vanished",
  "The Heist Nobody Solved: £40 Million Gone",
  "How a Cold Case Cracked an Entire Crime Ring",
  "She Survived. She Remembers Everything.",
];

const TAGS = ["Serial Killers", "Cold Cases", "Forensics", "Missing Persons", "Cults", "Conspiracies", "Exonerations", "Heists", "Paranormal", "Interviews"];

const CASE_FILES = [
  { type: "Podcast Episode", icon: "🎙️", title: "The Night the Town Went Silent", duration: "1 h 14 min" },
  { type: "Documentary", icon: "🎬", title: "Thirteen Days on Death Row", duration: "52 min" },
  { type: "Case Dossier", icon: "📂", title: "The Morrow Estate Files: All Documents", duration: "Downloadable PDF" },
];

const TICKER = "BREAKING: New witness comes forward in the 2019 Harbor Point disappearance  •  DNA evidence reopens 1994 Hillcrest murders investigation  •  Podcast series on the Cipher Killer reaches 10 million listeners  •  Cold case unit announces breakthrough in the Vanishing of Clara Whitmore  •  ";

function App() {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="bg-stone-100 text-stone-900 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Sans+3:wght@300;400;600&display=swap');
        * { box-sizing: border-box; }
        .font-serif { font-family: 'Playfair Display', Georgia, serif !important; }
        .font-sans  { font-family: 'Source Sans 3', sans-serif !important; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-scroll { animation: ticker 32s linear infinite; white-space: nowrap; }
      `}</style>

      <Header activeNav={activeNav} setActiveNav={setActiveNav} NAV_ITEMS={NAV_ITEMS} />
      <BreakingTicker TICKER={TICKER} />

      <main className="max-w-[100vw] mx-auto px-5">
        <SectionLabel text="Featured Stories" />
        <HeroSection HERO_SIDES={HERO_SIDES} />
        <MainContent MAIN_ARTICLES={MAIN_ARTICLES} LATEST={LATEST} SPOTLIGHT={SPOTLIGHT} TAGS={TAGS} MOST_READ={MOST_READ} />
        <CaseFilesSection CASE_FILES={CASE_FILES} />
        <SubscribeBand />
      </main>

      <Footer />
    </div>
  )
}

export default App
