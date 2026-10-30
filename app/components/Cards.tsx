import Image from "next/image";
import type { Project } from "../data/projects";

export function Case({ p, i }: { p: Project; i: number }) {
  const body = (
    <>
      <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-[var(--radius-card)] bg-night p-6">
        {p.image && <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="520px" className="object-cover" />}
        <span className="absolute left-5 top-3 font-display text-[clamp(56px,9vw,120px)] font-extrabold leading-none tracking-tighter text-violet" aria-hidden="true" hidden={!!p.image}>
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="badge relative bg-ink/70 text-white">{p.tag}</span>
      </div>
      <h3 className="t-h3 mt-5">{p.name}</h3>
      <p className="t-lead mt-2 text-fog">{p.line}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-fog">
        {p.stack.map((s) => (
          <li key={s} className="badge">{s}</li>
        ))}
      </ul>
    </>
  );
  return p.url ? (
    <a href={p.url} className="case block" target="_blank" rel="noreferrer">{body}</a>
  ) : (
    <div className="case">{body}</div>
  );
}

type Role = { role: string; company: string; place: string; period: string; summary: string; points: string[] };

export function RoleCard({ r }: { r: Role }) {
  return (
    <li className="rounded-[var(--radius-card)] bg-mist p-[var(--gutter)] text-ink" data-rise>
      <p className="font-semibold text-slate">{r.period} · {r.place}</p>
      <h3 className="t-h3 mt-2">{r.role}</h3>
      <p className="t-sub mt-1 text-violet">{r.company}</p>
      <p className="t-lead mt-4 text-slate">{r.summary}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate">
        {r.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </li>
  );
}
