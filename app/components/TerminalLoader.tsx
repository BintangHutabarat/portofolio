"use client";
import { useState, useEffect, useCallback } from "react";

interface LoaderLine {
  cmd: string;
  output: string;
  outputType: "muted" | "cyan" | "green";
  delay: number;
}

const lines: LoaderLine[] = [
  {
    cmd: "whoami",
    output: "Bintang B.H. Hutabarat",
    outputType: "muted",
    delay: 400,
  },
  {
    cmd: "cat role.txt",
    output: "Cybersecurity Enthusiast & Full Stack Developer",
    outputType: "cyan",
    delay: 1200,
  },
  {
    cmd: "echo $LOCATION",
    output: "Indonesia",
    outputType: "muted",
    delay: 2000,
  },
  {
    cmd: "echo $STATUS",
    output: "[STATUS: AVAILABLE FOR OPPORTUNITIES]",
    outputType: "green",
    delay: 2800,
  },
  {
    cmd: "./load_portfolio.sh",
    output: "Initializing portfolio...",
    outputType: "muted",
    delay: 3600,
  },
];

interface TerminalLoaderProps {
  onComplete: () => void;
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);

  const finish = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    lines.forEach((line, i) => {
      const t = setTimeout(() => {
        setStep(i + 1);
        if (i === lines.length - 1) {
          const done = setTimeout(finish, 700);
          timers.push(done);
        }
      }, line.delay);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [finish]);

  return (
    <div
      className={`fixed inset-0 bg-bg z-50 flex items-center justify-center p-4 transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Loading portfolio"
    >
      <div className="w-full max-w-xl">
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="bg-surface px-4 py-2.5 flex items-center gap-2 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-muted text-xs font-mono">terminal — bash — 80×24</span>
          </div>

          <div className="bg-surface-dark p-6 font-mono text-sm min-h-[260px]">
            {lines.slice(0, step).map((line, i) => (
              <div key={i} className="mb-2 animate-fade-in">
                <div>
                  <span className="text-cyan">user@bintang</span>
                  <span className="text-text">:</span>
                  <span className="text-purple">~</span>
                  <span className="text-text">$ {line.cmd}</span>
                </div>
                <div
                  className={`mt-0.5 pl-2 ${
                    line.outputType === "green"
                      ? "text-green"
                      : line.outputType === "cyan"
                      ? "text-cyan"
                      : "text-muted"
                  }`}
                >
                  {line.output}
                </div>
              </div>
            ))}

            {!exiting && (
              <div>
                <span className="text-cyan">user@bintang</span>
                <span className="text-text">:</span>
                <span className="text-purple">~</span>
                <span className="text-text">$ </span>
                <span className="inline-block w-2 h-4 bg-cyan align-middle animate-blink" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
