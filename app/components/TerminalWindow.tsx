interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function TerminalWindow({
  title,
  children,
  className = "",
  glow = true,
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-lg border border-border overflow-hidden ${
        glow ? "terminal-window" : ""
      } ${className}`}
    >
      <div className="bg-surface px-4 py-2.5 flex items-center gap-2 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-muted text-xs font-mono">{title}</span>
      </div>
      <div className="bg-surface-dark p-6">{children}</div>
    </div>
  );
}
