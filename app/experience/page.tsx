import type { Metadata } from "next";
import TerminalWindow from "../components/TerminalWindow";
import { experience, education, organization } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Experience — Bintang B.H. Hutabarat",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-10 py-8">

      {/* Work Experience */}
      <TerminalWindow title="work_history.log">
        <div className="space-y-2 font-mono text-xs text-muted mb-6">
          <span className="text-cyan">user@bintang</span>
          <span className="text-text">:</span>
          <span className="text-purple">~/portfolio</span>
          <span className="text-text">$ cat work_history.log</span>
        </div>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-border">
              <span
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${
                  job.current ? "bg-green animate-blink" : "bg-cyan"
                }`}
              />

              <div className="space-y-1.5">
                <div>
                  <span className="font-mono text-xs text-muted bg-surface border border-border px-2 py-0.5 rounded">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="ml-2 font-mono text-xs text-green bg-green/10 border border-green/30 px-2 py-0.5 rounded">
                      current
                    </span>
                  )}
                </div>

                <div className="font-mono font-semibold text-text">{job.company}</div>
                <div className="font-mono text-sm text-purple">{job.role}</div>
                <div className="font-sans text-sm text-muted">{job.focus}</div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan/10 border border-cyan/20 text-cyan px-2 py-0.5 rounded font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TerminalWindow>

      {/* Education */}
      <TerminalWindow title="education.log">
        <div className="space-y-2 font-mono text-xs text-muted mb-6">
          <span className="text-cyan">user@bintang</span>
          <span className="text-text">:</span>
          <span className="text-purple">~/portfolio</span>
          <span className="text-text">$ cat education.log</span>
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-border">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple" />
              <div className="space-y-1">
                <span className="font-mono text-xs text-muted bg-surface border border-border px-2 py-0.5 rounded inline-block">
                  {edu.period}
                </span>
                <div className="font-mono font-semibold text-text">{edu.institution}</div>
                <div className="font-sans text-sm text-muted">{edu.program}</div>
              </div>
            </div>
          ))}
        </div>
      </TerminalWindow>

      {/* Organization */}
      <TerminalWindow title="organization.log">
        <div className="space-y-2 font-mono text-xs text-muted mb-6">
          <span className="text-cyan">user@bintang</span>
          <span className="text-text">:</span>
          <span className="text-purple">~/portfolio</span>
          <span className="text-text">$ cat organization.log</span>
        </div>

        <div className="space-y-4">
          {organization.map((org, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-border">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <div className="space-y-1">
                <span className="font-mono text-xs text-muted bg-surface border border-border px-2 py-0.5 rounded inline-block">
                  {org.period}
                </span>
                <div className="font-mono font-semibold text-text">{org.name}</div>
                <div className="font-sans text-sm text-muted">{org.role}</div>
              </div>
            </div>
          ))}
        </div>
      </TerminalWindow>

    </div>
  );
}
