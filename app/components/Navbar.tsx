"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[var(--gutter)] py-4 text-white bg-ink/80 backdrop-blur">
      <Link href="/" className="t-sub" aria-label="Bintang Hutabarat, home">
        Bintang<span className="dot" aria-hidden="true" />
      </Link>
      <nav aria-label="Primary" className="hidden gap-8 font-semibold md:flex">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <span className="hidden md:block"><Link href="/#contact" className="btn">Let&apos;s talk</Link></span>
        <button className="rounded-full bg-night px-4 py-2 text-sm font-semibold md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div id="menu" className="fixed inset-0 -z-10 flex flex-col justify-center gap-6 bg-ink px-[var(--gutter)] md:hidden">
          {[...links, { href: "/#contact", label: "Contact" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="t-h3">{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
