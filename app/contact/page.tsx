import type { Metadata } from "next";
import TerminalWindow from "../components/TerminalWindow";
import { identity } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
};

const contactLinks = [
  {
    label: "email",
    display: "bintanghutabarat0204@gmail.com",
    href: `mailto:${identity.email}`,
  },
  {
    label: "github",
    display: "github.com/BintangHutabarat",
    href: identity.github,
  },
  {
    label: "linkedin",
    display: "linkedin.com/in/bintang-hutabarat",
    href: identity.linkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="py-8 max-w-2xl space-y-8">
      <TerminalWindow title="contact.sh">
        <div className="font-mono text-sm space-y-4">
          <div>
            <span className="text-cyan">user@bintang</span>
            <span className="text-text">:</span>
            <span className="text-purple">~</span>
            <span className="text-text">$ cat contact.txt</span>
          </div>

          <div className="space-y-3 pl-4 border-l-2 border-border">
            {contactLinks.map((item) => (
              <div key={item.label} className="flex flex-wrap items-center gap-3">
                <span className="text-purple w-16 shrink-0">{item.label}</span>
                <span className="text-muted">→</span>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="text-cyan hover:text-cyan/80 transition-colors cursor-pointer break-all"
                >
                  {item.display}
                </a>
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-purple w-16 shrink-0">status</span>
              <span className="text-muted">→</span>
              <span className="inline-flex items-center gap-1.5 bg-green/10 border border-green/30 text-green px-2 py-0.5 rounded text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-blink inline-block" />
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <span className="text-cyan">user@bintang</span>
            <span className="text-text">:</span>
            <span className="text-purple">~</span>
            <span className="text-text">$ </span>
            <span className="inline-block w-2 h-4 bg-cyan align-middle animate-blink" />
          </div>
        </div>
      </TerminalWindow>

      <TerminalWindow title="message.sh">
        <div className="space-y-4">
          <div className="font-mono text-sm text-purple"># Send a message</div>
          <p className="font-sans text-sm text-muted leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want
            to say hi — feel free to reach out via email or LinkedIn. I typically
            respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`mailto:${identity.email}`}
              className="bg-cyan text-bg px-5 py-2 font-mono text-sm font-semibold rounded hover:bg-cyan/80 transition-colors duration-200 cursor-pointer"
            >
              ./send_email
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-muted px-5 py-2 font-mono text-sm rounded hover:border-muted hover:text-text transition-colors duration-200 cursor-pointer"
            >
              ./linkedin
            </a>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}
