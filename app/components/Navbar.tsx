"use client";
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

  return (
    <nav className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 flex items-center h-12 overflow-x-auto">
        <span className="text-cyan font-mono text-sm shrink-0">bintang@portfolio</span>
        <span className="text-muted font-mono text-sm mx-1 shrink-0">:~$</span>
        <div className="flex ml-2">
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
    </nav>
  );
}
