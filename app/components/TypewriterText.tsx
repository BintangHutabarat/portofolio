"use client";
import { useState, useEffect } from "react";

interface Props {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export default function TypewriterText({
  text,
  delay = 0,
  speed = 28,
  className = "",
  cursor = true,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimer: ReturnType<typeof setTimeout>;
    let typeInterval: ReturnType<typeof setInterval>;

    startTimer = setTimeout(() => {
      typeInterval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(typeInterval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(typeInterval);
    };
  }, [text, delay, speed]);

  const done = count >= text.length;

  return (
    <span className={className}>
      {text.slice(0, count)}
      {cursor && !done && (
        <span className="inline-block w-[2px] h-[0.9em] bg-current align-middle animate-blink ml-px" />
      )}
    </span>
  );
}
