"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TerminalLoader from "./TerminalLoader";
import TerminalWindow from "./TerminalWindow";
import TypewriterText from "./TypewriterText";
import GlitchText from "./GlitchText";
import RevealOnScroll from "./RevealOnScroll";
import { identity, skills } from "../data/portfolio";

const stats = [
  { value: "4", label: "Companies" },
  { value: "7+", label: "Languages" },
  { value: "9", label: "Projects" },
  { value: "1+", label: "Yrs Exp" },
];

export default function HomeClient() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [heroStarted, setHeroStarted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem("bintang-portfolio-loaded");
    if (seen) {
      setLoading(false);
      setHeroStarted(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("bintang-portfolio-loaded", "1");
    setLoading(false);
    setTimeout(() => setHeroStarted(true), 400);
  };

  if (!mounted) return null;

  const S = 22;
  const nameDelay   = 300;
  const roleDelay   = nameDelay + identity.name.length * S + 150;
  const statusDelay = roleDelay + identity.role.length * S + 200;

  return (
    <>
      {loading && <TerminalLoader onComplete={handleLoaderComplete} />}

      <div className={`transition-opacity duration-700 ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative min-h-[calc(100vh-3rem)] flex items-center py-12 overflow-hidden">
          <div className="hero-glow" aria-hidden="true" />

          {/* Two-column grid on desktop */}
          <div className="relative w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">

            {/* ── LEFT: Identity text ── */}
            <div className="space-y-7">

              {/* Prompt + giant nickname */}
              <div>
                <div className="font-mono text-xs text-muted mb-2">
                  <span className="text-cyan">user@bintang</span>
                  <span className="text-text">:</span>
                  <span className="text-purple">~</span>
                  <span className="text-text">$ whoami</span>
                </div>
                <h1 className="font-mono font-black text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tight">
                  <GlitchText text="0xW4rd" className="text-cyan" />
                </h1>
              </div>

              {/* Full name */}
              <div className="space-y-1.5">
                <p className="text-text font-bold text-xl lg:text-2xl">
                  {heroStarted
                    ? <TypewriterText text={identity.name} delay={nameDelay} speed={S} />
                    : <span className="opacity-0">{identity.name}</span>}
                </p>
                <p className="font-mono text-sm flex items-center gap-2">
                  <span className="text-purple">›</span>
                  <span className="text-cyan/90">
                    {heroStarted
                      ? <TypewriterText text={identity.role} delay={roleDelay} speed={18} />
                      : null}
                  </span>
                </p>
              </div>

              {/* Status + location */}
              <div
                className="flex flex-wrap items-center gap-3 transition-all duration-700"
                style={{
                  opacity: heroStarted ? 1 : 0,
                  transitionDelay: heroStarted ? `${statusDelay}ms` : "0ms",
                }}
              >
                <span className="inline-flex items-center gap-1.5 bg-green/10 border border-green/30 text-green px-3 py-1.5 rounded font-mono text-sm">
                  <span className="w-2 h-2 rounded-full bg-green animate-blink inline-block" />
                  AVAILABLE
                </span>
                <span className="font-mono text-xs text-muted border border-border px-2.5 py-1.5 rounded">
                  loc: Indonesia
                </span>
              </div>

              {/* Stats row */}
              <div
                className="grid grid-cols-4 gap-0 border border-border rounded-lg overflow-hidden transition-all duration-700"
                style={{
                  opacity: heroStarted ? 1 : 0,
                  transitionDelay: heroStarted ? `${statusDelay + 200}ms` : "0ms",
                }}
              >
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`py-4 text-center ${i < stats.length - 1 ? "border-r border-border" : ""} bg-surface/50 hover:bg-surface transition-colors duration-200`}
                  >
                    <div className="font-mono font-bold text-2xl text-cyan leading-none">{stat.value}</div>
                    <div className="font-sans text-[11px] text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div
                className="flex flex-wrap gap-4 transition-all duration-700"
                style={{
                  opacity: heroStarted ? 1 : 0,
                  transitionDelay: heroStarted ? `${statusDelay + 400}ms` : "0ms",
                }}
              >
                <Link
                  href="/projects"
                  className="bg-cyan text-bg px-6 py-2.5 font-mono text-sm font-semibold rounded transition-all duration-200 hover:bg-cyan/80 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] cursor-pointer"
                >
                  ./view_projects
                </Link>
                <Link
                  href="/contact"
                  className="border border-cyan text-cyan px-6 py-2.5 font-mono text-sm rounded transition-all duration-200 hover:bg-cyan/10 hover:shadow-[0_0_12px_rgba(0,255,255,0.2)] cursor-pointer"
                >
                  ./contact_me
                </Link>
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border text-muted px-6 py-2.5 font-mono text-sm rounded transition-all duration-200 hover:border-muted hover:text-text cursor-pointer"
                >
                  ./github
                </a>
              </div>
            </div>

            {/* ── RIGHT: Profile terminal ── */}
            <div className="w-full">
              <TerminalWindow title={`~/profile — ${identity.nickname}`}>
                <div className="space-y-4">
                  {/* Profile picture */}
                  <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden border border-cyan/15 group">
                    <Image
                      src={identity.avatar}
                      alt={identity.shortName}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    {/* Bottom fade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent" />
                    {/* Nickname watermark on image */}
                    <div className="absolute bottom-3 left-3 font-mono text-xs text-cyan/70">
                      {identity.nickname}
                    </div>
                  </div>

                  {/* Identity fields */}
                  <div className="font-mono text-xs space-y-2 pt-1">
                    <div className="flex gap-2">
                      <span className="text-purple w-14 shrink-0">name</span>
                      <span className="text-muted">:</span>
                      <span className="text-text">{identity.shortName}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-purple w-14 shrink-0">handle</span>
                      <span className="text-muted">:</span>
                      <span className="text-cyan font-bold">
                        <GlitchText text={identity.nickname} autoInterval={5000} />
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-purple w-14 shrink-0">email</span>
                      <span className="text-muted">:</span>
                      <a href={`mailto:${identity.email}`} className="text-muted hover:text-cyan transition-colors cursor-pointer truncate">
                        {identity.email}
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-purple w-14 shrink-0">github</span>
                      <span className="text-muted">:</span>
                      <a href={identity.github} target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-cyan/80 transition-colors cursor-pointer">
                        github.com/KuyangC
                      </a>
                    </div>
                  </div>
                </div>
              </TerminalWindow>
            </div>

          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────── */}
        <RevealOnScroll>
          <section className="py-12">
            <TerminalWindow title="about.txt">
              <div className="space-y-4">
                <div className="font-mono text-sm text-purple"># About Me</div>
                <p className="text-muted leading-relaxed max-w-2xl font-sans">{identity.about}</p>
                <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
                  <a href={identity.github} target="_blank" rel="noopener noreferrer"
                    className="text-cyan hover:text-cyan/80 transition-colors cursor-pointer">
                    github.com/KuyangC
                  </a>
                  <span className="text-border">|</span>
                  <a href={identity.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-cyan hover:text-cyan/80 transition-colors cursor-pointer">
                    linkedin.com/in/bintang-bennaya
                  </a>
                  <span className="text-border">|</span>
                  <a href={`mailto:${identity.email}`}
                    className="text-cyan hover:text-cyan/80 transition-colors cursor-pointer">
                    {identity.email}
                  </a>
                </div>
              </div>
            </TerminalWindow>
          </section>
        </RevealOnScroll>

        {/* ── Skills ────────────────────────────────────────────── */}
        <RevealOnScroll delay={100}>
          <section className="py-12">
            <TerminalWindow title="skills.json">
              <div className="space-y-6">
                <div className="font-mono text-sm text-purple"># Skills &amp; Technologies</div>
                {skills.map((group, gi) => (
                  <RevealOnScroll key={group.category} delay={gi * 60}>
                    <div className="flex flex-wrap items-start gap-3">
                      <span className="text-purple font-mono text-xs w-32 shrink-0 mt-1">
                        [{group.category}]
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill, si) => (
                          <span
                            key={skill}
                            className="bg-cyan/10 border border-cyan/20 text-cyan px-2.5 py-1 rounded font-mono text-xs
                                       transition-all duration-200 hover:bg-cyan/25 hover:border-cyan/50
                                       hover:shadow-[0_0_8px_rgba(0,255,255,0.3)] cursor-default animate-fade-in"
                            style={{ animationDelay: `${gi * 60 + si * 40}ms`, animationFillMode: "both" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </TerminalWindow>
          </section>
        </RevealOnScroll>

      </div>
    </>
  );
}
