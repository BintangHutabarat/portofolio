import type { Metadata } from "next";
import TerminalWindow from "../components/TerminalWindow";
import RevealOnScroll from "../components/RevealOnScroll";
import { projects } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Projects — Bintang B.H. Hutabarat",
};

export default function ProjectsPage() {
  return (
    <div className="py-8 space-y-8">
      <RevealOnScroll>
        <div className="font-mono text-sm space-x-1">
          <span className="text-cyan">user@bintang</span>
          <span className="text-text">:</span>
          <span className="text-purple">~/portfolio</span>
          <span className="text-text">$ ls -la projects/</span>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={i * 80}>
            <TerminalWindow title={`~/projects/${project.slug}`}>
              <div className="space-y-4">
                <div>
                  <span className="inline-block bg-purple/20 border border-purple/40 text-purple px-2 py-0.5 rounded font-mono text-xs mb-2">
                    {project.type}
                  </span>
                  <h3 className="font-mono font-semibold text-text text-base">
                    {project.name}
                  </h3>
                </div>

                <p className="font-sans text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, ti) => (
                    <span
                      key={tech}
                      className="bg-cyan/10 border border-cyan/20 text-cyan px-2 py-0.5 rounded font-mono text-xs
                                 transition-all duration-200 hover:bg-cyan/25 hover:shadow-[0_0_6px_rgba(0,255,255,0.3)]
                                 animate-fade-in"
                      style={{ animationDelay: `${i * 80 + ti * 50}ms`, animationFillMode: "both" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demo || project.github ? (
                  <div className="flex gap-4 pt-2 border-t border-border">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan font-mono text-xs hover:text-cyan/80 transition-colors cursor-pointer"
                      >
                        [live demo]
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted font-mono text-xs hover:text-text transition-colors cursor-pointer"
                      >
                        [github]
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="pt-2 border-t border-border">
                    <span className="text-muted font-mono text-xs">[links coming soon]</span>
                  </div>
                )}
              </div>
            </TerminalWindow>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
