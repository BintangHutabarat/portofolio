"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TerminalLoader from "./TerminalLoader";
import TerminalWindow from "./TerminalWindow";
import { identity, skills } from "../data/portfolio";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem("bintang-portfolio-loaded");
    if (seen) setLoading(false);
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("bintang-portfolio-loaded", "1");
    setLoading(false);
  };

  if (!mounted) return null;

  return (
    <>
      {loading && <TerminalLoader onComplete={handleLoaderComplete} />}

      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Hero */}
        <section className="min-h-[calc(100vh-8rem)] flex items-center py-12">
          <div className="w-full space-y-8">
            <TerminalWindow title="user@bintang: ~/portfolio — identity.json">
              <div className="font-mono text-sm space-y-4">
                <div>
                  <span className="text-cyan">user@bintang</span>
                  <span className="text-text">:</span>
                  <span className="text-purple">~/portfolio</span>
                  <span className="text-text">$ cat identity.json</span>
                </div>

                {/* Profile picture + info side by side */}
                <div className="flex flex-col sm:flex-row gap-6 pl-4 border-l-2 border-border">
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div className="relative w-28 h-28 rounded-lg overflow-hidden border-2 border-cyan/40 ring-2 ring-cyan/10">
                      <Image
                        src={identity.avatar}
                        alt={identity.shortName}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="mt-2 text-center font-mono text-xs text-cyan">
                      {identity.nickname}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-3 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-purple">name</span>
                      <span className="text-muted">:</span>
                      <span className="text-text font-bold text-xl leading-tight">
                        {identity.name}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-purple">nickname</span>
                      <span className="text-muted">:</span>
                      <span className="text-cyan font-bold">{identity.nickname}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-purple">role</span>
                      <span className="text-muted">:</span>
                      <span className="text-cyan">{identity.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple">location</span>
                      <span className="text-muted">:</span>
                      <span className="text-text">{identity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple">status</span>
                      <span className="text-muted">:</span>
                      <span className="inline-flex items-center gap-1.5 bg-green/10 border border-green/30 text-green px-2 py-0.5 rounded text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-green animate-blink inline-block" />
                        AVAILABLE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="text-cyan">user@bintang</span>
                  <span className="text-text">:</span>
                  <span className="text-purple">~/portfolio</span>
                  <span className="text-text">$ </span>
                  <span className="inline-block w-2 h-4 bg-cyan align-middle animate-blink" />
                </div>
              </div>
            </TerminalWindow>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-cyan text-bg px-6 py-2.5 font-mono text-sm font-semibold rounded hover:bg-cyan/80 transition-colors duration-200 cursor-pointer"
              >
                ./view_projects
              </Link>
              <Link
                href="/contact"
                className="border border-cyan text-cyan px-6 py-2.5 font-mono text-sm rounded hover:bg-cyan/10 transition-colors duration-200 cursor-pointer"
              >
                ./contact_me
              </Link>
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-muted px-6 py-2.5 font-mono text-sm rounded hover:border-muted hover:text-text transition-colors duration-200 cursor-pointer"
              >
                ./github
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-12">
          <TerminalWindow title="about.txt">
            <div className="space-y-4">
              <div className="font-mono text-sm text-purple"># About Me</div>
              <p className="text-muted leading-relaxed max-w-2xl font-sans">
                {identity.about}
              </p>
              <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-cyan/80 transition-colors cursor-pointer"
                >
                  github.com/KuyangC
                </a>
                <span className="text-border">|</span>
                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-cyan/80 transition-colors cursor-pointer"
                >
                  linkedin.com/in/bintang-bennaya
                </a>
                <span className="text-border">|</span>
                <a
                  href={`mailto:${identity.email}`}
                  className="text-cyan hover:text-cyan/80 transition-colors cursor-pointer"
                >
                  {identity.email}
                </a>
              </div>
            </div>
          </TerminalWindow>
        </section>

        {/* Skills */}
        <section className="py-12">
          <TerminalWindow title="skills.json">
            <div className="space-y-6">
              <div className="font-mono text-sm text-purple"># Skills &amp; Technologies</div>
              {skills.map((group) => (
                <div key={group.category} className="flex flex-wrap items-start gap-3">
                  <span className="text-purple font-mono text-xs w-32 shrink-0 mt-1">
                    [{group.category}]
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-cyan/10 border border-cyan/20 text-cyan px-2.5 py-1 rounded font-mono text-xs hover:bg-cyan/20 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </section>
      </div>
    </>
  );
}
