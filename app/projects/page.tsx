import type { Metadata } from "next";
import { featured, more } from "../data/projects";

export const metadata: Metadata = { title: "Projects", description: "Projects built by Bintang Hutabarat." };

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2 text-fog">
      {items.map((s) => (
        <li key={s} className="badge">{s}</li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  return (
    <div className="px-[var(--gutter)] pb-[var(--section)] pt-40">
      <h1 className="t-h2">Projects<span className="dot" aria-hidden="true" /></h1>
      <ul className="mt-16 grid gap-6">
        {featured.map((p) => (
          <li key={p.name} className="rounded-[var(--radius-card)] bg-night p-[var(--gutter)]">
            <span className="badge text-fog">{p.tag}</span>
            <h2 className="t-h3 mt-4">
              {p.url ? <a href={p.url} className="link" target="_blank" rel="noreferrer">{p.name} ↗</a> : p.name}
            </h2>
            <p className="t-lead mt-2 text-fog">{p.line}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-fog">
              {p.details?.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <Stack items={p.stack} />
          </li>
        ))}
      </ul>
      <h2 className="t-h3 mt-24">More</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {more.map((p) => (
          <li key={p.name} className="rounded-[var(--radius-card)] bg-night p-[var(--gutter)]">
            <span className="badge text-fog">{p.tag}</span>
            <h3 className="t-sub mt-3">{p.name}</h3>
            <p className="mt-2 text-fog">{p.line}</p>
            <Stack items={p.stack} />
          </li>
        ))}
      </ul>
    </div>
  );
}
