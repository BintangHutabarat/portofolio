import Link from "next/link";
import Photo from "./components/Photo";
import { Case, RoleCard } from "./components/Cards";
import { identity } from "./data/identity";
import { featured, more } from "./data/projects";
import { experience } from "./data/experience";
import { skills } from "./data/skills";

export default function HomePage() {
  const work = [...featured, ...more];
  return (
    <>
      <section aria-labelledby="hero-title" className="relative flex min-h-screen flex-col justify-between overflow-hidden px-[var(--gutter)] pb-10 pt-28">
        <div className="max-w-xl">
          <p className="t-lead">{identity.intro}</p>
          <Link href="#work" className="link mt-6">
            <span>See the work</span><i aria-hidden="true">→</i>
          </Link>
        </div>
        <div className="flex items-end justify-between gap-6">
          <h1 id="hero-title" className="t-hero" style={{ "--len": 8.5 } as React.CSSProperties} aria-label="Hello, I am Bintang Hutabarat">Hello</h1>
          <Photo className="w-[clamp(110px,30vw,460px)] shrink-0" />
        </div>
      </section>

      <section aria-label="Statement" className="px-[var(--gutter)] py-[var(--section)]">
        <p className="t-h2" data-rise>{identity.statement}<span className="dot" aria-hidden="true" /></p>
      </section>

      <section id="work" aria-labelledby="work-title" className="pb-[var(--section)]">
        <div className="px-[var(--gutter)] pb-12">
          <h2 id="work-title" className="t-h2" data-rise>Selected work<span className="dot" aria-hidden="true" /></h2>
          <p className="t-lead mt-6 max-w-2xl text-fog">Industrial IoT, Web3 and fullstack products. Scroll sideways.</p>
        </div>
        <div className="track" tabIndex={0} aria-label="Projects">
          {work.map((p, i) => (
            <Case key={p.name} p={p} i={i} />
          ))}
        </div>
        <div className="px-[var(--gutter)] pt-10">
          <Link href="/projects" className="link"><span>All project details</span><i aria-hidden="true">→</i></Link>
        </div>
      </section>

      <section id="experience" aria-labelledby="exp-title" className="bg-paper px-[var(--gutter)] py-[var(--section)] text-ink">
        <h2 id="exp-title" className="t-h2" data-rise>Experience<span className="dot" aria-hidden="true" /></h2>
        <ol className="mt-16 grid gap-6 lg:grid-cols-2">
          {experience.map((r) => (
            <RoleCard key={r.company} r={r} />
          ))}
        </ol>
        <Link href="/experience" className="link mt-10"><span>Full CV and education</span><i aria-hidden="true">→</i></Link>
      </section>

      <section id="skills" aria-labelledby="skills-title" className="px-[var(--gutter)] py-[var(--section)]">
        <h2 id="skills-title" className="t-h2" data-rise>What I use<span className="dot" aria-hidden="true" /></h2>
        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <li key={s.group} className="rounded-[var(--radius-card)] bg-night p-[var(--gutter)]" data-rise>
              <h3 className="t-h3">{s.group}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="badge">{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="on-violet bg-violet px-[var(--gutter)] py-[var(--section)] text-white">
        <h2 id="contact-title" className="t-hero" style={{ "--len": 10 } as React.CSSProperties} data-rise>
          Let&apos;s talk<span className="dot" aria-hidden="true" />
        </h2>
        <p className="t-lead mt-10 max-w-xl">Hiring, a project, or just a hello. Email is the fastest way.</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a href={`mailto:${identity.email}`} className="btn btn-light">{identity.email}</a>
          <a href={identity.cv} className="link" download><span>Download CV</span><i aria-hidden="true">↓</i></a>
          <a href={identity.github} className="link"><span>GitHub</span></a>
          <a href={identity.linkedin} className="link"><span>LinkedIn</span></a>
          <a href={identity.site} className="link"><span>0xw4rd.site</span></a>
        </div>
      </section>
    </>
  );
}
