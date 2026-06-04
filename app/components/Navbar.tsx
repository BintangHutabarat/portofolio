"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "home", path: "/" },
  { label: "experience", path: "/experience" },
  { label: "projects", path: "/projects" },
  { label: "contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">

      {/* ── Desktop ── */}
      <div className="hidden md:flex max-w-5xl mx-auto px-4 h-12 items-center gap-1 overflow-x-auto">
        <Link href="/" className="shrink-0 mr-2 cursor-pointer" aria-label="Home">
          <Image
            src="/icon.png"
            alt="0xW4rd logo"
            width={30}
            height={30}
            className="brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
        </Link>

        <span className="text-cyan font-mono text-sm shrink-0">bintang@portfolio</span>
        <span className="text-muted font-mono text-sm mx-0.5 shrink-0">:~$</span>

        <div className="flex ml-1">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-1 font-mono text-sm transition-colors duration-200 cursor-pointer shrink-0 ${
                pathname === path
                  ? "text-cyan border-b-2 border-cyan"
                  : "text-muted hover:text-text"
              }`}
            >
              ./{label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden">
        <div className="px-4 h-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer" aria-label="Home">
            <Image
              src="/icon.png"
              alt="0xW4rd logo"
              width={30}
              height={30}
              className="brightness-0 invert opacity-80"
            />
            <span className="font-mono text-sm font-bold text-cyan">0xW4rd</span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="font-mono text-sm text-muted hover:text-cyan transition-colors duration-200 cursor-pointer border border-border px-2.5 py-1 rounded"
          >
            {menuOpen ? "[×]" : "[≡]"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-surface">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 font-mono text-sm border-b border-border/50 transition-colors duration-200 cursor-pointer ${
                  pathname === path
                    ? "text-cyan bg-cyan/5"
                    : "text-muted hover:text-text hover:bg-surface-dark/20"
                }`}
              >
                <span className="text-purple text-xs">›</span>
                ./{label}
                {pathname === path && (
                  <span className="ml-auto text-cyan text-xs animate-blink">▌</span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

    </nav>
  );
}
