import { useState } from "react";

const NAV_LINKS = [
  { label: "", href: "#" },
  { label: "", href: "#" },
  { label: "", href: "#" },
  { label: "", href: "#" },
  { label: "", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-zinc-200">
      <div className=" mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-zinc-900">
          Orbit <span className="text-amber-500">Daily</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Subscribe button */}
        <a
          href="#"
          className="hidden md:inline-block text-sm font-medium px-4 py-1.5 bg-zinc-900 text-white rounded hover:bg-amber-500 hover:text-zinc-900 transition-colors"
        >
          Subscribe
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-100 px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="text-sm font-medium text-center px-4 py-1.5 bg-zinc-900 text-white rounded hover:bg-amber-500 hover:text-zinc-900 transition-colors"
          >
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
}