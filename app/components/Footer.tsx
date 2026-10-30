import Link from "next/link";
import Photo from "./Photo";
import { identity } from "../data/identity";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink px-[var(--gutter)] pb-8 pt-[var(--section)] text-white">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div className="flex items-end gap-6">
          <p className="t-hero" style={{ "--len": 8 } as React.CSSProperties}>Bye</p>
          <Photo className="mb-2 w-[clamp(90px,16vw,240px)]" sizes="240px" />
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 font-semibold">
          <Link href="/#work">Work</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <a href={identity.github}>GitHub</a>
          <a href={identity.linkedin}>LinkedIn</a>
        </nav>
      </div>
      <p className="mt-16 text-sm text-fog">© 2026 Bintang Hutabarat · {identity.location}</p>
    </footer>
  );
}
