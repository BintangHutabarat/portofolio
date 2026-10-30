import type { Metadata } from "next";
import { RoleCard } from "../components/Cards";
import { experience, education } from "../data/experience";

export const metadata: Metadata = { title: "Experience", description: "Work experience and education of Bintang Hutabarat." };

export default function ExperiencePage() {
  return (
    <div className="bg-paper px-[var(--gutter)] pb-[var(--section)] pt-40 text-ink">
      <h1 className="t-h2">Experience<span className="dot" aria-hidden="true" /></h1>
      <ol className="mt-16 grid gap-6">
        {experience.map((r) => (
          <RoleCard key={r.company} r={r} />
        ))}
      </ol>
      <h2 className="t-h3 mt-24">Education</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <li key={e.school} className="rounded-[var(--radius-card)] bg-mist p-[var(--gutter)]">
            <p className="font-semibold text-slate">{e.period} · {e.place}</p>
            <p className="t-sub mt-2">{e.school}</p>
            <p className="mt-2 text-slate">{e.program}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
