"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#░▒▓0123456789ABCDEF@$%&";

function scramble(text: string, progress: number) {
  return text
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < progress) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

interface Props {
  text: string;
  className?: string;
  autoInterval?: number;
}

export default function GlitchText({
  text,
  className = "",
  autoInterval = 3500,
}: Props) {
  const [displayed, setDisplayed] = useState(text);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const runGlitch = useCallback(() => {
    if (frameRef.current) clearInterval(frameRef.current);
    let frame = 0;
    const totalFrames = 18;
    frameRef.current = setInterval(() => {
      frame++;
      if (frame >= totalFrames) {
        setDisplayed(text);
        clearInterval(frameRef.current!);
        return;
      }
      const progress = Math.floor((frame / totalFrames) * text.length);
      setDisplayed(scramble(text, progress));
    }, 35);
  }, [text]);

  useEffect(() => {
    const initial = setTimeout(runGlitch, 800);
    const loop = setInterval(runGlitch, autoInterval);
    return () => {
      clearTimeout(initial);
      clearInterval(loop);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [runGlitch, autoInterval]);

  return (
    <span
      className={`cursor-pointer select-none ${className}`}
      onMouseEnter={runGlitch}
      aria-label={text}
    >
      {displayed}
    </span>
  );
}
