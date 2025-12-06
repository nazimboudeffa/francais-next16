
"use client";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/notions", label: "Notions" },
  { href: "/grammaire", label: "Grammaire" },
  { href: "/conjugaison", label: "Conjugaison" },
  { href: "/orthographe", label: "Orthographe" },
  { href: "/vocabulaire", label: "Vocabulaire" },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur bg-zinc-200 dark:bg-zinc-900 shadow-sm mb-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-blue-700 dark:text-blue-300 hover:underline focus:outline-none">
          Ma Littérature
        </Link>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block w-6 h-0.5 bg-blue-700 dark:bg-blue-300 mb-1 transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-700 dark:bg-blue-300 mb-1 transition-all duration-200 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-700 dark:bg-blue-300 transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold text-blue-700 dark:text-blue-300 px-3 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 hover:underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-blue-700 dark:text-blue-300 px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 hover:underline transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;